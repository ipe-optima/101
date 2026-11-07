import { DISCORD_WEBHOOK } from "./config.js";
import { findQuestion, sourceOf } from "./data.js";
import { $, clip, textFromHtml } from "./utils.js";

let flagCtx = null;

export function openFlag(sid, uid, setIndex = 0) {
  const found = findQuestion(sid, uid, setIndex);
  if (!found) return;
  const { q } = found;
  flagCtx = { sid, uid, ...found };
  $("#flagRef").textContent = sourceOf(sid).title + " · Q " + q.id;
  $("#flagText").value = "";
  $("#flagMsg").textContent = "";
  $("#flagMsg").className = "msg";
  $("#flagSendBtn").disabled = false;
  $("#flagSendBtn").textContent = "Send";
  $("#flagDlg").showModal();
  $("#flagText").focus();
}

export async function sendFlag() {
  if (!flagCtx) return;
  const msg = $("#flagMsg"), btn = $("#flagSendBtn");
  const note = $("#flagText").value.trim();
  if (!note) { msg.className = "msg err"; msg.textContent = "Please describe the problem."; return; }
  if (!DISCORD_WEBHOOK) { msg.className = "msg err"; msg.textContent = "Webhook not configured yet."; return; }
  const { sid, q, topic } = flagCtx, d = sourceOf(sid);
  const payload = {
    username: "Practice Hub",
    embeds: [{
      title: clip("⚑ Flagged: " + d.title + " – Q " + q.id, 250),
      description: clip(note, 4000),
      color: 0xd9822b,
      fields: [
        { name: "Topic", value: clip(topic, 1000), inline: true },
        { name: "Source", value: clip([q.src, q.marks && q.marks + " marks"].filter(Boolean).join(" · ") || "–", 1000), inline: true },
        { name: "Question", value: clip(textFromHtml(q.q) || "–", 1000) },
        { name: "Answer", value: clip(textFromHtml(q.ans) || "–", 1000) },
        { name: "Explanation", value: clip(textFromHtml(q.exp) || "–", 1000) }
      ],
      footer: { text: d.cfg.file },
      timestamp: new Date().toISOString()
    }]
  };
  btn.disabled = true; msg.className = "msg"; msg.textContent = "Sending…";
  try {
    const r = await fetch(DISCORD_WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!r.ok) throw new Error("HTTP " + r.status);
    msg.className = "msg ok"; msg.textContent = "Sent. Thank you!";
    setTimeout(() => { $("#flagDlg").close(); }, 900);
  } catch (e) {
    msg.className = "msg err"; msg.textContent = "Couldn't send (" + e.message + "). Try again.";
    btn.disabled = false;
  }
}
