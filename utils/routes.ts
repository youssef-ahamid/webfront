import { z } from "zod";
import express from "express";

import { ErrorResponse, IError, errors } from "./errors";
import { IORM } from "./types.d";
import { zodValidate } from "./zod";
import { VercelResponse } from "@vercel/node";

export type ExpressRequestHandler = (
  req: express.Request,
  res: VercelResponse
) => Promise<any>;

export const tryCatchHandler =
  (fn: ExpressRequestHandler) =>
  async (req: express.Request, res: VercelResponse) => {
    try {
      const obj = await fn(req, res);
      return res.json(obj);
    } catch (err) {
      console.error(err);
      return ErrorResponse(err as IError, res);
    }
  };

function createBaseRouter<
  SCHEMA extends {
    [key: string]: z.ZodTypeAny;
  }
>({ router, methods }: IORM, name = "", schema: SCHEMA) {
  const basePath = "/api/" + name;

  const getOne = tryCatchHandler((req) =>
    methods.getOne(name, { where: { id: req.params.id } })
  );
  const getMany = tryCatchHandler(() => methods.getMany(name, {}));

  const create = tryCatchHandler(async (req) => {
    const { success, data, issues } = zodValidate(req.body, schema);
    if (!success) return errors.invalid("Invalid data", issues);
    return methods.createOne(name, data);
  });

  const update = tryCatchHandler(async (req) => {
    const { success, data, issues } = zodValidate(req.body, schema, {
      partial: true,
    });
    if (!success) return errors.invalid("Invalid data", issues);

    return methods.updateOne(name, { where: { id: req.params.id } } as any, data);
  });
  const deleteOne = tryCatchHandler((req) =>
    methods.deleteOne(name, { where: { id: req.params.id } })
  );

  router.get(basePath, getMany);
  router.post(basePath, create);
  router.get(basePath + "/:id", getOne);
  router.patch(basePath + "/:id", update);
  router.delete(basePath + "/:id", deleteOne);

  return router;
}

export class Resource<
  SCHEMA extends {
    [key: string]: z.ZodTypeAny;
  }
> {
  constructor(public name = "", public schema: SCHEMA, public ORM: IORM) {}

  public expose() {
    return createBaseRouter(this.ORM, this.name, this.schema);
  }

  public async count() {
    return await this.ORM.methods.count(this.name);
  }
}
