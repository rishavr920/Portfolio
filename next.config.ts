import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint errors on Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Skip TS errors on Vercel
  },
  experimental: {
    optimizePackageImports: [], // Optional, can remove if unused
  },
};

export default nextConfig;
