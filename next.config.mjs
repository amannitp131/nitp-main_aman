/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**", // Allows images from any domain
          },
        ],
      },
};

export default nextConfig;
