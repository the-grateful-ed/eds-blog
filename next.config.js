const { withContentlayer } = require("next-contentlayer");
const dotenv = require("dotenv");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "media-exp1.licdn.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = withContentlayer(nextConfig);
