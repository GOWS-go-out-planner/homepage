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

// 課題カード
const cardAccents = ["#4F8EF7", "#8B5CF6", "#06B6D4", "#10B981"];

const problems = [
  {
    heading: "DXに取り組んでいるのに、現場が動いてくれない",
    body: "ツールは入れた。研修もした。でも業務は変わらない。ただIT化しただけ、「やらされ感」だけが漂っている。",
    tag: "DX戦略立案・ロードマップ設計",
  },
  {
    heading: "AIを使いたいが、何に使えばいいかがわからない",
    body: "ChatGPTは試した。でも社内の業務に当てはめると、どこに使えるのか判断できない。",
    tag: "AX（AIトランスフォーメーション）支援",
  },
  {
    heading: "ITに投資したのに、何が変わったのかわからない",
    body: "システムを入れた。コンサルにも頼んだ。でも売上も業務効率も、正直あまり変わっていない。何にお金を使ったのか、説明できない。",
    tag: "DX・AX戦略設計",
  },
  {
    heading: "技術と経営を両立できる相談相手がいない",
    body: "CTOを雇う余裕はない。でも技術判断を経営者だけでするには限界がある。",
    tag: "新規事業・MVP開発支援",
  },
];

// サービスカード
const serviceGlows = [
  "radial-gradient(ellipse at top left, rgba(79,142,247,0.18) 0%, transparent 65%)",
  "radial-gradient(ellipse at top left, rgba(139,92,246,0.18) 0%, transparent 65%)",
  "radial-gradient(ellipse at top left, rgba(6,182,212,0.15) 0%, transparent 65%)",
];

const services = [
  {
    name: "DX・AXコンサルティング",
    desc: "ただの\"IT化\"で終わらせない。DX戦略の立案からAI導入・新規事業支援まで、コンサルタント・エンジニアがビジネスパートナーとして伴走します。",
    tags: ["DX推進支援", "AI導入", "新規事業", "補助金申請"],
    cta: "コンサルを相談する",
    href: "/service/dx-ax",
  },
  {
    name: "システム開発",
    desc: "要件定義から保守・運用まで全フェーズを自社内で完結。多重下請け構造を排除し、低コスト・短納期・高品質なシステムを直接お届けします。",
    tags: ["Webアプリ", "業務システム", "モバイルアプリ", "API開発"],
    cta: "開発を相談する",
    href: "/service/system-dev",
  },
  {
    name: "自社プロダクト",
    desc: "現場の知見と日常の課題から生まれたサービスを複数展開。GOWSの開発力は自社プロダクトで証明されています。延べ1,000名以上のユーザーに使われています。",
    tags: ["iOS", "Android", "自社開発"],
    cta: "プロダクトを見る",
    href: "/service/products",
  },
];

// 強みカードデータ
type StrengthCard = {
  axis: string;
  accentColor: string;
  glowColor: string;
  heading: string;
  body: string;
  points: string[];
};

const strengthCards: StrengthCard[] = [
  {
    axis: "DX軸",
    accentColor: "#06B6D4",
    glowColor: "rgba(6,182,212,0.08)",
    heading: "ツールを入れて終わりにしない。",
    body: "「システムを導入したのに、現場が使ってくれない」「デジタル化したのに、業務のスピードが変わらない」——これはツールの問題ではなく、変革の進め方の問題です。GOWSのDX支援は、ツールの選定・導入にとどまりません。現場の業務フロー・組織の動き方・人の意識まで変えることを前提に伴走します。",
    points: [
      "戦略・ロードマップ設計から着手し、現場定着まで伴走",
      "定着・活用状況をモニタリングしてPDCAを回す",
      "業務変革・組織変革の観点からも提言",
    ],
  },
  {
    axis: "AX軸",
    accentColor: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.08)",
    heading: "AIで何ができるか、誰よりも具体的に答えられる。",
    body: "代表の小山は、北海道大学大学院でAI・機械学習を研究し、情報理工学の修士号を取得しています。GOWSは違います。AIの仕組みを原理から理解した上で、「あなたのビジネスのどこにAIを使えば効果が出るか」を具体的に設計します。流行のツールを当てはめるのではなく、課題から逆算してAIの活用方法を設計します。",
    points: [
      "代表が北大大学院でAI研究（情報理工学修士）",
      "AI活用業務設計（AX=AIトランスフォーメーション）まで担う",
      "自社プロダクトにもAIを実装済み、実装経験のある提案が可能",
    ],
  },
  {
    axis: "一気通貫",
    accentColor: "#10B981",
    glowColor: "rgba(16,185,129,0.08)",
    heading: "「何をつくるか」から、一緒に考えます。",
    body: "コンサルが出した戦略を開発会社が理解しきれない、開発の制約をコンサルが把握していなかった——この分断が、手戻り・追加費用の原因になります。GOWSは、戦略策定から要件定義・設計・開発・運用まで、すべてを自社内のチームが担当します。",
    points: [
      "戦略→要件定義→設計→開発→運用をワンチームで担当",
      "コンサルと開発の「伝言ゲーム」「認識のズレ」を構造的に排除",
      "「要件を固めてから来てください」とは言わない",
    ],
  },
];

// サブカードデータ
const strengthSubCards = [
  {
    icon: "🕐",
    heading: "お客様のペースに合わせて動きます。",
    body: "夜間・土日の打ち合わせにも対応します。全国どこでもリモートで対応可能です（必要に応じて現地対応も可）。平日昼間に時間を取りにくい経営者や、一般企業とは稼働時間が異なる業種、リソースが限られたスタートアップにも柔軟に対応します。",
  },
  {
    icon: "🏭",
    heading: "業界の商習慣・規制を理解した上で提案します。",
    body: "金融・小売・EC・教育・イベント・製造・エンタメ・飲食・人材など、多岐に渡る業種での支援実績があります。それぞれの業界特有の制約や商習慣を踏まえた上で、最適な提案が可能です。",
  },
];

// 業種バッジ
const industries = ["金融", "小売", "EC", "教育", "イベント", "製造", "エンタメ", "飲食", "人材"];

// 信頼バー
const trustItems = [
  {
    icon: "📰",
    main: "朝日新聞 掲載",
    sub: "メディア掲載実績",
  },
  {
    icon: "🏭",
    main: "8業種の支援経験",
    sub: "金融・製造・EC・教育など",
  },
  {
    icon: "👥",
    main: "延べ1,000名以上が利用",
    sub: "自社プロダクト",
  },
];

// ニュース
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
            テクノロジーの最前線で、<br />課題を解く。
          </h1>
          <p className={s.heroSub}>
            AIを『使う』時代から、AIで『事業を作り変える』時代へ。GOWSは、DX・AX（AI Transformation）の専門チームとして、戦略立案から実装・運用まであなたの変革に伴走します。
          </p>
          <div className={s.ctaRow}>
            <a href={CONTACT_URL} className={s.btnPrimary}>
              まずは相談してみる（無料・30分）
            </a>
            <a href="#services" className={s.btnGhost}>サービスを見る</a>
          </div>
        </div>
        {/* スクロールプロンプト */}
        <div className={s.scrollPrompt} aria-hidden="true">↓</div>
      </section>

      {/* 信頼バー */}
      <section className={s.trustBar} aria-label="信頼シグナル">
        <div className="container">
          <ul className={s.trustGrid} role="list">
            {trustItems.map((item, i) => (
              <li key={i} className={s.trustItem}>
                <span className={s.trustIcon} aria-hidden="true">{item.icon}</span>
                <span className={s.trustMain}>{item.main}</span>
                <span className={s.trustSub}>{item.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 課題セクション */}
      <section className={s.section} id="problems">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>こんなお悩み、ありませんか？</h2>
          <p className={`${s.sectionSub} ${s.reveal}`}>GOWSは、戦略立案から実装・運用まで一気通貫でサポートします。</p>
          <ul className={s.cardGridFour} role="list">
            {problems.map((p, i) => (
              <li
                key={p.heading}
                className={`${s.problemCard} ${s.reveal}`}
                style={
                  {
                    "--card-accent": cardAccents[i],
                    transitionDelay: `${i * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div className={s.cardNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className={s.cardH3}>{p.heading}</h3>
                <p className={s.cardBody}>{p.body}</p>
                <span className={s.tag}>{p.tag}</span>
              </li>
            ))}
          </ul>
          <div className={`${s.midCta} ${s.reveal}`}>
            <a href={CONTACT_URL} className={s.btnWhite}>
              あなたの課題を無料で相談する →
            </a>
          </div>
        </div>
      </section>

      {/* GOWSの強みセクション */}
      <section className={s.strengthSection} id="why-gows">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>なぜGOWSが選ばれるのか</h2>
          <p className={`${s.sectionSub} ${s.reveal} ${s.strengthLead}`}>
            「コンサルに頼んだら戦略書だけ出てきた」「開発会社に頼んだら要件を固めてから来いと言われた」。この分断が、DX・AI導入を失敗させてきました。GOWSは、この構造問題に正面から向き合うために設立されました。
          </p>

          {/* 主軸3カード */}
          <ul className={s.strengthGrid} role="list">
            {strengthCards.map((card, i) => (
              <li
                key={card.axis}
                className={`${s.strengthCard} ${s.reveal}`}
                style={
                  {
                    "--strength-accent": card.accentColor,
                    "--strength-glow": card.glowColor,
                    transitionDelay: `${i * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div
                  className={s.strengthCardGlow}
                  style={{
                    background: `radial-gradient(ellipse at top left, ${card.glowColor} 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <span
                  className={s.strengthAxisBadge}
                  style={{
                    color: card.accentColor,
                    background: `${card.accentColor}26`,
                  }}
                >
                  {card.axis}
                </span>
                <h3 className={s.strengthH3}>{card.heading}</h3>
                <p className={s.strengthBody}>{card.body}</p>
                <ul className={s.strengthPoints} role="list">
                  {card.points.map((pt, j) => (
                    <li key={j} className={s.strengthPoint}>
                      <span className={s.strengthPointIcon} style={{ color: card.accentColor }} aria-hidden="true">
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* サブ2カード */}
          <ul className={s.strengthSubGrid} role="list">
            {strengthSubCards.map((card, i) => (
              <li key={i} className={`${s.strengthSubCard} ${s.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={s.strengthSubIcon} aria-hidden="true">{card.icon}</div>
                <div>
                  <h3 className={s.strengthSubH3}>{card.heading}</h3>
                  <p className={s.strengthSubBody}>{card.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* サービス詳細 */}
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
                  {sv.tags.map((t) => (
                    <li key={t} className={s.darkTag}>
                      {t}
                    </li>
                  ))}
                </ul>
                <a href={sv.href} className={s.btnGhostSm}>
                  {sv.cta} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 導入事例 + 業種バッジ */}
      <section className={s.section} id="works">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>導入事例</h2>

          {/* 業種バッジ */}
          <ul
            className={`${s.industryBadgeList} ${s.reveal}`}
            role="list"
            aria-label="支援業種"
          >
            {industries.map((industry) => (
              <li key={industry} className={s.industryBadge}>
                {industry}
              </li>
            ))}
          </ul>

          {/* 事例カード（プレースホルダー） */}
          <ul className={s.cardGrid} role="list">
            {[1, 2, 3].map((n, i) => (
              <li
                key={n}
                className={`${s.caseCard} ${s.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={s.tag}>業種・企業規模</span>
                <p className={s.caseChallenge}>課題（Before）</p>
                <p className={s.caseResult}>成果（After）</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 代表紹介セクション */}
      <section className={s.ceoSection} id="ceo">
        <div className="container">
          <h2 className={`${s.sectionTitle} ${s.reveal}`}>代表メッセージ</h2>
          <div className={`${s.ceoInner} ${s.reveal}`}>
            {/* 左カラム：写真エリア */}
            <div className={s.ceoPhotoCol}>
              <div className={s.ceoPhoto} role="img" aria-label="小山望海 代表写真">
                {/* 写真が用意され次第 next/image に差し替える */}
              </div>
              <span className={s.ceoRoleBadge}>代表 / CEO・Founder</span>
            </div>

            {/* 右カラム：テキスト */}
            <div className={s.ceoContent}>
              <p className={s.ceoName}>小山 望海</p>
              <p className={s.ceoNameEn}>KOYAMA Nozomi</p>
              <p className={s.ceoBio}>
                DXやAX（AI Transformation）は、一朝一夕で成し遂げられるものではありません。技術の選定・業務プロセスの再設計・組織の変化・現場への定着まで、複数の壁を乗り越えて初めて成果になります。そしてその壁を越えるには、AI・DXを技術として深く理解していることと、現場で何が起きているかを見続けることの両方が必要です。GOWSは、その両方に向き合い続けるパートナーでありたいと思っています。
              </p>
              <blockquote className={s.ceoQuote}>
                GOWSは、戦略と実装の両方ができるチームとして、お客様の事業成長に本気で向き合います。
              </blockquote>
            </div>
          </div>
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
          <h2 className={s.footerCtaH2}>「要件は固まっていない」で大丈夫です。</h2>
          <p className={s.footerCtaSub}>
            一緒に整理するところから始めましょう。ヒアリングから提案まで、初回は無料です。
            <br />
            まずは30分、話だけでも聞いてみてください。
          </p>
          <div className={`${s.ctaRow} ${s.ctaRowCenter}`}>
            <a href={CONTACT_URL} className={s.btnWhite}>
              無料相談を予約する（30分）
            </a>
            <a href={`mailto:info@gows.co.jp`} className={s.btnSecondary}>
              メールで問い合わせる
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
