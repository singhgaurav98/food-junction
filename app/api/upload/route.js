import { NextResponse } from "next/server";

export async function POST(request) {
  const password = request.headers.get("x-admin-password") || "";
  const adminPassword = process.env.ADMIN_PASSWORD || "foodjunction";

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        error:
          "Image upload storage isn't connected yet. Add the Vercel Blob integration to your project (see README), then redeploy."
      },
      { status: 503 }
    );
  }

  const form = await request.formData();
  const file = form.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file received." }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "Please upload a JPG, PNG, WEBP or GIF image." },
      { status: 400 }
    );
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return NextResponse.json({ error: "Image must be under 5MB." }, { status: 400 });
  }

  const { put } = await import("@vercel/blob");
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const blob = await put(`food-junction/${Date.now()}-${safeName}`, file, {
    access: "public"
  });

  return NextResponse.json({ url: blob.url });
}
