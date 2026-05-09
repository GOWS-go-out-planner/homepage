import { NextRequest, NextResponse } from "next/server";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${y}/${m}/${d}`;
}

function formatSlot(date: string, start: string, end: string): string {
  if (!date && !start) return "未記入";
  const datePart = formatDate(date);
  const timePart = start || end ? `${start || "?"}〜${end || "?"}` : "";
  return [datePart, timePart].filter(Boolean).join(" ");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    company, name, email, content,
    date1Date, date1Start, date1End,
    date2Date, date2Start, date2End,
    date3Date, date3Start, date3End,
    date4Date, date4Start, date4End,
    date5Date, date5Start, date5End,
  } = body;

  if (!company || !name || !email || !content ||
      !date1Date || !date1Start ||
      !date2Date || !date2Start ||
      !date3Date || !date3Start) {
    return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const slots = [
    { label: "第1希望", value: formatSlot(date1Date, date1Start, date1End) },
    { label: "第2希望", value: formatSlot(date2Date, date2Start, date2End) },
    { label: "第3希望", value: formatSlot(date3Date, date3Start, date3End) },
    ...((date4Date || date4Start) ? [{ label: "第4希望", value: formatSlot(date4Date, date4Start, date4End) }] : []),
    ...((date5Date || date5Start) ? [{ label: "第5希望", value: formatSlot(date5Date, date5Start, date5End) }] : []),
  ];

  const dateLines = slots.map((sl) => `${sl.label}: ${sl.value}`).join("\n");

  const payload = {
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "無料相談のご予約が届きました", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*会社名 / 部署・役職名*\n${company}` },
          { type: "mrkdwn", text: `*お名前*\n${name}` },
          { type: "mrkdwn", text: `*メールアドレス*\n${email}` },
        ],
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*ご相談内容*\n${content}` },
      },
      { type: "divider" },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*ご希望日時*\n${dateLines}` },
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Slack notification failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
