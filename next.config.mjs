/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["estatecloud.co.ke", "next.estatecloud.co.ke", "127.0.0.1"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "estatecloud.co.ke",
        port: "",
        pathname: "/Images/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/Images/**",
      },
    ],
  },
};

export default nextConfig;
