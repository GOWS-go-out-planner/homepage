"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";
import FaqAccordion from "./components/FaqAccordion";
import s from "./page.module.css";

const CONTACT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfqxRSQa8Sb6tGcrgLZlXUJrRFKqXDaqC35J5CGdzxuVXXQGA/viewform";

const stats = [
  { value: "XX", unit: "件", label: "支援実績" },
  { value: "XX", unit: "社", label: "伴走支援" },
  { value: "XX", unit: "%", label: "顧客継続率" },
];

const problems = [
  {
    heading: "デジタル化の次の一手が見えない",
    body: "DX推進は始めたが、AIをどう活用すべきか、投資対効果が見えないまま停滞している",
    tag: "DX・AX戦略の立案と実行支援",
  },
  {
    heading: "スピードとリソースのジレンマ",
    body: "市場に早く出たいが、開発リソースが足りない。内製か外注か判断がつかない",
    tag: "MVP開発〜スケール設計まで一気通貫",
  },
  {
    heading: "新規事業、何から始めればいい？",
    body: "アイデアはある。でも技術選定・開発・運用をどう進めればよいか分からない",
    tag: "構想から事業化まで伴走",
  },
];

const consulting = [
  {
    name: "DX・AXコンサルティング",
    desc: "業務プロセスのデジタル化、AI活用戦略の立案、ROI設計から推進支援まで",
    tags: ["戦略立案", "KPI設計", "ツール選定", "推進支援"],
    cta: "コンサルを相談する",
    href: null as string | null,
  },
  {
    name: "システム開発",
    desc: "要件定義〜設計・開発・テスト・運用保守まで一気通貫。MVPから基幹システムまで対応",
    tags: ["要件定義", "設計・開発", "テスト", "保守運用"],
    cta: "開発を相談する",
    href: null as string | null,
  },
];

const products = [
  {
    name: "Duosub",
    desc: "映画・ドラマで楽しくスマホ留学。英語・日本語の字幕を同時表示してネイティブの英語を学べるアプリ。全機能無料。",
    tags: ["iOS / Android", "全機能無料"],
    cta: "Duosubを見る",
    href: "/service/duosub",
  },
  {
    name: "Gentle Diary",
    desc: "1日の行動をやさしく要約して家族に届ける見守りアプリ。リアルタイム追跡なしでプライバシーと安心を両立。",
    tags: ["iOS / Android", "見守りアプリ"],
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


export default function Home() {
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

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroMesh} aria-hidden="true" />
        <div className={s.heroOrb} aria-hidden="true" />
        <div className={`container ${s.heroBody}`}>
          <span className={s.heroBadge}>DX・AX専門</span>
          <h1 className={s.heroH1}>DX・AXで、事業を加速する。</h1>
          <p className={s.heroSub}>
            戦略立案から実装・運用まで、中小企業・スタートアップのデジタル変革を一気通貫で支援します。
          </p>
          <div className={s.ctaRow}>
            <a href="#contact" className={s.btnPrimary}>無料相談を予約する（30分）</a>
            <a href="#services" className={s.btnGhost}>サービスを見る ↓</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={s.stats} aria-label="実績サマリー">
        <div className="container">
          <ul className={s.statsGrid} role="list">
            {stats.map((st, i) => (
              <li key={st.label} className={`${s.statItem} ${s.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className={s.statVal}>
                  {st.value}<span className={s.statUnit}>{st.unit}</span>
                </span>
                <span className={s.statLabel}>{st.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problems */}
      <section className={s.section} id="problems">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>こんな課題、ありませんか？</h2>
          <p className={`${s.sectionSub} ${s.reveal}`}>業種・フェーズを問わず、御社の状況に合わせてご支援します。</p>
          <ul className={s.cardGrid} role="list">
            {problems.map((p, i) => (
              <li key={p.heading} className={`${s.problemCard} ${s.reveal}`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <h3 className={s.cardH3}>{p.heading}</h3>
                <p className={s.cardBody}>{p.body}</p>
                <span className={s.tag}>{p.tag}</span>
              </li>
            ))}
          </ul>
          <div className={`${s.midCta} ${s.reveal}`}>
            <a href="#contact" className={s.btnSecondary}>あなたの課題を無料で相談する →</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={s.serviceSection} id="services">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.onDark} ${s.reveal}`}>GOWSのサービス</h2>
          <p className={`${s.sectionSub} ${s.onDarkSub} ${s.reveal}`}>戦略から実装まで、必要なすべてをワンストップで</p>

          <p className={`${s.serviceSubLabel} ${s.reveal}`}>コンサルティング・開発</p>
          <ul className={`${s.cardGridTwo} ${s.mbSection}`} role="list">
            {consulting.map((sv, i) => (
              <li key={sv.name} className={`${s.serviceCard} ${s.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className={s.serviceH3}>{sv.name}</h3>
                <p className={s.serviceDesc}>{sv.desc}</p>
                <ul className={s.darkTagList} role="list" aria-label="対応内容">
                  {sv.tags.map((t) => <li key={t} className={s.darkTag}>{t}</li>)}
                </ul>
                <a href={sv.href ?? "#contact"} className={s.btnGhostSm}>{sv.cta}</a>
              </li>
            ))}
          </ul>

          <p className={`${s.serviceSubLabel} ${s.reveal}`}>自社プロダクト</p>
          <ul className={s.cardGrid} role="list">
            {products.map((sv, i) => (
              <li key={sv.name} className={`${s.serviceCard} ${s.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className={s.serviceH3}>{sv.name}</h3>
                <p className={s.serviceDesc}>{sv.desc}</p>
                <ul className={s.darkTagList} role="list" aria-label="対応内容">
                  {sv.tags.map((t) => <li key={t} className={s.darkTag}>{t}</li>)}
                </ul>
                <a href={sv.href ?? "#contact"} className={s.btnGhostSm}>{sv.cta}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.section} id="faq">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>よくあるご質問</h2>
          <div className={s.faqWrap}>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={s.footerCta} id="contact">
        <div className="container">
          <h2 className={s.footerCtaH2}>まず、話を聞いてもらうところから。</h2>
          <p className={s.footerCtaSub}>
            30分の無料相談から、御社に合った最初の一手を一緒に考えます。
          </p>
          <div className={`${s.ctaRow} ${s.ctaRowCenter}`}>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnWhite}>
              無料相談を予約する
            </a>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
              メールで問い合わせる
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.footer} id="company">
        <div className="container">
          <div className={s.footerGrid}>
            <div className={s.footerBrand}>
              <span className={s.footerLogo}>GOWS</span>
              <p className={s.footerTagline}>DX・AXで、事業を加速する。</p>
              <dl className={s.footerCompanyInfo}>
                <div><dt>設立</dt><dd>2024年4月8日</dd></div>
                <div><dt>所在地</dt><dd>〒150-0045 東京都渋谷区神泉町10-15-301</dd></div>
                <div><dt>代表</dt><dd>小山望海</dd></div>
                <div><dt>資本金</dt><dd>150万円</dd></div>
              </dl>
            </div>
            <nav aria-label="サービス">
              <p className={s.footerNavLabel}>サービス</p>
              <ul role="list" className={s.footerNavList}>
                <li><a href="#services">DX・AXコンサルティング</a></li>
                <li><a href="#services">システム開発</a></li>
                <li><a href="/service/duosub">Duosub</a></li>
                <li><a href="/service/gentle-diary">Gentle Diary</a></li>
                <li><a href="/service/dinder">dinder</a></li>
              </ul>
            </nav>
            <nav aria-label="会社情報">
              <p className={s.footerNavLabel}>会社情報</p>
              <ul role="list" className={s.footerNavList}>
                <li><a href="#faq">よくある質問</a></li>
              </ul>
            </nav>
            <nav aria-label="その他">
              <p className={s.footerNavLabel}>その他</p>
              <ul role="list" className={s.footerNavList}>
                <li><a href="#contact">お問い合わせ</a></li>
                <li><a href="/privacy">プライバシーポリシー</a></li>
              </ul>
            </nav>
          </div>
          <p className={s.copyright}>© 2025 GOWS合同会社</p>
        </div>
      </footer>
    </>
  );
}
