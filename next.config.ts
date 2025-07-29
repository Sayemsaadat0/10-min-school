import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product/ielts-course',
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.10minuteschool.com',
      },
    ],
  },
};

export default nextConfig;
