import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "会社概要",
  description:
    "GOWS合同会社（GOWS Inc.）の会社概要。設立2024年、東京都渋谷区。DX・AXコンサルティング、システム開発、自社プロダクトの開発・運営を行っています。",
  path: "/company",
  keywords: ["GOWS", "会社概要", "合同会社", "ITコンサルティング", "渋谷"],
});

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
