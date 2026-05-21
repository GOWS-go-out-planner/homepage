import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/service/in-house/dinder",
        destination: "/service/products/dinder",
        permanent: true,
      },
      {
        source: "/service/in-house/duosub",
        destination: "/service/products/duosub",
        permanent: true,
      },
      {
        source: "/service/in-house/duosub/terms_of_use",
        destination: "/service/products/duosub/terms",
        permanent: true,
      },
      {
        source: "/service/in-house/gentle-diary",
        destination: "/service/products/gentle-diary",
        permanent: true,
      },
      {
        source: "/service/in-house/gentle-diary/privacy_policy",
        destination: "/service/products/gentle-diary/privacy",
        permanent: true,
      },
      {
        source: "/service/in-house/gentle-diary/terms_of_use",
        destination: "/service/products/gentle-diary/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
