import frontFetch from "../fetch";
import { ZodSchema, ZodType, zodValidate } from "@/utils/zod";

export type RequestOptions<T> = {
  headers?: Record<string, string>;
  included?: (keyof T)[];
};

export default class FrontObject<
  T extends ZodSchema,
  TM extends {
    [key: string]: (
      obj: FrontObject<T, TM>,
      ...args: any[]
    ) => Promise<any> | any;
  }
> {
  public token: string | null = null;
  public Type = {} as ZodType<T>;
  get methods() {
    return Object.entries(this.additionalMethods).reduce(
      (acc, [key, value]) => {
        acc[key] = value.bind(null, this);
        return acc;
      },
      {} as {
        [key: string]: (...args: any[]) => Promise<any> | any;
      }
    ) as {
      [key in keyof TM]: TM[key] extends (
        obj: FrontObject<T, TM>,
        ...args: infer A
      ) => Promise<any> | any
        ? (...args: A) => ReturnType<TM[key]>
        : never;
    };
  }
  constructor(
    public name: string,
    private schema: T,
    private path: string,
    private additionalMethods: TM = {} as TM
  ) {}

  public setToken(token: string) {
    this.token = token;
  }

  public validate(data: any, options?: { partial?: boolean }) {
    return zodValidate(data, this.schema, options);
  }

  public async getMany(options?: RequestOptions<ZodType<T>>) {
    return frontFetch.setToken<ZodType<T>[]>(this.token)(this.path, options);
  }

  public async getOne(id: string, options?: RequestOptions<ZodType<T>>) {
    return frontFetch.setToken<ZodType<T>>(this.token)(
      this.path + "/" + id,
      options
    );
  }
  public async getOneWhere<K extends keyof ZodType<T>>(
    key: K,
    value: ZodType<T>[K],
    options?: RequestOptions<ZodType<T>>
  ) {
    return frontFetch.setToken<ZodType<T>>(this.token)(
      this.path + "/" + key.toString() + "/" + value + "/unique",
      options
    );
  }
  public async getWhere<K extends keyof ZodType<T>>(
    key: K,
    value: ZodType<T>[K],
    options?: RequestOptions<ZodType<T>>
  ) {
    return frontFetch.setToken<ZodType<T>[]>(this.token)(
      this.path + "/" + key.toString() + "/" + value,
      options
    );
  }

  public async create(data: ZodType<T>, options?: RequestOptions<ZodType<T>>) {
    const { success, issues, data: payload } = zodValidate(data, this.schema);
    if (!success) throw { issues };
    return frontFetch.setToken<ZodType<T>>(this.token)(this.path, {
      ...options,
      method: "POST",
      body: payload,
    });
  }

  public async update(
    id: string,
    data: Partial<ZodType<T>>,
    options?: RequestOptions<ZodType<T>>
  ) {
    const {
      success,
      issues,
      data: payload,
    } = zodValidate(data, this.schema, { partial: true });
    if (!success) throw { issues };
    return frontFetch.setToken<ZodType<T>>(this.token)(this.path + "/" + id, {
      ...options,
      method: "PATCH",
      body: payload,
    });
  }

  public async delete(id: string, options?: RequestOptions<ZodType<T>>) {
    return frontFetch.setToken<ZodType<T>>(this.token)(this.path + "/" + id, {
      ...options,
      method: "DELETE",
    });
  }
}
