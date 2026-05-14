import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOWS合同会社 | DX・AXコンサルティング・システム開発",
  description:
    "中小企業・スタートアップのDX推進・AI活用（AX）を戦略立案から実装まで支援。GOWS合同会社のITコンサルティング・システム開発サービス。",
  icons: {
    icon: "/images/gows_favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
