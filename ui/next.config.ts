import type { NextConfig } from "next";

const repoName = process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\//, "") : "daily-papers";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || `/${repoName}`;
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : `/${repoName}/`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
