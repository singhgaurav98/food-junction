import defaultContent from "@/data/defaultContent";

const CONTENT_KEY = "food-junction:content";

// KV is optional. If the Vercel KV integration hasn't been connected yet,
// we still want the site (and admin preview) to work using the seed data —
// admin *saves* just won't persist until KV is connected. This keeps the
// project deployable in one click without any setup.
function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

let kvClient = null;
async function getKv() {
  if (!kvConfigured()) return null;
  if (!kvClient) {
    const { kv } = await import("@vercel/kv");
    kvClient = kv;
  }
  return kvClient;
}

export async function getContent() {
  const kv = await getKv();
  if (kv) {
    const saved = await kv.get(CONTENT_KEY);
    if (saved) return saved;
  }
  return defaultContent;
}

export async function saveContent(content) {
  const kv = await getKv();
  if (!kv) {
    throw new Error(
      "Storage isn't connected yet. Add the Vercel KV integration to your project (see README) so admin changes can be saved."
    );
  }
  await kv.set(CONTENT_KEY, content);
  return content;
}

export function isStorageConnected() {
  return kvConfigured();
}
