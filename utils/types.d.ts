import { Prisma } from "@prisma/client";

export type AggregateSearchKey<T extends Record<string, any>> =
  | keyof T
  | `${keyof T extends string ? keyof T : never}.${string}`;
export type AggregateFilters<T extends Record<string, any>> = {
  [key in keyof T]?: {
    [k in keyof Prisma.StringFilter]?: string;
  } & {
    [k in keyof Prisma.StringNullableListFilter]?: string;
  };
};
export type AggregateGridOptions<T extends Record<string, any>> = {
  keys?: AggregateSearchKey<T>[];
  filters?: AggregateFilters<T>;
};

export type ORMMethods = {
  count: (model: string, where?: Where<any>) => Promise<number>;
  getOne: <T>(model: string, query: OneQuery<T>) => Promise<T>;
  getMany: <T>(model: string, query: ManyQuery<T>) => Promise<T[]>;
  createOne: <T>(model: string, data: Partial<T>) => Promise<T>;
  updateOne: <T>(
    model: string,
    where: Where<T>,
    data: Partial<T>
  ) => Promise<T>;
  deleteOne: <T>(model: string, where: Where<T>) => Promise<T>;
};

export type Provider = (...args: any[]) => ORMMethods;

export type OneQuery<T> = {
  where: Where<T>;
  include?: Include;
};

export type ManyQuery<T> = {
  where?: Where<T>;
  include?: Include;
  orderBy?: OrderBy<T>;
} & Pagination;

export type Pagination = {
  take?: number;
  skip?: number;
};

export type Where<T> = {
  [key in keyof T]?: T[key];
};

export type Include = {
  [key in string]?: boolean;
};

export type OrderBy<T> = {
  [key in keyof T]?: "asc" | "desc";
};

export interface IORM {
  resources: Resource<any>[];
  methods: ORMMethods;
  router: typeof express.Router;
  createResource<
    T extends {
      [key: string]: z.ZodTypeAny;
    } = any
  >(
    name: string,
    schema: T
  ): Resource<T>;
  expose(): typeof express.Router;
}
