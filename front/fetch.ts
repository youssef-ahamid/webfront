import { RequestOptions } from "./Client/Object";

async function frontFetch<T>(
  path: string,
  options: {
    method?: string;
    body?: any;
  } & RequestOptions<T> = {
    method: "GET",
    body: undefined,
    headers: undefined,
    included: [],
  }
) {
  const { method = "GET", body, headers } = options;
  const endpoint =
    "http://localhost:3000/api/" +
    path +
    (options.included ? `?include=${options.included.join(",")}` : "");
  console.log("[FRONT]:", endpoint);
  const res = await fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw await res.text();
  }

  const data = await res.json();

  if (res.status < 200 || res.status >= 300) {
    throw data;
  }

  return data as T;
}

frontFetch.setToken = <T>(token: string | null) => {
  return (
    path: string,
    options: {
      method?: string;
      body?: any;
      headers?: Record<string, string>;
      included?: (keyof T)[];
    } = { method: "GET", body: undefined, headers: undefined, included: [] }
  ) => {
    return frontFetch<T>(path, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: token ? "Bearer " + token : "",
      },
    });
  };
};

export default frontFetch;
