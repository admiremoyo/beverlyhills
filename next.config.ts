import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Allow Remotion to work
  transpilePackages: ["remotion", "@remotion/player"],
};

export default nextConfig;
