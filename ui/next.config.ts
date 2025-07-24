import type { NextConfig } from "next";


// Update these if your repo is not served from the root (e.g., /<repo-name>)
const repoName = "ui"; // Change to your repo name if needed
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES ? `/${repoName}` : undefined,
  assetPrefix: process.env.GITHUB_PAGES ? `/${repoName}/` : undefined,
};

export default nextConfig;
