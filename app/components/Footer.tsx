import s from "../page.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerGrid}>
          <div className={s.footerBrand}>
            <span className={s.footerLogo}>GOWS</span>
            <p className={s.footerTagline}>技術で、ビジネスの可能性を拓く。</p>
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
              <li><a href="/legal">特定商取引法に基づく表記</a></li>
            </ul>
          </nav>
        </div>
        <p className={s.copyright}>© GOWS合同会社</p>
      </div>
    </footer>
  );
}
