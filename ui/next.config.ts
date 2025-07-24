import type { NextConfig } from "next";


// Update these if your repo is not served from the root (e.g., /<repo-name>)
const repoName = "daily-papers";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
