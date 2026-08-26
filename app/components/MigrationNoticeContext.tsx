"use client";

import { createContext, useCallback, useContext, useState } from "react";

type MigrationNoticeContextValue = {
  /** 指定されている場合、DomainMigrationNoticeはこのURLへ遷移する（未指定時は現在のパスを引き継いだURLへ遷移） */
  redirectOverrideUrl: string | null;
  setRedirectOverrideUrl: (url: string | null) => void;
};

const MigrationNoticeContext = createContext<MigrationNoticeContextValue | null>(null);

/**
 * ドメイン移転通知(DomainMigrationNotice)の遷移先を、ページ側から
 * 上書きするためのコンテキスト。例えば404ページでは、現在のパスではなく
 * 新ドメインのトップページへ遷移させたいため、useSetMigrationNoticeTarget() で指定する。
 */
export function MigrationNoticeProvider({ children }: { children: React.ReactNode }) {
  const [redirectOverrideUrl, setRedirectOverrideUrl] = useState<string | null>(null);

  return (
    <MigrationNoticeContext.Provider value={{ redirectOverrideUrl, setRedirectOverrideUrl }}>
      {children}
    </MigrationNoticeContext.Provider>
  );
}

/** DomainMigrationNotice 側で遷移先の上書き指定を読み取るためのフック */
export function useMigrationNoticeOverrideUrl() {
  const ctx = useContext(MigrationNoticeContext);
  return ctx?.redirectOverrideUrl ?? null;
}

/** 個別ページ側から通知の遷移先を上書き指定するためのフック */
export function useSetMigrationNoticeTarget() {
  const ctx = useContext(MigrationNoticeContext);
  if (!ctx) {
    throw new Error("useSetMigrationNoticeTarget must be used within MigrationNoticeProvider");
  }
  return ctx.setRedirectOverrideUrl;
}
