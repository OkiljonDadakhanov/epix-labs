// app/api/contact/route.ts
import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    const lines = [
      "📩 New Contact Message for EpixLabs:",
      `👤 Name: ${name || "-"}`,
      `📧 Email: ${email || "-"}`,
      `📞 Phone: ${phone || "-"}`,
      `🏢 Company: ${company || "-"}`,
      `💬 Message: ${message || "-"}`,
    ].join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: lines,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await tgRes.json();
    if (!data.ok) {
      return NextResponse.json(
        { ok: false, error: data.description },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
