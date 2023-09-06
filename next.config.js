/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "cards.scryfall.io"
      }
    ]
  }

}

module.exports = nextConfig
