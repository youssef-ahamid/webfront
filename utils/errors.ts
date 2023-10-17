import type { VercelResponse } from "@vercel/node";

export interface IError {
  message: string;
  error?: object | string | null | undefined;
  code: number;
}

export type ErrorFunction = ReturnType<typeof createError>;

export type CommonErrors =
  | "invalid"
  | "notFound"
  | "server"
  | "conflict"
  | "unauthenticated"
  | "unauthorized"
  | "paymentFailed";

export type OtherErrors = Omit<string, CommonErrors>;

export type ErrorsDeclaration<TN extends OtherErrors[number] = never> = {
  [key in CommonErrors]: [string, number];
} & {
  [key in TN]: [string, number];
};

export const baseErrors: ErrorsDeclaration = {
  invalid: ["Invalid request", 400],
  notFound: ["Resource not found", 404],
  server: ["Invalid request", 500],
  conflict: ["Conflict with existing resources", 409],
  unauthenticated: ["You need to log in to perform this action.", 401],
  unauthorized: [
    "You do not have sufficient permissions to perform this action.",
    403,
  ],
  paymentFailed: ["Payment failed. Please try again later.", 402],
};

export function createError(msg: string, statusCode: number) {
  return (
    message = msg,
    error: object | string | null | undefined = null,
    code = statusCode
  ) => {
    console.error(code, message, error);
    throw { message, code, error };
  };
}

export function ErrorResponse(error: IError | undefined, res: VercelResponse) {
  if (!error) console.error("Error response called without error object");

  if (res.headersSent) return console.error("Headers already sent", error);
  res.status(error?.code ?? 500).send({
    message: error?.message ?? "Internal server error",
    error: error?.error ?? {},
  });
}

export function createApplicationErrors<
  ErrorName extends string,
  Errors extends {
    [key in ErrorName | CommonErrors]: [string, number];
  } = ErrorsDeclaration<Omit<ErrorName, CommonErrors>[number]>
>(errors: Errors = baseErrors as Errors) {
  const errorObject: { [key in keyof Errors]: ErrorFunction } = {} as any;

  const errorEntries = Object.entries({
    ...baseErrors,
    ...errors,
  }) as [ErrorName, [string, number]][];

  errorEntries.forEach(([key, [message, code]]) => {
    errorObject[key] = createError(message, code);
  });

  return errorObject;
}

export const errors = createApplicationErrors(baseErrors);
