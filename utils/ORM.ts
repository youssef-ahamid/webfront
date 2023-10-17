import express from "express";
import { z } from "zod";
import { Resource, tryCatchHandler } from "./routes";

import type { ORMMethods, Provider, ManyQuery, IORM } from "./types.d";

export class ORM implements IORM {
  public resources: Resource<any>[] = [];
  public methods: ORMMethods;
  public router: express.Router;
  public introspection: boolean;
  public allow?: (email: string) => boolean;

  constructor({
    provider,
    introspection = false,
    resources,
    allow,
    allowList,
  }: {
    provider: Provider;
    introspection?: boolean;
    resources?: {
      [key: string]: {
        [key: string]: z.ZodTypeAny;
      };
    };
    allow?: (email: string) => boolean[];
    allowList?: string[];
  }) {
    this.methods = provider();
    this.router = express.Router();
    this.introspection = introspection;
    this.allow = (email) => {
      if (allowList && allowList.includes(email)) return true;

      return allow?.(email).filter((passedTest) => !passedTest).length === 0;
    };

    if (resources)
      Object.entries(resources).forEach(([name, schema]) =>
        this.createResource<any>(name, schema)
      );
  }

  init() {
    console.log("Initializing ORM");
  }

  async schema() {
    const schema: { count: number; name: string; schema: any }[] = [];
    for (const resource of this.resources) {
      const count = await resource.count();
      schema.push({
        count,
        name: resource.name,
        schema: resource.schema,
      });
    }
    return schema;
  }

  async collection<T>(name: string, query: ManyQuery<T> = {}) {
    const { skip = 0, take = 100, ...rest } = query;

    if (
      !this.resources
        .map((r) => r.name.toLowerCase())
        .includes(name.toLowerCase())
    )
      return null;

    const count = await this.methods.count(name, rest);
    const items = await this.methods.getMany(name, { skip, take });

    return {
      count,
      items,
    };
  }

  createIntrospectionEndpoint() {
    this.router.get(
      "/api/schema",
      tryCatchHandler(async (_, res) => res.json(await this.schema()))
    );
  }

  createCollectionEndpoint() {
    this.router.get(
      "/api/collection/:name",
      tryCatchHandler(async (req, res) =>
        res.json(
          await this.collection(req.params["name"] as string, {
            take: parseInt(req.query.take || "100"),
            skip: parseInt(req.query.skip || "0"),
          })
        )
      )
    );
  }

  createResource<TObj>(
    name: string,
    schema: {
      [key in keyof TObj]?: z.ZodType<TObj[key]>;
    }
  ) {
    const resource = new Resource(name, schema, this);
    this.resources.push(resource);
    return resource;
  }

  expose() {
    this.resources.forEach((resource) => resource.expose());
    if (this.introspection) this.createIntrospectionEndpoint();
    this.createCollectionEndpoint();
    return this.router;
  }
}

export const jsonify = <T = any>(obj: T) =>
  JSON.parse(JSON.stringify(obj)) as T;