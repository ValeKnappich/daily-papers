import type { NextConfig } from "next";


// Update these if your repo is not served from the root (e.g., /<repo-name>)
export const repoName = "daily-papers";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
