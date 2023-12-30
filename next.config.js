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
    domains: [
      "front.memoized.tech",
      "placehold.co",
    ],
  },
};

module.exports = nextConfig;
