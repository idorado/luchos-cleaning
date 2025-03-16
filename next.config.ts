import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2kd0cre8z.ufs.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "xsgames.co",
        pathname: "/randomusers/**",
      }
    ]
  },
};

export default nextConfig;
