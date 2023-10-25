/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cards.scryfall.io',
      },
    ],
  },

};

module.exports = nextConfig;
