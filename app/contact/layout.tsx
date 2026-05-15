import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ",
  description:
    "GOWS合同会社へのお問い合わせ・無料相談のご予約。DX推進、AI活用（AX）、システム開発、自社プロダクトに関するご相談を承ります。",
  path: "/contact",
  keywords: ["お問い合わせ", "無料相談", "GOWS", "DX", "システム開発"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
