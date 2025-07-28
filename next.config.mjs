/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all HTTPS images from any domain
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.talhatabish.pro/:path*',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
