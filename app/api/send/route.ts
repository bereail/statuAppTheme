// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";          // usa Node (acceso a process.env)
export const dynamic = "force-dynamic";   // evita optimización estática

type SendBody = {
  to?: string[];
  subject?: string;
  html?: string;
  react?: React.ReactNode;
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ausente");
    return NextResponse.json(
      { ok: false, where: "resend", error: { message: "Missing RESEND_API_KEY" } },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  let body: SendBody = {};
  try {
    body = (await req.json()) as SendBody;
  } catch {
    body = {};
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "StatuApp <noreply@tudominio>",
      to: body.to ?? ["tu@mail.com"],
      subject: body.subject ?? "Test",
      html: body.html ?? "<p>Hola!</p>",
      // react: body.react, // si usás plantillas con React
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true, data });
  } catch (err: unknown) {
    const e = err instanceof Error ? err : new Error("Unknown error");
    console.error("Resend error:", e);
    return NextResponse.json(
      { ok: false, where: "resend", error: { message: e.message } },
      { status: 502 }
    );
  }
}
