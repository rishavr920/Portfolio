// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [], // old features
  },
  // ✅ Correct way to disable lightningcss:
  compiler: {
    lightningcss: false,
  },
};

module.exports = nextConfig;

