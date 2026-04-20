import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable worker threads for shared hosting
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  
  // Skip TypeScript checks during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable image optimization to avoid cache issues on shared hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
