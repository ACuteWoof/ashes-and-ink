import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://assets.lulu.com/**')],
  },
};

export default nextConfig;
