/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'wallpaperswide.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
}
