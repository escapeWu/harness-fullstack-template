import { apiGet } from "../lib/api";
import type { HealthResponse } from "../types";

export default async function Home() {
  let health: HealthResponse | null = null;

  try {
    health = await apiGet<HealthResponse>("/api/health");
  } catch {
    health = null;
  }

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>harness-fullstack-template</h1>
      <p>Docs-first fullstack harness with typed API boundaries.</p>
      <section>
        <h2>Backend health</h2>
        {health ? (
          <pre>{JSON.stringify(health, null, 2)}</pre>
        ) : (
          <p>Backend unavailable. Start the API server to verify integration.</p>
        )}
      </section>
    </main>
  );
}
