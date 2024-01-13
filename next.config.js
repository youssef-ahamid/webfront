/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    nextScriptWorkers: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
