import { RequestOptions } from "./Client/Object";

async function frontFetch<T>(
  path: string,
  options: {
    method?: string;
    body?: any;
    json?: boolean;
  } & RequestOptions<T> = {
    method: "GET",
    body: undefined,
    headers: undefined,
    included: [],
    json: true,
  }
) {
  const { method = "GET", body, headers, json = true } = options;
  const endpoint =
    `${process.env.NEXT_PUBLIC_FRONT_URL}/api/` +
    path +
    (options.included?.length ? `?include=${options.included.join(",")}` : "");
  console.log(
    method.toLocaleUpperCase(),
    endpoint,
    body ? (json ? JSON.stringify(body) : body) : ""
  );
  const res = await fetch(endpoint, {
    method,
    headers: json
      ? { ...headers, "Content-Type": "application/json" }
      : headers,
    body: body ? (json ? JSON.stringify(body) : body) : undefined,
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw await res.text();
  }

  const data = await res.json();

  if (res.status < 200 || res.status >= 400) {
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
