async function frontFetch<T>(
  path: string,
  method = "GET",
  body?: any,
  headers?: Record<string, string>
) {
  console.log("frontFetch", "https://front.memoized.tech/api/" + path);
  const res = await fetch("https://front.memoized.tech/api/" + path, {
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
    method = "GET",
    body?: any,
    headers?: Record<string, string>
  ) => {
    return frontFetch<T>(path, method, body, {
      ...headers,
      Authorization: (token && "Bearer " + token) || "",
    });
  };
};

export default frontFetch;
