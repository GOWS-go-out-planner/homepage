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
          <li><a href="#services">サービス</a></li>
          <li><a href="#cases">実績</a></li>
          <li><a href="#company">会社情報</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
        <a href="#contact" className={styles.cta}>無料相談する</a>
      </div>
    </nav>
  );
}
