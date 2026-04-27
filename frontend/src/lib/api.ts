function resolveApiPath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

async function apiRequest<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(resolveApiPath(path), {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  if (!response.ok) {
    throw new Error(`${init.method ?? "GET"} ${path} failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function apiGet<T>(path: string): Promise<T> {
  return apiRequest<T>(path, {
    method: "GET",
    cache: "no-store",
  });
}

export async function apiPost<T>(
  path: string,
  body?: Record<string, unknown>,
): Promise<T> {
  return apiRequest<T>(path, {
    method: "POST",
    body: body ? JSON.stringify(body) : undefined,
  });
}

export async function apiPatch<T>(
  path: string,
  body: Record<string, unknown>,
): Promise<T> {
  return apiRequest<T>(path, {
    method: "PATCH",
    body: JSON.stringify(body),
  });
}
