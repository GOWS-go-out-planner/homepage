import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOWS合同会社 | DX・AXコンサルティング・システム開発",
  description:
    "中小企業・スタートアップのDX推進・AI活用（AX）を戦略立案から実装まで支援。GOWS合同会社のITコンサルティング・システム開発サービス。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
