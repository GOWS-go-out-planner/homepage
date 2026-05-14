import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/images/products/Duosub/duosub-icon.webp",
  },
};

export default function DuosubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
