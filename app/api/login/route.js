import { NextResponse } from "next/server";

export async function POST(request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD || "foodjunction";

  if (password === adminPassword) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "Wrong password." }, { status: 401 });
}
