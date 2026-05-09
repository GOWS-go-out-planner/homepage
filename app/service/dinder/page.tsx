import type { Metadata } from "next";
import Image from "next/image";
import s from "./page.module.css";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "dinder | 飲食店選び、もう迷わない",
  description:
    "近くの飲食店をスワイプで選べるアプリ。位置情報をもとに候補を提案し、右スワイプでナビ開始。1人でも複数人でも、迷わず決まる。",
};

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/dinder-%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E6%A4%9C%E7%B4%A2%E3%82%A2%E3%83%97%E3%83%AA/id6478850884";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.gowsktma.dinder&hl=ja";

const painPoints = [
  {
    scene: "1人のとき",
    items: [
      "近場でサクッと済ませたいけど、近くにどんなお店があるかわからない",
      "近くに飲食店が多くて1つに決められない。いつもワンパターンになってしまう",
    ],
  },
  {
    scene: "複数人のとき",
    items: ["みんなの意見が合わない", 'みんなが「どこでも良いよ〜」'],
  },
  {
    scene: "飲み会で",
    items: [
      "1次会は予約したけど2次会のお店が決まってない",
      "深夜になっても飲み足りず、近くで遅い時間まで営業してる店を知りたい",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "位置情報で近くのお店を提案",
    body: "アプリを開くだけで、現在地周辺の飲食店が次々と表示されます。",
  },
  {
    step: "02",
    title: "気に入ったら右スワイプ",
    body: "気に入ったお店は右スワイプ。即座にナビが起動してお店まで案内します。",
  },
  {
    step: "03",
    title: "気に入らなければ左スワイプ",
    body: "気に入らなければ左にスワイプして次の候補へ。迷わず決められます。",
  },
  {
    step: "04",
    title: "事前に条件を細かく設定",
    body: "ジャンル・距離・予算・営業時間などの条件を設定して、希望に合ったお店を絞り込めます。",
  },
];

export default function DinderPage() {
  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <span className={s.headerLogo}>dinder</span>
          <div className={s.headerBtns}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.headerBtn}>
              App Store
            </a>
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.headerBtn}>
              Google Play
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroBody}>
            <div className={s.heroTag}>飲食店選びアプリ</div>
            <h1 className={s.heroH1}>飲食店選び、<br />もう迷わない</h1>
            <p className={s.heroSub}>
              位置情報をもとに近くの飲食店を提案。<br />
              スワイプするだけで、すぐにお店が決まる。
            </p>
            <div className={s.heroCtas}>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.ctaPrimary}>
                <Image src="/services/AppStore.png" alt="App Storeでダウンロード" width={140} height={42} />
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.ctaPrimary}>
                <Image src="/services/GooglePlay.png" alt="Google Playでダウンロード" width={140} height={42} />
              </a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Image
              src="/services/header-768x375.png"
              alt="dinderアプリのイメージ"
              width={500}
              height={244}
              className={s.heroImg}
              priority
            />
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.sectionTitle}>外食でこんな時ありませんか？</h2>
          <div className={s.painGrid}>
            {painPoints.map((pp) => (
              <div key={pp.scene} className={s.painCard}>
                <div className={s.painScene}>{pp.scene}</div>
                <ul className={s.painList} role="list">
                  {pp.items.map((item) => (
                    <li key={item} className={s.painItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={s.solutionIntro}>
            そんなときは、サクッと <strong className={s.brandName}>dinder</strong>！
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className={`${s.section} ${s.bgOrange}`}>
        <div className={s.container}>
          <h2 className={`${s.sectionTitle} ${s.onOrange}`}>使い方はシンプル</h2>
          <div className={s.stepsGrid}>
            {howItWorks.map((step) => (
              <div key={step.step} className={s.stepCard}>
                <div className={s.stepNum}>{step.step}</div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.sectionTitle}>アプリの画面</h2>
          <div className={s.screenshotsGrid}>
            <div className={s.screenshotItem}>
              <Image
                src="/services/右スワイプ-721x1536.png"
                alt="気に入ったお店は右スワイプ"
                width={240}
                height={512}
                className={s.screenshotImg}
              />
              <p className={s.screenshotCaption}>右スワイプでナビ開始</p>
            </div>
            <div className={s.screenshotItem}>
              <Image
                src="/services/左スワイプ-720x1536.png"
                alt="気に入らなければ左スワイプで次の候補へ"
                width={240}
                height={512}
                className={s.screenshotImg}
              />
              <p className={s.screenshotCaption}>左スワイプで次の候補へ</p>
            </div>
            <div className={s.screenshotItem}>
              <Image
                src="/services/設定画面-719x1536.png"
                alt="細かい条件を事前設定"
                width={240}
                height={512}
                className={s.screenshotImg}
              />
              <p className={s.screenshotCaption}>条件を細かく設定</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection}>
        <div className={s.container}>
          <h2 className={s.ctaH2}>今すぐダウンロードして、<br />迷わない食事選びを。</h2>
          <div className={s.ctaButtons}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
              <Image src="/services/AppStore.png" alt="App Storeでダウンロード" width={150} height={45} />
            </a>
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
              <Image src="/services/GooglePlay.png" alt="Google Playでダウンロード" width={150} height={45} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
