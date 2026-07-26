"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

async function uploadImage(file, pw) {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/upload", {
    method: "POST",
    headers: { "x-admin-password": pw },
    body: form
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Upload failed.");
  return data.url;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [pw, setPw] = useState(null);
  const [content, setContent] = useState(null);
  const [storageConnected, setStorageConnected] = useState(true);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploadingId, setUploadingId] = useState(null);
  const [uploadError, setUploadError] = useState("");

  async function handleImageFile(catId, file) {
    if (!file) return;
    setUploadError("");
    setUploadingId(catId);
    try {
      const url = await uploadImage(file, pw);
      updateCategory(catId, "image", url);
    } catch (err) {
      setUploadError(err.message);
    }
    setUploadingId(null);
  }

  useEffect(() => {
    const stored = sessionStorage.getItem("fj_admin_pw");
    if (!stored) {
      router.replace("/admin");
      return;
    }
    setPw(stored);
  }, [router]);

  useEffect(() => {
    if (!pw) return;
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => {
        setContent(data.content);
        setStorageConnected(data.storageConnected);
      });
  }, [pw]);

  const save = useCallback(async () => {
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": pw },
        body: JSON.stringify(content)
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("Error: " + (data.error || "Save failed."));
      } else {
        setStatus("Saved ✓");
      }
    } catch {
      setStatus("Network error.");
    }
    setSaving(false);
  }, [content, pw]);

  function updateSite(field, value) {
    setContent((c) => ({ ...c, site: { ...c.site, [field]: value } }));
  }

  function updateCategory(catId, field, value) {
    setContent((c) => ({
      ...c,
      categories: c.categories.map((cat) =>
        cat.id === catId ? { ...cat, [field]: value } : cat
      )
    }));
  }

  function updateItem(catId, idx, field, value) {
    setContent((c) => ({
      ...c,
      categories: c.categories.map((cat) =>
        cat.id === catId
          ? {
              ...cat,
              items: cat.items.map((it, i) => (i === idx ? { ...it, [field]: value } : it))
            }
          : cat
      )
    }));
  }

  function addItem(catId) {
    setContent((c) => ({
      ...c,
      categories: c.categories.map((cat) =>
        cat.id === catId
          ? { ...cat, items: [...cat.items, { name: "New Dish", price: "0" }] }
          : cat
      )
    }));
  }

  function removeItem(catId, idx) {
    setContent((c) => ({
      ...c,
      categories: c.categories.map((cat) =>
        cat.id === catId ? { ...cat, items: cat.items.filter((_, i) => i !== idx) } : cat
      )
    }));
  }

  function addCategory() {
    setContent((c) => ({
      ...c,
      categories: [
        ...c.categories,
        { id: `cat-${uid()}`, name: "New Category", nameEn: "New Category", image: "", items: [] }
      ]
    }));
  }

  function removeCategory(catId) {
    if (!confirm("Delete this entire category?")) return;
    setContent((c) => ({ ...c, categories: c.categories.filter((cat) => cat.id !== catId) }));
  }

  function logout() {
    sessionStorage.removeItem("fj_admin_pw");
    router.push("/admin");
  }

  if (!pw || !content) {
    return <div className="flex min-h-screen items-center justify-center text-maroon">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-cream pb-24">
      <div className="sticky top-0 z-40 flex items-center justify-between bg-maroon px-5 py-4 text-cream shadow">
        <h1 className="font-display text-2xl text-marigold-light">Food Junction — Admin</h1>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noreferrer" className="text-sm underline hover:text-marigold-light">
            View Site
          </a>
          <button onClick={logout} className="rounded-full border border-cream/30 px-4 py-1.5 text-sm hover:border-marigold-light">
            Log Out
          </button>
        </div>
      </div>

      {uploadError && (
        <div className="mx-auto mt-5 max-w-4xl rounded-xl bg-red-100 px-5 py-3 text-sm text-red-800 ring-1 ring-red-300">
          ⚠️ {uploadError}
        </div>
      )}

      {!storageConnected && (
        <div className="mx-auto mt-5 max-w-4xl rounded-xl bg-yellow-100 px-5 py-3 text-sm text-yellow-900 ring-1 ring-yellow-300">
          ⚠️ Storage is not connected yet — changes will not be saved. Add <b>KV Storage</b> in the Vercel
          dashboard (see README), then redeploy.
        </div>
      )}

      <section className="mx-auto mt-8 max-w-4xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-maroon/10">
        <h2 className="font-display text-xl text-maroon">Restaurant Information</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Name" value={content.site.name} onChange={(v) => updateSite("name", v)} />
          <Field label="Tagline" value={content.site.tagline} onChange={(v) => updateSite("tagline", v)} />
          <Field label="Sub-tagline" value={content.site.subTagline} onChange={(v) => updateSite("subTagline", v)} />
          <Field label="Phone" value={content.site.phone} onChange={(v) => updateSite("phone", v)} />
          <Field label="Alternate Number" value={content.site.phoneAlt} onChange={(v) => updateSite("phoneAlt", v)} />
          <Field label="Email" value={content.site.email} onChange={(v) => updateSite("email", v)} />
          <Field label="Address" value={content.site.address} onChange={(v) => updateSite("address", v)} full />
          <Field label="Timings" value={content.site.timings} onChange={(v) => updateSite("timings", v)} />
          <Field label="Note" value={content.site.note} onChange={(v) => updateSite("note", v)} full />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-4xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl text-maroon">Menu Categories</h2>
          <button
            onClick={addCategory}
            className="rounded-full bg-marigold px-4 py-1.5 text-sm font-semibold text-maroon-dark hover:bg-marigold-light"
          >
            + New Category
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {content.categories.map((cat) => (
            <div key={cat.id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-maroon/10">
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Name (Hindi)" value={cat.name} onChange={(v) => updateCategory(cat.id, "name", v)} />
                <Field label="Name (English)" value={cat.nameEn} onChange={(v) => updateCategory(cat.id, "nameEn", v)} />
                <div>
                  <span className="block text-sm font-semibold text-ink">Photo</span>
                  <div className="mt-1 flex items-center gap-3">
                    {cat.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cat.image}
                        alt=""
                        className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-maroon/20"
                      />
                    )}
                    <label className="cursor-pointer rounded-lg border border-maroon/20 px-3 py-2 text-sm font-semibold text-clay hover:bg-marigold/10">
                      {uploadingId === cat.id ? "Uploading..." : "Choose Photo"}
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden"
                        disabled={uploadingId === cat.id}
                        onChange={(e) => handleImageFile(cat.id, e.target.files?.[0])}
                      />
                    </label>
                  </div>
                  <input
                    value={cat.image || ""}
                    onChange={(e) => updateCategory(cat.id, "image", e.target.value)}
                    placeholder="Or paste an image URL here"
                    className="mt-2 w-full rounded-lg border border-maroon/20 px-3 py-1.5 text-xs outline-none focus:border-clay"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      value={item.name}
                      onChange={(e) => updateItem(cat.id, idx, "name", e.target.value)}
                      className="flex-1 rounded-lg border border-maroon/20 px-3 py-1.5 text-sm outline-none focus:border-clay"
                    />
                    <input
                      value={item.price}
                      onChange={(e) => updateItem(cat.id, idx, "price", e.target.value)}
                      className="w-24 rounded-lg border border-maroon/20 px-3 py-1.5 text-sm outline-none focus:border-clay"
                    />
                    <button
                      onClick={() => removeItem(cat.id, idx)}
                      className="rounded-lg px-2 py-1 text-red-500 hover:bg-red-50"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => addItem(cat.id)}
                  className="text-sm font-semibold text-clay hover:underline"
                >
                  + Add Dish
                </button>
                <button
                  onClick={() => removeCategory(cat.id)}
                  className="text-sm font-semibold text-red-500 hover:underline"
                >
                  Delete Category
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-maroon-dark px-6 py-4 text-cream shadow-lg">
        <span className="text-sm">{status}</span>
        <button
          onClick={save}
          disabled={saving}
          className="rounded-full bg-marigold px-6 py-2.5 font-semibold text-maroon-dark hover:bg-marigold-light disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </main>
  );
}

function Field({ label, value, onChange, full, placeholder }) {
  return (
    <label className={`block text-sm ${full ? "sm:col-span-2 lg:col-span-3" : ""}`}>
      <span className="font-semibold text-ink">{label}</span>
      <input
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-maroon/20 px-3 py-2 outline-none focus:border-clay"
      />
    </label>
  );
}
