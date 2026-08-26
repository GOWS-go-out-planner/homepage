"use client";

import { useEffect, useState } from "react";
import styles from "./DomainMigrationNotice.module.css";
import { useMigrationNoticeOverrideUrl } from "./MigrationNoticeContext";

/** 移転先の新ドメイン（パス・クエリ・ハッシュは元URLのものをそのまま引き継ぐ） */
const NEW_DOMAIN = "pit-dock.com";
/** 通知表示から自動遷移までの秒数 */
const REDIRECT_DELAY_SECONDS = 10;
/** 遷移先コンテンツ本体のルート要素ID（app/layout.tsx と合わせる） */
const SITE_CONTENT_ID = "site-content";

/**
 * 全ページ共通の社名変更・ドメイン移転通知。
 * ルートレイアウトに配置し、表示中は背後のページ操作を無効化した上で
 * 指定秒数後に新ドメインの同一パスへ自動遷移する。
 */
export function DomainMigrationNotice() {
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState(REDIRECT_DELAY_SECONDS);
  // 404ページ等、個別ページから遷移先が上書き指定されている場合はそれを優先する
  const overrideUrl = useMigrationNoticeOverrideUrl();

  useEffect(() => {
    const { hostname, protocol, pathname, search, hash } = window.location;

    // 新ドメイン上で表示された場合は何もしない（無限リダイレクト防止）
    if (hostname === NEW_DOMAIN || hostname.endsWith(`.${NEW_DOMAIN}`)) {
      return;
    }

    // 上書き指定があればそのURLへ、なければドメイン部分のみ新ドメインに差し替え
    // パス・クエリ・ハッシュを維持したURLへ遷移する
    const url = overrideUrl ?? `${protocol}//${NEW_DOMAIN}${pathname}${search}${hash}`;
    setTargetUrl(url);

    // 背後のコンテンツを操作不可・スクロール不可にする
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const contentEl = document.getElementById(SITE_CONTENT_ID);
    contentEl?.setAttribute("inert", "");

    const redirectTimer = setTimeout(() => {
      window.location.href = url;
    }, REDIRECT_DELAY_SECONDS * 1000);

    const countdownTimer = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
      document.body.style.overflow = previousBodyOverflow;
      contentEl?.removeAttribute("inert");
    };
  }, [overrideUrl]);

  if (!targetUrl) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="alertdialog"
      aria-modal="true"
      aria-live="assertive"
      aria-label="サイト移転のお知らせ"
    >
      <div className={styles.card}>
        <p className={styles.message}>
          GOWS合同会社は2026年8月16日をもってPitDock株式会社に社名を変更いたしました。<br />社名変更に伴い本ページも移転したため{REDIRECT_DELAY_SECONDS}秒後に新しいページへ自動的に切り替わります。<br />自動的に切り替わらない場合は以下のURLに移動してください。
        </p>
        <a className={styles.link} href={targetUrl}>
          {targetUrl}
        </a>
        <p className={styles.countdown} aria-hidden="true">
          {remainingSeconds}秒後に自動的に移動します
        </p>
      </div>
    </div>
  );
}
