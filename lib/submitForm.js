// Client helper: POST JSON to one of our API routes. Resolves { ok, status?, error? } and never throws.
export async function postJson(url, body) {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) return { ok: false, error: data.error || 'Something went wrong. Please try again.' };
    return data;
  } catch {
    return { ok: false, error: 'Network problem. Please check your connection and try again.' };
  }
}
