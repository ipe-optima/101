export const $ = selector => document.querySelector(selector);

export function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

export function textFromHtml(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = String(html ?? "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "[diagram]")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|li|tr|div|h4|ul|ol)>/gi, "\n");
  return (wrapper.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
}

export const clip = (value, length) => value.length > length ? value.slice(0, length - 1) + "…" : value;

export function toast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

export async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(text); return true; } catch { /* fallback */ }
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  let copied = false;
  try { copied = document.execCommand("copy"); } catch { /* unsupported */ }
  input.remove();
  return copied;
}
