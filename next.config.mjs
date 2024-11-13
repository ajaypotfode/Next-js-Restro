/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**' // Adjust this to match the path structure in your URLs
      }
    ],
  },
    eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
