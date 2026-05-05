"use client";
import { useState } from "react";
import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    q: "初回相談は有料ですか？",
    a: "いいえ、初回のご相談は30分間無料で承っております。",
  },
  {
    q: "中小企業でも依頼できますか？",
    a: "はい。中小企業・スタートアップを中心に支援しております。規模に関わらずご相談ください。",
  },
  {
    q: "費用感を教えてください。",
    a: "プロジェクトの規模・要件によって異なります。まずはご要件をお聞かせいただき、最適なご提案をいたします。",
  },
  {
    q: "コンサルだけ、開発だけの依頼もできますか？",
    a: "はい、どちらも単体でのご依頼が可能です。また、コンサルから開発まで一貫してご支援することも可能です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "オンラインでの対応が中心のため、全国どこからでもご相談いただけます。",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl>
      {faqs.map((faq, i) => (
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
