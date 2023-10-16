import { z } from "zod";

export function zodValidate<T extends Record<string, z.ZodTypeAny>>(
  data: any,
  zodSchema: T
):
  | {
      success: false;
      issues: {
        path: string;
        message: string;
      }[];
      data: null;
    }
  | {
      success: true;
      data: {
        [K in keyof T]: T[K] extends z.ZodTypeAny ? z.TypeOf<T[K]> : never;
      };
      issues: null;
    } {
  const result = z.object(zodSchema).safeParse(data);
  if (!result.success) {
    const issues = result.error.issues.map((issue) => {
      return {
        path: issue.path.join("."),
        message: issue.message,
      };
    });
    return {
      success: false,
      issues,
      data: null,
    };
  }

  return { ...result, issues: null };
}
