"use client";
import { useState } from "react";
import { SITE_FAQS } from "../../lib/seo/faqs";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl>
      {SITE_FAQS.map((faq, i) => (
        <div key={i} className={styles.item}>
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
      ))}
    </dl>
  );
}
