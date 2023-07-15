/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.pixabay.com',
      'www.hostinger.com.br',
      'posdigital.pucpr.br',
      'www.next4.com.br',
      'img.freepik.com',
    ],
  },
}

module.exports = nextConfig
