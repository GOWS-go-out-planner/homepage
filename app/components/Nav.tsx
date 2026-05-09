"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="/contact" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          無料相談を予約する
        </a>
      </div>
    </nav>
  );
}
