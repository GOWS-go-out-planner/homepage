"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="メインナビゲーション">
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} aria-label="GOWS合同会社 トップへ">GOWS</a>
        <ul className={styles.links} role="list">
          <li className={styles.hasDropdown}>
            <a href="/#services" className={styles.navLink}>サービス ▾</a>
            <div className={styles.dropdown} role="menu">
              <a href="/service/dx-ax" className={styles.dropdownItem} role="menuitem">DX・AXコンサルティング</a>
              <a href="/service/system-dev" className={styles.dropdownItem} role="menuitem">システム開発</a>
              <a href="/service/products" className={styles.dropdownItem} role="menuitem">自社プロダクト</a>
            </div>
          </li>
          <li><a href="/company">会社概要</a></li>
          <li><a href="/#news">お知らせ</a></li>
        </ul>
        <div className={styles.ctaGroup}>
          <a
            href="https://forms.gle/BGJ5MAuT8nHxxkXK9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            お問い合わせ
          </a>
          <a href="/contact" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            無料相談を予約する
          </a>
        </div>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className={`${styles.menuIconLine} ${mobileMenuOpen ? styles.menuIconLineOpenTop : ""}`} />
          <span className={`${styles.menuIconLine} ${mobileMenuOpen ? styles.menuIconLineOpenMiddle : ""}`} />
          <span className={`${styles.menuIconLine} ${mobileMenuOpen ? styles.menuIconLineOpenBottom : ""}`} />
        </button>
      </div>
      <div
        id="mobile-navigation-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileLinks} role="list">
          <li className={styles.mobileParentItem}>
            <a href="/#services" onClick={closeMobileMenu}>サービス</a>
            <ul className={styles.mobileChildLinks} role="list">
              <li><a href="/service/dx-ax" onClick={closeMobileMenu}>DX・AXコンサルティング</a></li>
              <li><a href="/service/system-dev" onClick={closeMobileMenu}>システム開発</a></li>
              <li><a href="/service/products" onClick={closeMobileMenu}>自社プロダクト</a></li>
            </ul>
          </li>
          <li><a href="/company" onClick={closeMobileMenu}>会社概要</a></li>
          <li><a href="/#news" onClick={closeMobileMenu}>お知らせ</a></li>
          <li>
            <a
              href="https://forms.gle/BGJ5MAuT8nHxxkXK9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              お問い合わせ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
