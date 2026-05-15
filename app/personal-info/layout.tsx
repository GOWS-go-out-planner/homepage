import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "個人情報の取り扱い",
  description:
    "GOWS合同会社における個人情報の取り扱いについて。取得する情報、利用目的、保管期間、開示・訂正等の手続きを記載しています。",
  path: "/personal-info",
});

export default function PersonalInfoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
