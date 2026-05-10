import s from "../page.module.css";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gows-inc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/gows_ktma",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gows_ktma/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  {
    name: "LINE",
    href: "https://line.me/R/ti/p/%40532icqyy",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.365 9.89c.41 0 .746.335.746.747 0 .41-.336.745-.746.745h-2.083v1.337h2.083a.75.75 0 0 1 0 1.498h-2.83a.747.747 0 0 1-.745-.745V8.633c0-.41.335-.746.746-.746h2.83a.75.75 0 0 1 0 1.5h-2.084v1.337h2.084V9.89zm-3.781 3.582a.747.747 0 0 1-.515.71.752.752 0 0 1-.232.036.741.741 0 0 1-.604-.298l-2.9-3.95v3.502a.747.747 0 0 1-.747.745.747.747 0 0 1-.745-.745V8.633c0-.32.207-.604.514-.71a.778.778 0 0 1 .233-.036c.23 0 .457.116.604.299l2.9 3.95V8.633c0-.41.335-.746.747-.746a.747.747 0 0 1 .746.746v4.84zm-6.61 0a.747.747 0 0 1-.747.745.747.747 0 0 1-.745-.745V8.633c0-.41.335-.746.745-.746.412 0 .747.335.747.746v4.84zm-2.527.745H3.616a.747.747 0 0 1-.746-.746V8.633c0-.41.335-.746.746-.746.41 0 .746.335.746.746v4.094h2.085c.41 0 .746.335.746.745 0 .411-.335.746-.746.746zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerGrid}>
          <div className={s.footerBrand}>
            <span className={s.footerLogo}>GOWS</span>
            <p className={s.footerTagline}>
              ITで未来を切り拓く、課題解決のプロフェッショナル。<br/>
              GOWS合同会社は、DX・AXコンサルティングとシステム開発を通じて、
              事業を加速させ、企業の成長を支援します。
            </p>
            <ul className={s.footerSocial} role="list" aria-label="SNSリンク・お問い合わせ">
              {socialLinks.map((sn) => (
                <li key={sn.name}>
                  <a
                    href={sn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.footerSocialLink}
                    aria-label={sn.name}
                  >
                    {sn.icon}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://forms.gle/BGJ5MAuT8nHxxkXK9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.footerContactBtn}
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <nav aria-label="サービス">
            <p className={s.footerNavLabel}>サービス</p>
            <ul role="list" className={s.footerNavList}>
              <li><a href="/service/dx-ax">DX・AXコンサルティング</a></li>
              <li><a href="/service/system-dev">システム開発</a></li>
              <li><a href="/service/products">自社プロダクト</a></li>
            </ul>
          </nav>
          <nav aria-label="会社情報">
            <p className={s.footerNavLabel}>会社概要</p>
            <ul role="list" className={s.footerNavList}>
              <li><a href="/company">会社情報</a></li>
              <li><a href="/#news">お知らせ</a></li>
              <li><a href="/#faq">よくある質問</a></li>
            </ul>
          </nav>
          <nav aria-label="その他">
            <p className={s.footerNavLabel}>その他</p>
            <ul role="list" className={s.footerNavList}>
              <li><a href="/contact" target="_blank" rel="noopener noreferrer">無料相談のご予約</a></li>
              <li><a href="/privacy">プライバシーポリシー</a></li>
              <li><a href="/personal-info">個人情報の取り扱いについて</a></li>
            </ul>
          </nav>
        </div>
        <p className={s.copyright}>© GOWS合同会社</p>
      </div>
    </footer>
  );
}
