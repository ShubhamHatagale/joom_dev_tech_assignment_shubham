import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // ✅ Ensure trailingSlash for static hosting
  trailingSlash: true,

  // ✅ Only use SSG features
  output: "export", // This is new in Next.js 13+

  // ✅ Skip TypeScript type errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Skip ESLint errors & warnings during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), "canvas"];
    }
    return config;
  },
};

export default nextConfig;
