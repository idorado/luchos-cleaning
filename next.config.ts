import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2kd0cre8z.ufs.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tv7odam5so.ufs.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
