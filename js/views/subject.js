import { HUB_TITLE } from "../config.js";
import { DATA } from "../data.js";
import { progress } from "../storage.js";
import { $, esc } from "../utils.js";
import { askHTML } from "../ai.js";
import { renderMath } from "../math.js";

export const view = { topic: "all", onlyOpen: false };
export function resetView() { view.topic = "all"; view.onlyOpen = false; }

export function cardHTML(subjectId, question) {
  const status = progress.get(subjectId, question.uid);
  return `<article class="card ${status || ""}" data-uid="${esc(question.uid)}">
    <div class="meta"><span class="qid">Q ${esc(question.id)}</span>
    ${question.src ? `<span class="tag">${esc(question.src)}</span>` : ""}
    ${question.or ? '<span class="tag or">OR option</span>' : ""}
    ${question.marks ? `<span class="tag">${esc(question.marks)} marks</span>` : ""}</div>
    <div class="q">${question.q}</div><div class="actions">
      <button class="btn primary" data-a="toggle" aria-expanded="false">Show answer</button>
      <button class="btn good ${status === "done" ? "on" : ""}" data-a="done" aria-pressed="${status === "done"}">✓ Got it</button>
      <button class="btn warn ${status === "review" ? "on" : ""}" data-a="review" aria-pressed="${status === "review"}">↻ Review later</button>
    </div><div class="answer"><h4>Answer</h4>${question.ans}<h4>Explanation</h4>${question.exp}
    <div class="flagrow">${askHTML()}<button class="btn flag" data-a="flag">⚑ Flag wrong</button></div></div>
  </article>`;
}

export function statPills(subjectId) {
  const s = progress.stats(DATA[subjectId].qs, subjectId);
  return `<span class="pill">${s.total} questions</span><span class="pill">✓ ${s.done} mastered</span>
    <span class="pill">↻ ${s.rev} to review</span>`;
}

export function updateSubjectProgress(subjectId) {
  const s = progress.stats(DATA[subjectId].qs, subjectId);
  const statsEl = $("#subStats"), textEl = $("#hdrProgTxt"), barEl = $("#hdrProgBar");
  if (statsEl) statsEl.innerHTML = statPills(subjectId);
  if (textEl) textEl.textContent = `${s.done}/${s.total} Mastered`;
  if (barEl) barEl.style.width = (s.total ? s.done / s.total * 100 : 0) + "%";
}

export function renderSubject(subjectId) {
  const d = DATA[subjectId];
  if (!d) { location.hash = "#/"; return; }
  const stats = progress.stats(d.qs, subjectId);
  const chosen = view.topic === "all" ? "All topics" : (d.topics[Number(view.topic)]?.name || "All topics");
  let html = `<div class="scope" style="--accent:${esc(d.color)}"><div class="subject-header">
    <a class="back" href="#/">← Subjects</a><div class="topic-menu">
      <button class="topic-trigger" type="button" data-a="toggle-topics" aria-expanded="false">
      <span>Topics</span><span class="topic-current">${esc(chosen)}</span><span class="chev">▾</span></button>
      <nav class="topics" aria-label="Subject topics">
        <button class="chip ${view.topic === "all" ? "on" : ""}" data-a="topic" data-t="all">All topics<small>${d.qs.length}</small></button>
        ${d.topics.map((t, i) => `<button class="chip ${view.topic === String(i) ? "on" : ""}" data-a="topic" data-t="${i}">${esc(t.name)}<small>${t.qs.length}</small></button>`).join("")}
      </nav></div><div class="hdr-prog"><span id="hdrProgTxt">${stats.done}/${stats.total} Mastered</span>
      <div class="bar"><i id="hdrProgBar" style="width:${stats.total ? stats.done / stats.total * 100 : 0}%"></i></div></div></div>
    <header><h1>${esc(d.icon)} ${esc(d.title)}</h1>
      <div class="sub">${[d.code, d.desc].filter(Boolean).map(esc).join(" · ")}</div>
      <div class="stats" id="subStats">${statPills(subjectId)}</div></header>
    <div class="tools"><button class="btn" data-a="showall">Show all answers</button>
      <button class="btn" data-a="hideall">Hide all answers</button>
      <button class="btn" data-a="filter">${view.onlyOpen ? "Showing: Not mastered (click for all)" : "Only show: Review Later"}</button>
      <button class="btn" data-a="reset">Reset this subject</button></div><main>`;
  let any = false;
  for (const [i, topic] of d.topics.entries()) {
    if (view.topic !== "all" && view.topic !== String(i)) continue;
    const questions = topic.qs.filter(q => !view.onlyOpen || progress.get(subjectId, q.uid) !== "done");
    if (!questions.length) continue;
    any = true;
    html += `<h2 class="topic-title">${esc(topic.name)}</h2>${topic.desc ? `<p class="topic-desc">${esc(topic.desc)}</p>` : ""}`;
    html += questions.map(question => cardHTML(subjectId, question)).join("");
  }
  if (!any) html += `<div class="empty">🎉 Nothing left here – everything in this view is mastered.</div>`;
  html += `</main></div>`;
  $("#app").innerHTML = html;
  document.title = d.title + " – " + HUB_TITLE;
  renderMath();
}
