import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/download",
        destination: "/create-json-master",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
