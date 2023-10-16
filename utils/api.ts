import {
  AuthenticationPayload,
  Credentials,
  RegistrationPayload,
} from "@/auth";
import { User } from "@prisma/client";

export function fetcher<T = any>(
  url: string,
  body?: any,
  options?: RequestInit
) {
  return fetch(
    url,
    body
      ? {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          ...options,
        }
      : {}
  ).then((res) => res.json()) as Promise<T>;
}

export const api = {
  login: (credentials: AuthenticationPayload) =>
    fetcher<
      | {
          loggedIn: false;
          user: null;
          message?: string;
        }
      | {
          loggedIn: true;
          user: User;
          message?: null;
        }
    >("/api/login", credentials),
  register: (credentials: RegistrationPayload) =>
    fetcher<
      | {
          success: false;
          message?: string;
          user: null;
        }
      | {
          success: true;
          message?: null;
          user: User;
        }
    >("/api/register", credentials),
} as const;
