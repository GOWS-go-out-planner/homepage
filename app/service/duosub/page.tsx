import type { Metadata } from "next";
import Image from "next/image";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Duosub | 映画・ドラマで楽しくネイティブの英語を習得",
  description:
    "映画・ドラマで楽しくスマホ留学。英語・日本語の字幕を同時表示してネイティブの英語を学べるアプリ。全機能無料、広告なしは月額300円。",
};

const APP_STORE_URL =
  "https://apps.apple.com/au/app/duosub-%E6%98%A0%E7%94%BB-%E3%83%89%E3%83%A9%E3%83%9E%E3%81%A7%E8%8B%B1%E8%AA%9E%E5%AD%A6%E7%BF%92/id6507464076";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.gows.duosub&hl=ja";
const CONTACT_URL = "https://forms.gle/SZQG3Hra9YyfNSh16";

const problems = [
  { label: "英語を勉強したいけど楽しくない" },
  { label: "机で英語を勉強していても聞き取ったり喋れるようにならない" },
  { label: "留学したいけど時間やお金がない" },
  { label: "海外の動画をオリジナルの音声で見たいけど内容が理解できない" },
];

const features = [
  {
    title: "いつでもどこでも学習",
    body: "スマートフォンがあれば、通勤時間や休憩時間など、いつでもどこでも英語学習が可能です。",
  },
  {
    title: "豊富なコンテンツライブラリ",
    body: "不朽の名作から最新作まで幅広いジャンルの映画・ドラマをご用意。お気に入りの作品で楽しく学習できます。",
  },
  {
    title: "内蔵辞書機能",
    body: "単語の意味もその場で確認。学習の流れを止めることなくボキャブラリーを増やせます。",
  },
];

const plans = [
  {
    name: "無料プラン",
    price: "¥0",
    period: "/月",
    features: [
      { available: true, label: "全ての映画・ドラマ・YouTubeの字幕が利用可能" },
      { available: true, label: "日英同時字幕機能" },
      { available: true, label: "内蔵辞書機能" },
      { available: false, label: "広告なし" },
    ],
    cta: "無料で始める",
    href: APP_STORE_URL,
    highlighted: false,
  },
  {
    name: "プレミアム",
    price: "¥300",
    period: "/月",
    badge: "おすすめ",
    features: [
      { available: true, label: "全ての映画・ドラマ・YouTubeの字幕が利用可能" },
      { available: true, label: "日英同時字幕機能" },
      { available: true, label: "内蔵辞書機能" },
      { available: true, label: "広告なし" },
    ],
    cta: "プレミアムで始める",
    href: APP_STORE_URL,
    highlighted: true,
  },
];

function StoreButtons() {
  return (
    <div className={s.storeButtons}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
        <Image src="/services/AppStore.png" alt="App Storeでダウンロード" width={140} height={42} />
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
        <Image src="/services/GooglePlay.png" alt="Google Playでダウンロード" width={140} height={42} />
      </a>
    </div>
  );
}

export default function DuosubPage() {
  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.headerLogo}>
            <Image
              src="/services/Duosub_アイコンと名前_横長.png"
              alt="Duosub"
              width={160}
              height={48}
              className={s.logoImg}
            />
          </div>
          <div className={s.headerActions}>
            <div className={s.headerCopy}>
              <p className={s.headerCopyMain}>今すぐ無料でダウンロード！</p>
              <p className={s.headerCopySub}>全機能無料 • 広告なしは月額300円</p>
            </div>
            <div className={s.headerBtns}>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.headerStorBtn}>
                App Store
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.headerStorBtn}>
                Google Play
              </a>
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.headerContactBtn}>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div className={s.heroBody}>
            <h1 className={s.heroH1}>
              海外コンテンツで学ぶ<br />
              <span className={s.heroAccent}>本物の英語</span>
            </h1>
            <p className={s.heroSub}>
              海外動画で<br />
              <strong>楽しくネイティブの英語を習得</strong>
            </p>
            <div className={s.heroBadges}>
              <span className={s.badge}>アベンジャーズ</span>
              <span className={s.badge}>フレンズ</span>
              <span className={s.badge}>ハリー・ポッター</span>
              <span className={s.badge}>+数百万作品</span>
            </div>
            <p className={s.heroYoutube}>YouTubeの全動画も視聴可能</p>
            <a href="#download" className={s.heroCta}>無料で今すぐ始める</a>
          </div>
          <div className={s.heroVisual}>
            <Image
              src="/services/app-screenshot.png"
              alt="Duosub アプリ - 映画・ドラマで英語と日本語の字幕を同時表示"
              width={300}
              height={600}
              className={s.heroScreenshot}
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={s.statsBar}>
        <div className={s.statsGrid}>
          <div className={s.statItem}>
            <span className={s.statVal}>数百万作品</span>
            <span className={s.statLabel}>映画・ドラマ</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statVal}>YouTube対応</span>
            <span className={s.statLabel}>全動画に字幕表示</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statVal}>30日</span>
            <span className={s.statLabel}>で効果実感</span>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.sectionTitle}>こんなお悩みありませんか？</h2>
          <div className={s.problemGrid}>
            {problems.map((p) => (
              <div key={p.label} className={s.problemCard}>
                <p className={s.problemLabel}>{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className={s.solutionSection}>
        <div className={s.container}>
          <h2 className={s.sectionTitle}>
            そのお悩み、<span className={s.accentText}>Duosub</span>で解決できます！
          </h2>
          <div className={s.solutionGrid}>
            <div className={s.solutionCards}>
              <div className={s.solutionCard}>
                <h3 className={s.solutionCardTitle}>リアルな英会話</h3>
                <p className={s.solutionCardBody}>
                  吹替ではないオリジナルの音声を聞きながら<br />
                  ネイティブのリアルな英会話で楽しく英語学習ができる！
                </p>
              </div>
              <div className={s.solutionCard}>
                <h3 className={s.solutionCardTitle}>日英同時字幕</h3>
                <p className={s.solutionCardBody}>
                  英語の字幕と日本語の字幕が同時に見えるから<br />
                  英語初心者でも安心！
                </p>
              </div>
            </div>
            <div className={s.solutionVisual}>
              <Image
                src="/services/app-screenshot.png"
                alt="Duosub アプリの機能紹介"
                width={280}
                height={560}
                className={s.solutionImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.sectionTitle}>Duosubの特徴</h2>
          <div className={s.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={s.featureCard}>
                <h3 className={s.featureTitle}>{f.title}</h3>
                <p className={s.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={`${s.section} ${s.bgMuted}`} id="download">
        <div className={s.container}>
          <h2 className={s.sectionTitle}>シンプルな料金プラン</h2>
          <div className={s.planGrid}>
            {plans.map((plan) => (
              <div key={plan.name} className={plan.highlighted ? `${s.planCard} ${s.planCardHighlighted}` : s.planCard}>
                {plan.badge && <span className={s.planBadge}>{plan.badge}</span>}
                <h3 className={s.planName}>{plan.name}</h3>
                <div className={s.planPrice}>
                  {plan.price}<span className={s.planPeriod}>{plan.period}</span>
                </div>
                <ul className={s.planFeatures} role="list">
                  {plan.features.map((f) => (
                    <li key={f.label} className={f.available ? s.planFeatureItem : `${s.planFeatureItem} ${s.planFeatureUnavailable}`}>
                      <span className={f.available ? s.checkMark : s.crossMark}>{f.available ? "✓" : "–"}</span>
                      {f.label}
                    </li>
                  ))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className={plan.highlighted ? s.planCtaHighlighted : s.planCta}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <div className={s.downloadSection}>
            <p className={s.downloadLabel}>今すぐダウンロード</p>
            <StoreButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <nav className={s.footerLinks} aria-label="フッターナビゲーション">
          <a href="https://gows-llc.com/company-info/" target="_blank" rel="noopener noreferrer">会社概要</a>
          <a href="/privacy">プライバシーポリシー</a>
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">お問い合わせ</a>
        </nav>
        <p className={s.footerCopy}>© 2025 GOWS合同会社</p>
      </footer>
    </div>
  );
}
