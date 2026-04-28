import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,
    webpackBuildWorker: true,
  },
  allowedDevOrigins: ['10.49.17.105'],
};

export default nextConfig;