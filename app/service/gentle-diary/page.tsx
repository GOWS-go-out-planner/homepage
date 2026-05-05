"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import s from "./page.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/gentle-diary-%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E5%85%B1%E6%9C%89%E3%81%97%E3%81%AA%E3%81%84%E4%BD%8D%E7%BD%AE%E6%83%85%E5%A0%B1%E6%97%A5%E8%A8%98/id6758263521";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.gentlediary&hl=ja";
const CONTACT_URL = "https://forms.gle/1LeyyeeJqdACPJXf9";

function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={`${s.storeButtons} ${className ?? ""}`}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
        <Image src="/services/AppStore.png" alt="App Storeで入手" width={140} height={42} />
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
        <Image src="/services/GooglePlay.png" alt="Google Playで手に入れよう" width={140} height={42} />
      </a>
    </div>
  );
}

export default function GentleDiaryPage() {
  const fadeRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll(`.${s.fadeIn}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.page}>
      {/* Topbar */}
      <div className={s.topbar}>
        <div className={s.topbarInner}>
          <div className={s.topbarLeft}>
            <span className={s.topbarLogo}>Gentle Diary</span>
          </div>
          <div className={s.topbarRight}>
            <div className={s.topbarCta}>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
                <Image src="/services/AppStore.png" alt="App Storeで入手" width={120} height={36} />
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={s.storeBtn}>
                <Image src="/services/GooglePlay.png" alt="Google Playで手に入れよう" width={120} height={36} />
              </a>
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.contactBtn}>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className={s.hero}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.fadeIn}>
            <h1 className={s.heroH1}>
              安心を共有しながら、<br />プライバシーは守る。
            </h1>
            <p className={s.heroSub}>
              リアルタイムな位置情報の共有はしない。<br />
              1日の行動をやさしく要約して届ける、家族や大切な人のための見守りアプリ。
            </p>
            <div className={s.ctaRow}>
              <div className={s.storeCta}>
                <StoreButtons />
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.contactBtn}>
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
          <div className={`${s.heroCard} ${s.fadeIn}`}>
            <Image
              src="/services/0.png"
              alt="Gentle Diaryのイメージ"
              width={400}
              height={400}
              className={s.heroIllus}
              priority
            />
            <div className={s.stats}>
              <div className={s.stat}>
                <strong>プライバシーに配慮</strong>
                <div>許可した人だけに公開</div>
              </div>
              <div className={s.stat}>
                <strong>ほどよい距離感</strong>
                <div>リアルタイム共有はしない</div>
              </div>
              <div className={s.stat}>
                <strong>シンプル</strong>
                <div>毎日の負担ゼロ</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problems */}
      <section className={`${s.section} ${s.fadeIn}`}>
        <div className={`${s.sectionTitle} ${s.fadeIn}`}>
          <h2>こんなお悩みありませんか？</h2>
        </div>
        <div className={`${s.container} ${s.gridTwo}`}>
          <div className={s.card}>
            <h3>常時共有は、気が休まらない。</h3>
            <p>常に位置を追跡されると、監視されているようなストレスを感じてしまうことも。</p>
            <Image
              src="/services/1.png"
              alt="常時共有は、気が休まらない。"
              width={400}
              height={300}
              className={s.cardMedia}
            />
          </div>
          <div className={s.card}>
            <h3>でも、無事は知りたい。</h3>
            <p>家族や恋人が今日どんな一日だったのか、ざっくりでも伝わるだけで安心できる。</p>
            <Image
              src="/services/2.png"
              alt="でも、無事は知りたい。"
              width={400}
              height={300}
              className={s.cardMedia}
            />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className={`${s.section} ${s.fadeIn}`}>
        <div className={`${s.sectionTitle} ${s.fadeIn}`}>
          <h2>Gentle Diaryは、リアルタイム追跡の代わりに<br />1日の行動を要約して共有します</h2>
        </div>
        <div className={`${s.container} ${s.gridTwo}`}>
          <div className={s.card}>
            <h3>行動を自動でやさしく要約</h3>
            <p>1日の移動履歴をゆるくまとめて共有します。</p>
            <Image
              src="/services/日記.png"
              alt="行動を自動でやさしく要約"
              width={400}
              height={300}
              className={s.cardMedia}
            />
          </div>
          <div className={s.card}>
            <h3>リアルタイム共有はしない</h3>
            <p>今いる場所は見えないからこそ、安心感とプライバシーが両立できます。</p>
            <Image
              src="/services/リアルタイム位置情報共有なし.png"
              alt="リアルタイム共有はしない"
              width={400}
              height={300}
              className={s.cardMedia}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`${s.section} ${s.featureSection} ${s.fadeIn}`} id="features">
        <div className={s.container}>
          <div className={`${s.sectionTitle} ${s.fadeIn}`}>
            <h2>Gentle Diaryが選ばれる理由</h2>
          </div>
          <div className={s.featureList}>
            <div className={s.feature}>
              <span>プライバシー重視</span>
              <p>見られすぎないから、距離感がちょうどいい。</p>
            </div>
            <div className={s.feature}>
              <span>自動要約</span>
              <p>1日の動きをまとめて、わかりやすく共有。</p>
            </div>
            <div className={s.feature}>
              <span>家族・恋人向け</span>
              <p>「無事に過ごしたよ」をやさしく伝える。</p>
            </div>
            <div className={s.feature}>
              <span>シンプル操作</span>
              <p>必要なのは起動だけ。あとは自動で完結。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`${s.section} ${s.fadeIn}`}>
        <div className={s.container}>
          <div className={s.cta}>
            <h2>毎日の安心を、やさしく共有しよう。</h2>
            <p>リアルタイムをやめたら、もっとやさしくつながれる。</p>
            <div className={s.ctaButtonsWrap}>
              <StoreButtons />
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className={s.contactBtn}>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <div className={`${s.container} ${s.footerContent}`}>
          <nav className={s.footerLinks} aria-label="フッターナビゲーション">
            <a href="https://gows-llc.com/company-info/" target="_blank" rel="noopener noreferrer">会社概要</a>
            <a href="https://gows-llc.com/service/in-house/gentle-diary/privacy_policy/" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
            <a href="https://gows-llc.com/service/in-house/gentle-diary/terms_of_use/" target="_blank" rel="noopener noreferrer">利用規約</a>
          </nav>
          <div className={s.footerCompany}>
            <strong>GOWS合同会社</strong>
          </div>
          <div className={s.footerCopyright}>
            Copyright © GOWS合同会社 All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
