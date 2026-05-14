import type { Metadata } from "next";
import Image from "next/image";
import { LpProductFooter } from "../../../components/LpProductFooter";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "SafePage - クリックする前に、確認しよう",
  description:
    "SafePageは、訪問するURLのリスクレベルを瞬時にチェック。怪しいサイトの警告サインを表示し、安全な判断をサポートするChrome拡張機能です。",
  keywords: [
    "セキュリティ",
    "Chrome拡張機能",
    "URL チェック",
    "安全",
    "フィッシング対策",
    "SafePage",
  ],
};

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/SafePage/nlgabfonclkebffadhdlofkdefpacopi?hl=ja";
const CONTACT_FORM_URL = "https://forms.gle/32WZHAzSMVp4EXis8";
const TERMS_PATH = "/service/products/safepage/terms_of_use";
const LOGO_SRC = "/images/products/SafePage/safepage_logo.png";

function IconChrome({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function IconTriangleAlert({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function IconCircleCheck({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function IconEye({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function SafepageProductPage() {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.headerInner}>
          <div className={s.headerRow}>
            <div className={s.brandRow}>
              <Image
                src={LOGO_SRC}
                alt="SafePage"
                width={32}
                height={32}
                className={s.headerLogoImg}
                sizes="32px"
                priority
              />
              <span className={s.brandTitle}>SafePage</span>
            </div>
            <div className={s.headerCtas}>
              <a
                className={`${s.btnChrome} ${s.bgSafePrimary} ${s.bgSafePrimaryHover}`}
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconChrome className={s.chromeIconSm} />
                <span className={s.chromeLabelFull}>Chromeに追加</span>
                <span className={s.chromeLabelShort}>追加</span>
              </a>
              <a
                className={s.btnOutlineHeader}
                href={CONTACT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={s.contactLabelLong}>ご意見・お問い合わせ</span>
                <span className={s.contactLabelShort}>お問い合わせ</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={s.mainPad}>
        <section className={`${s.hero} ${s.sectionBorder}`}>
          <div className={s.heroInner}>
            <div className={s.maxW3xl}>
              <div className={s.heroLogoWrap}>
                <Image
                  src={LOGO_SRC}
                  alt="SafePage"
                  width={120}
                  height={120}
                  className={s.heroLogoImg}
                  sizes="(max-width: 640px) 96px, 128px"
                  priority
                />
              </div>
              <div className={s.badgeChrome}>
                <span className={s.pingDot}>
                  <span className={s.pingOuter} />
                  <span className={s.pingInner} />
                </span>
                Chrome拡張機能
              </div>
              <h1 className={s.heroH1}>
                クリックする前に、
                <br />
                <span className={s.safePrimary}>確認しよう。</span>
              </h1>
              <p className={s.heroLead}>
                SafePageは、訪問するURLのリスクレベルを瞬時にチェック。
                <br />
                怪しいサイトの警告サインを表示し、安全な判断をサポートします。
              </p>
              <div className={s.heroCtas}>
                <a
                  className={`${s.btnChromeLg} ${s.bgSafePrimary} ${s.bgSafePrimaryHover}`}
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconChrome className={s.chromeIconMd} />
                  Chromeに追加
                </a>
                <p className={s.mutedSm}>無料で試す</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW2xl}>
              <h2 className={s.sectionH2}>こんな不安、ありませんか？</h2>
              <p className={`${s.sectionLead} ${s.mb12lead}`}>
                見知らぬサイトを訪れるとき、いつも心配になります。
              </p>
            </div>
            <div className={s.grid3}>
              <div className={s.cardWarning}>
                <div className={s.iconWarnWrap}>
                  <IconTriangleAlert className={s.iconWarn} />
                </div>
                <h3 className={s.cardH3}>「このサイト、本当に安全？」</h3>
                <p className={s.cardP}>
                  知らないURLをクリックするとき、詐欺サイトではないか心配になります。
                </p>
              </div>
              <div className={s.cardWarning}>
                <div className={s.iconWarnWrap}>
                  <IconTriangleAlert className={s.iconWarn} />
                </div>
                <h3 className={s.cardH3}>「この特典、怪しくない？」</h3>
                <p className={s.cardP}>お得すぎるオファーや投資話を見ると、不安が募ります。</p>
              </div>
              <div className={s.cardWarning}>
                <div className={s.iconWarnWrap}>
                  <IconTriangleAlert className={s.iconWarn} />
                </div>
                <h3 className={s.cardH3}>手動チェックは時間の無駄</h3>
                <p className={s.cardP}>
                  毎回URLを調べたり、口コミを探したりするのは面倒です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.bgAccentSoft} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW2xl}>
              <div className={s.supportIconWrap}>
                <IconShield className={s.iconShieldLg} />
              </div>
              <h2 className={s.sectionH2}>SafePageが優しくサポート</h2>
              <p className={s.supportLead}>
                SafePageは、サイトを判断したりブロックしたりはしません。
                <br />
                代わりに、リスクのサインを表示して、あなたの判断をお手伝いします。
              </p>
              <div className={s.supportChecks}>
                <div className={s.checkRow}>
                  <IconCircleCheck className={s.checkIcon} />
                  判断するのはあなた
                </div>
                <div className={s.checkRow}>
                  <IconCircleCheck className={s.checkIcon} />
                  情報を提供するだけ
                </div>
                <div className={s.checkRow}>
                  <IconCircleCheck className={s.checkIcon} />
                  ブロックはしない
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW2xl}>
              <h2 className={s.sectionH2}>使い方はシンプル</h2>
              <p className={`${s.sectionLead} ${s.mb12lead}`}>3ステップで、すぐにリスクチェック</p>
            </div>
            <div className={s.grid3}>
              <div className={s.stepCol}>
                <div className={s.stepNum}>1</div>
                <h3 className={s.cardH3}>任意のページを開く</h3>
                <p className={s.cardP}>通常通りウェブサイトを閲覧します</p>
              </div>
              <div className={s.stepCol}>
                <div className={s.stepNum}>2</div>
                <h3 className={s.cardH3}>SafePageアイコンをクリック</h3>
                <p className={s.cardP}>ブラウザのツールバーにあるアイコンをクリック</p>
              </div>
              <div className={s.stepCol}>
                <div className={s.stepNum}>3</div>
                <h3 className={s.cardH3}>リスクサインを確認</h3>
                <p className={s.cardP}>瞬時に警告サインが表示されます</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.bgAccentSoft} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW2xl}>
              <h2 className={s.sectionH2}>主な機能</h2>
              <p className={`${s.sectionLead} ${s.mb12lead}`}>
                シンプルで強力な安全チェック機能
              </p>
            </div>
            <div className={s.gridFeatures}>
              <div className={s.cardFeature}>
                <div className={s.iconFeatureWrap}>
                  <IconEye className={s.iconFeature} />
                </div>
                <h3 className={s.featureH3}>リスクスコア可視化</h3>
                <p className={s.cardP}>
                  🟢 低リスク / 🟡 注意 / 🔴 高リスク で一目でわかる
                </p>
              </div>
              <div className={s.cardFeature}>
                <div className={s.iconFeatureWrap}>
                  <IconTriangleAlert className={s.iconFeature} />
                </div>
                <h3 className={s.featureH3}>警告サインの説明</h3>
                <p className={s.cardP}>なぜ注意が必要なのか、わかりやすく説明</p>
              </div>
              <div className={s.cardFeature}>
                <div className={s.iconFeatureWrap}>
                  <IconZap className={s.iconFeature} />
                </div>
                <h3 className={s.featureH3}>アカウント不要</h3>
                <p className={s.cardP}>基本機能は登録なしですぐに使える</p>
              </div>
              <div className={s.cardFeature}>
                <div className={s.iconFeatureWrap}>
                  <IconLock className={s.iconFeature} />
                </div>
                <h3 className={s.featureH3}>プライバシー重視</h3>
                <p className={s.cardP}>ローカルで動作、最小限のデータ使用</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW2xl}>
              <h2 className={s.sectionH2}>シンプルな料金プラン</h2>
              <p className={`${s.sectionLead} ${s.mb12lead}`}>まずは無料でお試しください</p>
            </div>
            <div className={s.pricingWrap}>
              <div className={s.cardPricing}>
                <div>
                  <h3 className={s.priceTitle}>無料プラン</h3>
                  <div className={s.priceRow}>
                    <span className={s.priceYen}>¥0</span>
                    <span className={s.priceUnit}> / 月</span>
                  </div>
                </div>
                <ul className={s.featureList}>
                  <li>
                    <IconCircleCheck className={s.listCheck} />
                    <span className={s.cardP}>基本的なリスク指標</span>
                  </li>
                  <li>
                    <IconCircleCheck className={s.listCheck} />
                    <span className={s.cardP}>リスクレベル表示</span>
                  </li>
                  <li>
                    <IconCircleCheck className={s.listCheck} />
                    <span className={s.cardP}>シンプルな警告サイン</span>
                  </li>
                </ul>
                <a
                  className={`${s.btnFull} ${s.bgSafePrimary} ${s.bgSafePrimaryHover}`}
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconChrome className={s.chromeIconMd} />
                  今すぐ始める
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.bgAccentSoft} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW3xlWide}>
              <div className={s.supportIconWrap}>
                <IconShield className={s.iconShieldLg} />
              </div>
              <h2 className={s.sectionH2}>信頼と安全性</h2>
              <p className={`${s.supportLead} ${s.mb8}`}>SafePageは、あなたの判断を尊重します</p>
              <div className={s.trustGrid}>
                <div>
                  <h3 className={s.featureH3}>ブロックしない</h3>
                  <p className={s.cardP}>サイトへのアクセスを妨げることはありません</p>
                </div>
                <div>
                  <h3 className={s.featureH3}>個人情報を収集しない</h3>
                  <p className={s.cardP}>あなたのプライバシーを最優先します</p>
                </div>
                <div>
                  <h3 className={s.featureH3}>補助ツールとして設計</h3>
                  <p className={s.cardP}>判断するのはあなた、私たちはサポートします</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.sectionBorder} ${s.sectionPad}`}>
          <div className={s.containerXl}>
            <div className={s.maxW2xl}>
              <h2 className={s.ctaH2}>安心してウェブを楽しもう</h2>
              <p className={`${s.sectionLead} ${s.mb8}`}>SafePageで、クリック前の不安を解消</p>
              <a
                className={`${s.btnChromeLg} ${s.bgSafePrimary} ${s.bgSafePrimaryHover}`}
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconChrome className={s.chromeIconMd} />
                SafePageをChromeに追加
              </a>
              <p className={`${s.mutedSm} ${s.mt4}`}>無料で今すぐ始められます</p>
            </div>
          </div>
        </section>

        <LpProductFooter
          variant="safepage"
          iconSrc={LOGO_SRC}
          iconAlt="SafePage"
          productName="SafePage"
          tagline="クリックする前に、確認しよう。"
          footerNote="SafePageは、ウェブサイトの安全性を保証するものではありません。情報提供を目的としたツールです。"
          links={[
            { href: "/company", label: "会社概要" },
            { href: "/privacy", label: "プライバシーポリシー" },
            { href: TERMS_PATH, label: "利用規約" },
            { href: CONTACT_FORM_URL, label: "ご意見・お問い合わせ" },
          ]}
          chromeWebStoreUrl={CHROME_STORE_URL}
        />
      </div>
    </div>
  );
}
