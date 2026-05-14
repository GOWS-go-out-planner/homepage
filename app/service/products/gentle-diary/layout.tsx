import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gentle Diary | やさしく見守る行動要約アプリ",
  description:
    "リアルタイムな位置情報の共有はしない。1日の行動をやさしく要約して届ける、家族や大切な人のための見守りアプリ。",
  icons: {
    icon: "/images/products/GentleDiary.png",
  },
};

export default function GentleDiaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
