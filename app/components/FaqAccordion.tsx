"use client";
import { useState } from "react";
import { SITE_FAQS } from "../../lib/seo/faqs";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  // グループヘッダーを挿入するために、グループ境界を検出する
  const seenGroups = new Set<string>();

  return (
    <div>
      {SITE_FAQS.map((faq, i) => {
        const isNewGroup = !seenGroups.has(faq.group);
        if (isNewGroup) seenGroups.add(faq.group);

        return (
          <div key={i}>
            {isNewGroup && (
              <div className={styles.groupHeader} aria-hidden="true">
                {faq.group}
              </div>
            )}
            <dl>
              <div className={styles.item}>
                <dt>
                  <button
                    className={styles.question}
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    {faq.q}
                    <span className={styles.toggle} aria-hidden="true">
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                </dt>
                {open === i && <dd className={styles.answer}>{faq.a}</dd>}
              </div>
            </dl>
          </div>
        );
      })}
    </div>
  );
}
