/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const nextConfig = {
  swcMinify: true,
  assetPrefix: isProduction ? '/next-d3-starter/' : '',
}

module.exports = nextConfig
