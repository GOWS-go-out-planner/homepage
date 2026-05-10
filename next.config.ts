import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/service/dinder",
        destination: "/service/products/dinder",
        permanent: true,
      },
      {
        source: "/service/duosub",
        destination: "/service/products/duosub",
        permanent: true,
      },
      {
        source: "/service/gentle-diary",
        destination: "/service/products/gentle-diary",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
