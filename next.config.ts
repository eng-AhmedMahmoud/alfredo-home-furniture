import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is hosted on Cloudflare Pages (scripts/deploy-pages.sh).
  output: "export",
  images: {
    // No image optimizer on a static host; images load straight from Unsplash.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
