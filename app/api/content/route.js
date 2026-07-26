import { NextResponse } from "next/server";
import { getContent, saveContent, isStorageConnected } from "@/lib/store";

export async function GET() {
  const content = await getContent();
  return NextResponse.json({ content, storageConnected: isStorageConnected() });
}

export async function POST(request) {
  const password = request.headers.get("x-admin-password") || "";
  const adminPassword = process.env.ADMIN_PASSWORD || "foodjunction";

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid data sent." }, { status: 400 });
  }

  if (!body || !body.site || !Array.isArray(body.categories)) {
    return NextResponse.json({ error: "Content is missing required fields." }, { status: 400 });
  }

  try {
    await saveContent(body);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
