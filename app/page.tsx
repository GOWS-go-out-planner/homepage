"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import FaqAccordion from "./components/FaqAccordion";
import Footer from "./components/Footer";
import s from "./page.module.css";

const CONTACT_URL = "/contact";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const COUNT = 80;
    const MAX_DIST = 120;

    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79,142,247,${0.22 * (1 - d / MAX_DIST)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.fillStyle = "rgba(79,142,247,0.65)";
        ctx.arc(pts[i].x, pts[i].y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={s.particleCanvas} aria-hidden="true" />;
}

const cardAccents = ['#4F8EF7', '#8B5CF6', '#06B6D4', '#10B981'];

const serviceGlows = [
  'radial-gradient(ellipse at top left, rgba(79,142,247,0.18) 0%, transparent 65%)',
  'radial-gradient(ellipse at top left, rgba(139,92,246,0.18) 0%, transparent 65%)',
  'radial-gradient(ellipse at top left, rgba(6,182,212,0.15) 0%, transparent 65%)',
];

const problems = [
  {
    heading: "DX推進を検討しているが、何から始めればいいかわからない",
    body: "DXの必要性は感じているが、優先度の整理や具体的な進め方が見えない",
    tag: "DX戦略立案・ロードマップ設計",
  },
  {
    heading: "AIを活用したいが、自社での導入ノウハウがない",
    body: "生成AI・機械学習の活用に興味はあるが、どのツールをどう使えばよいか判断できない",
    tag: "AX（AIトランスフォーメーション）支援",
  },
  {
    heading: "システム開発を依頼したいが、信頼できるパートナーが見つからない",
    body: "要件定義から保守まで任せられる、技術力と対話力を兼ね備えたパートナーを探している",
    tag: "要件定義〜保守まで一気通貫",
  },
  {
    heading: "新規事業を立ち上げたいが、技術面のサポートが不足している",
    body: "アイデアはあるが、技術選定・MVP開発・スケールまでの道筋が見えない",
    tag: "新規事業・MVP開発支援",
  },
];

const services = [
  {
    name: "DX・AXコンサルティング",
    desc: "ただの\"IT化\"で終わらせない、DX戦略の立案からAI導入・新規事業支援まで、専門コンサルタントがビジネスパートナーとして伴走します。",
    tags: ["DX推進支援", "AI導入", "新規事業", "補助金申請"],
    cta: "詳しく見る",
    href: "/service/dx-ax",
  },
  {
    name: "システム開発",
    desc: "要件定義から保守・運用まで全フェーズを自社内で完結。\n課題の根本を解決する高品質システムを低コスト・短納期で開発します。",
    tags: ["Webアプリ", "業務システム", "モバイルアプリ", "API開発"],
    cta: "詳しく見る",
    href: "/service/system-dev",
  },
  {
    name: "自社プロダクト",
    desc: "現場の知見や日常の課題から生まれたサービスを複数展開。\n全て無料でご利用いただけます。",
    tags: ["iOS / Android", "自社開発"],
    cta: "プロダクトを見る",
    href: "/service/products",
  },
];

const news = [
  {
    id: 1,
    tags: ["プレスリリース", "Duosub"],
    date: "2025.01.30",
    title: "海外映画・ドラマの英語字幕表示アプリ「Duosub」大幅アップデート（日本語訳の常時表示が可能に。）",
    url: "https://www.atpress.ne.jp/news/423834",
  },
  {
    id: 2,
    tags: ["プレスリリース", "Duosub"],
    date: "2025.05.17",
    title: "海外映画・ドラマの英語字幕・日本語訳アプリ『Duosub』が大幅アップデート（広告なしで全機能使い放題の格安サブスクプランを追加）",
    url: "https://prtimes.jp/main/html/rd/p/000000001.000156441.html",
  },
  {
    id: 3,
    tags: ["プレスリリース", "Duosub"],
    date: "2025.11.08",
    title: "海外映画・ドラマの英語字幕・日本語訳アプリ『Duosub』がYouTubeにも対応！",
    url: "https://prtimes.jp/main/html/rd/p/000000003.000156441.html",
  },
  {
    id: 4,
    tags: ["メディア掲載"],
    date: "2025.11.10",
    title: "弊社代表の小山望海が朝日新聞に掲載されました。",
    url: "/news/4",
  },
  {
    id: 5,
    tags: ["プレスリリース", "Duosub"],
    date: "2025.12.02",
    title: "海外動画の英語字幕・日本語訳アプリ『Duosub』の日本語訳性能が向上",
    url: "https://prtimes.jp/main/html/rd/p/000000004.000156441.html",
  },
  {
    id: 6,
    tags: ["プレスリリース", "Gentle Diary"],
    date: "2026.04.16",
    title: "新サービス「Gentle Diary」リリース",
    url: "https://prtimes.jp/main/html/rd/p/000000005.000156441.html",
  },
];

function isExternalNewsUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

const newsSortedByIdDesc = [...news].sort((a, b) => b.id - a.id);

type NewsEntry = (typeof news)[number];

function NewsHomeCard({ n, i, external }: { n: NewsEntry; i: number; external: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasClampOverflow, setHasClampOverflow] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const measure = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      if (!mobile) {
        setExpanded(false);
        setHasClampOverflow(false);
        return;
      }
      if (expanded) return;
      const el = titleRef.current;
      if (!el) return;
      setHasClampOverflow(el.scrollHeight > el.clientHeight + 1);
    };

    measure();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measure);
    });
    const el = titleRef.current;
    if (el) ro.observe(el);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [expanded, n.title]);

  const showToggle = isMobile && (expanded || hasClampOverflow);

  return (
    <li
      className={`${s.newsCard} ${s.reveal}`}
      style={{ transitionDelay: `${i * 0.1}s` }}
      data-expanded={expanded ? "true" : "false"}
    >
      <a
        href={n.url}
        className={s.newsCardLink}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <ul className={s.newsTagList} role="list" aria-label="カテゴリ">
          {n.tags.map((t, ti) => (
            <li key={`${n.title}-${ti}-${t}`} className={s.newsTag}>
              {t}
            </li>
          ))}
        </ul>
        <span className={s.newsDate}>{n.date}</span>
        <span ref={titleRef} className={s.newsTitle}>
          {n.title}
        </span>
      </a>
      {showToggle && (
        <button
          type="button"
          className={s.newsMoreBtn}
          aria-expanded={expanded}
          onClick={() => {
            setExpanded((v) => !v);
          }}
        >
          {expanded ? "閉じる" : "もっと見る"}
        </button>
      )}
    </li>
  );
}

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
        <ParticleCanvas />
        <div className={s.heroOrb} aria-hidden="true" />
        <div className={`container ${s.heroBody}`}>
          <h1 className={s.heroH1}>
            ITで未来を切り拓く、<br />課題解決のプロフェッショナル
          </h1>
          <p className={s.heroSub}>
            GOWS合同会社は、DX・AXコンサルティングとシステム開発を通じて、
            事業を加速させ、企業の成長を支援します。
          </p>
          <div className={s.ctaRow}>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
              無料相談を予約する →
            </a>
            <a href="#services" className={s.btnGhost}>サービスを見る</a>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className={s.section} id="problems">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>こんなお悩み、ありませんか？</h2>
          <p className={`${s.sectionSub} ${s.reveal}`}>GOWSは、戦略立案から実装・運用まで一気通貫でサポートします。</p>
          <ul className={s.cardGridFour} role="list">
            {problems.map((p, i) => (
              <li key={p.heading} className={`${s.problemCard} ${s.reveal}`} style={{ '--card-accent': cardAccents[i], transitionDelay: `${i * 0.1}s` } as React.CSSProperties}>
                <div className={s.cardNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <h3 className={s.cardH3}>{p.heading}</h3>
                <p className={s.cardBody}>{p.body}</p>
                <span className={s.tag}>{p.tag}</span>
              </li>
            ))}
          </ul>
          <div className={`${s.midCta} ${s.reveal}`}>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnWhite}>
              あなたの課題を無料で相談する →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={s.serviceSection} id="services">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>事業内容</h2>
          <p className={`${s.sectionSub} ${s.reveal}`}>戦略立案からプロダクト運営まで、ITで事業成長を支援します。</p>
          <ul className={s.cardGrid} role="list">
            {services.map((sv, i) => (
              <li key={sv.name} className={`${s.serviceCard} ${s.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={s.serviceCardGlow} style={{ background: serviceGlows[i] }} aria-hidden="true" />
                <h3 className={s.serviceH3}>{sv.name}</h3>
                <p className={s.serviceDesc}>{sv.desc}</p>
                <ul className={s.darkTagList} role="list" aria-label="対応内容">
                  {sv.tags.map((t) => <li key={t} className={s.darkTag}>{t}</li>)}
                </ul>
                <a href={sv.href} className={s.btnGhostSm}>{sv.cta} →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News */}
      <section className={s.newsSection} id="news">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>News</h2>
          <ul className={s.newsGrid} role="list">
            {newsSortedByIdDesc.map((n, i) => (
              <NewsHomeCard key={n.id} n={n} i={i} external={isExternalNewsUrl(n.url)} />
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
          <h2 className={s.footerCtaH2}>まずは、気軽にご相談ください。</h2>
          <p className={s.footerCtaSub}>
            DX推進・システム開発・AI活用など、どんな段階のご相談も歓迎です。<br />
            初回相談は無料で承ります。
          </p>
          <div className={`${s.ctaRow} ${s.ctaRowCenter}`}>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.btnWhite}>
              無料相談を予約する →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
