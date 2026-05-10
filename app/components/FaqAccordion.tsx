"use client";
import { useState } from "react";
import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    q: "中小企業でも依頼できますか？",
    a: "はい。中小企業・スタートアップを中心に支援しております。規模に関わらずご相談ください。",
  },
  {
    q: "費用感を教えてください。",
    a: "プロジェクトの規模・要件によって異なります。まずはご要件をお聞かせいただき、最適なご提案をいたします。\nまた、ご予算が決まっている場合もご予算内で最大限の価値を提供します。お気軽にご相談ください。",
  },
  {
    q: "コンサルだけ、開発だけの依頼もできますか？",
    a: "はい、どちらも単体でのご依頼が可能です。また、コンサルから開発まで一貫してご支援することも可能です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "全国どこでも対応しております。\n首都圏以外の場合は原則オンラインでの対応となりますが、必要に応じて現地での対応も可能です。",
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
