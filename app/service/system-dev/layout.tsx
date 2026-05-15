import type { Metadata } from "next";
import { createPageMetadata } from "../../../lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "システム開発",
  description:
    "GOWS合同会社のシステム開発サービス。Web・アプリ・クラウドを中心に、要件定義から設計・開発・運用まで伴走します。",
  path: "/service/system-dev",
  keywords: ["システム開発", "Web開発", "アプリ開発", "クラウド", "GOWS"],
});

export default function SystemDevLayout({ children }: { children: React.ReactNode }) {
  return children;
}
