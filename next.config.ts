import type { NextConfig } from "next";

const [owner = "", repo = ""] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserOrOrgPagesRepo =
  repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath =
  process.env.GITHUB_ACTIONS && !isUserOrOrgPagesRepo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
