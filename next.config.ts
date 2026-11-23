import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3", "bcrypt"],
  experimental: {
    agentFeedback: true,
  },
};

export default nextConfig;
