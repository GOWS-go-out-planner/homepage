import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description: "GOWS合同会社のプライバシーポリシー。個人情報の取り扱い、利用目的、第三者提供、お問い合わせ窓口等を定めます。",
  path: "/privacy",
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
