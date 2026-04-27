import path from "node:path";
import type { NextConfig } from "next";
import { loadEnvConfig } from "@next/env";

const frontendDir = process.cwd();
loadEnvConfig(frontendDir);
loadEnvConfig(path.resolve(frontendDir, ".."));

const backendHost =
  process.env.HT_BACKEND_HOST && !["0.0.0.0", "::"].includes(process.env.HT_BACKEND_HOST)
    ? process.env.HT_BACKEND_HOST
    : "localhost";
const backendPort = process.env.HT_BACKEND_PORT ?? "8000";
const backendBaseUrl = (
  process.env.NEXT_BACKEND_API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  `http://${backendHost}:${backendPort}`
).replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendBaseUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
