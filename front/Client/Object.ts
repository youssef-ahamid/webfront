import frontFetch from "../fetch";
import { ZodSchema, ZodType, zodValidate } from "@/utils/zod";

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

  public async getMany() {
    return frontFetch.setToken<ZodType<T>[]>(this.token)(this.path);
  }

  public async getOne(id: string) {
    return frontFetch.setToken<ZodType<T>>(this.token)(this.path + "/" + id);
  }
  public async getOneWhere<K extends keyof ZodType<T>>(
    key: K,
    value: ZodType<T>[K]
  ) {
    return frontFetch.setToken<ZodType<T>>(this.token)(
      this.path + "/" + key.toString() + "/" + value + "/unique"
    );
  }
  public async getWhere<K extends keyof ZodType<T>>(
    key: K,
    value: ZodType<T>[K]
  ) {
    return frontFetch.setToken<ZodType<T>[]>(this.token)(
      this.path + "/" + key.toString() + "/" + value
    );
  }

  public async create(data: ZodType<T>) {
    const { success, issues, data: payload } = zodValidate(data, this.schema);
    if (!success) throw { issues };
    return frontFetch.setToken<ZodType<T>>(this.token)(
      this.path,
      "POST",
      payload
    );
  }

  public async update(id: string, data: Partial<ZodType<T>>) {
    const {
      success,
      issues,
      data: payload,
    } = zodValidate(data, this.schema, { partial: true });
    if (!success) throw { issues };
    return frontFetch.setToken<ZodType<T>>(this.token)(
      this.path + "/" + id,
      "PATCH",
      payload
    );
  }

  public async delete(id: string) {
    return frontFetch.setToken<ZodType<T>>(this.token)(
      this.path + "/" + id,
      "DELETE"
    );
  }
}
