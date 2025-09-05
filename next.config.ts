import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol:"https",
        hostname:"nomadgroup.io",
        pathname:"**"
      },
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
        pathname:"**"
      },
      {
        protocol:"https",
        hostname:"imgur.com",
        pathname:"**"
      }
    ],
  },
};

module.exports = nextConfig;
