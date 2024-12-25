/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "source.boringavatars.com", "media.licdn.com", "global.discourse-cdn.com", "png.pngtree.com", "tr.rbxcdn.com","www.tribuneindia.com", "img.freepik.com"],
  }
}

module.exports = nextConfig

