"use client";

import { useEffect } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import s from "../../page.module.css";

const CONTACT_URL = "/contact";
const PRODUCT_CONTACT_URL = "https://forms.gle/BGJ5MAuT8nHxxkXK9";

const products = [
  {
    name: "Duosub",
    desc: "映画・ドラマで楽しくスマホ留学。英語・日本語の字幕を同時表示してネイティブの英語を学べるアプリ。全機能無料。",
    tags: ["iOS / Android", "全機能無料", "英語学習"],
    cta: "Duosubを見る",
    href: "/service/duosub",
  },
  {
    name: "Gentle Diary",
    desc: "1日の行動をやさしく要約して家族に届ける見守りアプリ。リアルタイム追跡なしでプライバシーと安心を両立。",
    tags: ["iOS / Android", "見守りアプリ", "プライバシー重視"],
    cta: "Gentle Diaryを見る",
    href: "/service/gentle-diary",
  },
  {
    name: "dinder",
    desc: "位置情報をもとに近くの飲食店を提案。スワイプするだけで1人でも複数人でもすぐにお店が決まる。",
    tags: ["iOS / Android", "飲食店選びアプリ"],
    cta: "dinderを見る",
    href: "/service/dinder",
  },
];

export default function ProductsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(`.${s.reveal}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />

      {/* Page Hero */}
      <section className={s.pageHero}>
        <div className="container">
          <nav className={s.breadcrumb} aria-label="パンくず">
            <ol>
              <li><a href="/">ホーム</a></li>
              <li aria-hidden="true" className={s.breadcrumbSep}>/</li>
              <li><a href="/#services">サービス</a></li>
              <li aria-hidden="true" className={s.breadcrumbSep}>/</li>
              <li><span aria-current="page">自社プロダクト</span></li>
            </ol>
          </nav>
          <h1 className={s.pageH1}>自社プロダクト</h1>
          <p className={s.pageSubCopy}>
          </p>
          <a href={PRODUCT_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
            プロダクトについて問い合わせる →
          </a>
        </div>
      </section>

      {/* Products List */}
      <section className={s.serviceSection}>
        <div className="container">
          <ul className={s.cardGrid} role="list">
            {products.map((p, i) => (
              <li key={p.name} className={`${s.serviceCard} ${s.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className={s.serviceH3}>{p.name}</h3>
                <p className={s.serviceDesc}>{p.desc}</p>
                <ul className={s.darkTagList} role="list" aria-label="タグ">
                  {p.tags.map((t) => <li key={t} className={s.darkTag}>{t}</li>)}
                </ul>
                <a href={p.href} className={s.btnGhostSm}>{p.cta}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why section */}
      <section className={s.featuresSection}>
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>GOWSがプロダクトをつくる理由</h2>
          <div className={`${s.productsNote} ${s.reveal}`}>
            <p className={s.productsNoteText}>
              コンサルティング・開発の現場や日常生活で感じた課題や「あったらいいな」を、プロダクトに変えています。<br />
              ユーザー目線と開発者目線を兼ね備えたチームが、使いやすさと品質にこだわって開発・運営しています。
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={s.footerCta}>
        <div className="container">
          <h2 className={s.footerCtaH2}>プロダクト開発のご相談もお気軽に。</h2>
          <p className={s.footerCtaSub}>
            アプリやサービスのアイデアをお持ちの方は、ぜひ一度ご相談ください。
          </p>
          <div className={`${s.ctaRow} ${s.ctaRowCenter}`}>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnWhite}>
              無料相談を予約する →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
