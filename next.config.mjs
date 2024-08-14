/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "images.puma.com",
         },
         {
            protocol: "https",
            hostname: "assets.adidas.com",
         },
         {
            protocol: "https",
            hostname: "static.nike.com",
         },
      ],
   },
};

export default nextConfig;
