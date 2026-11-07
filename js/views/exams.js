import { HUB_TITLE } from "../config.js";
import { EXDATA } from "../data.js";
import { examProgress } from "../storage.js";
import { $, esc, toast } from "../utils.js";
import { askHTML } from "../ai.js";
import { renderMath } from "../math.js";

let timer = null;
export function stopExamTimer() { if (timer) clearInterval(timer); timer = null; }
export const setMarks = set => set.qs.reduce((sum, question) => sum + (parseFloat(question.marks) || 0), 0);
export const fmtNum = n => Number.isInteger(n) ? String(n) : n.toFixed(1);
export function fmtTime(ms) {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(seconds / 3600)}:${String(Math.floor(seconds % 3600 / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

export function examContext() {
  const match = location.hash.match(/^#\/exam\/([^/]+)\/(\d+)$/);
  return match ? { id: decodeURIComponent(match[1]), si: +match[2] } : null;
}

function syncAttempt(attempt, data) {
  if (attempt && !attempt.finished) {
    const deadline = attempt.start + data.mins * 60000;
    if (Date.now() >= deadline) {
      attempt.finished = true;
      attempt.end = deadline;
      examProgress.save();
    }
  }
  return attempt;
}

export function renderExamList(id) {
  const data = EXDATA[id];
  if (!data) { location.hash = "#/"; return; }
  let html = `<div class="scope" style="--accent:${esc(data.color)}">
    <div class="subject-header"><a class="back" href="#/">← Home</a></div>
    <header><h1>${esc(data.icon)} ${esc(data.title)}</h1>
    <div class="sub">${[data.code, "Time : " + data.timeLabel].filter(Boolean).map(esc).join(" · ")}</div></header>
    <p class="topic-desc" style="margin-top:14px">Choose a set. The timer starts when you begin and cannot be paused. Answers unlock when time is up or when you press <b>Finished</b>.</p><div class="grid">`;
  data.sets.forEach((set, i) => {
    const attempt = syncAttempt(examProgress.get(id, i), data);
    let status, label;
    if (!attempt) { status = "Not started"; label = "Start exam"; }
    else if (attempt.finished) {
      status = `✓ Completed · ${fmtNum(examProgress.score(attempt, set.qs))} / ${fmtNum(setMarks(set))} marks`;
      label = "Review";
    } else { status = "⏱ In progress"; label = "Resume"; }
    html += `<div class="subject setcard"><h3>${esc(set.name)}</h3>
      <div class="code">${set.qs.length} questions · ${fmtNum(setMarks(set))} marks</div>
      <div class="status">${esc(status)}</div>
      <button class="btn primary" data-a="exopen" data-set="${i}">${label}</button></div>`;
  });
  html += `</div></div>`;
  $("#app").innerHTML = html;
  document.title = data.title + " – " + HUB_TITLE;
}

export function renderExamSet(id, si) {
  const data = EXDATA[id], set = data?.sets[si];
  if (!set) { location.hash = "#/exam/" + encodeURIComponent(id); return; }
  const attempt = syncAttempt(examProgress.get(id, si), data);
  if (!attempt) { location.hash = "#/exam/" + encodeURIComponent(id); return; }
  const max = setMarks(set);
  let html = `<div class="scope" style="--accent:${esc(data.color)}">`;
  if (!attempt.finished) {
    html += `<div class="exam-bar"><div class="name">${esc(data.title)} · ${esc(set.name)}</div>
      <div style="display:flex;gap:10px;align-items:center"><span class="timer" id="timer">--:--:--</span>
      <button class="btn primary" data-a="exfinish">Finished</button></div></div>`;
  } else {
    html += `<div class="subject-header"><a class="back" href="#/exam/${encodeURIComponent(id)}">← ${esc(data.title)} sets</a>
      <button class="btn" data-a="exretake">Retake this set</button></div>
      <div class="exam-banner"><div><b>${esc(set.name)} — finished</b>
      <div class="sub">Time taken: ${fmtTime(attempt.end - attempt.start)} of ${esc(data.timeLabel)}. Mark yourself honestly using the answers below.</div></div>
      <div><b id="exScore">${fmtNum(examProgress.score(attempt, set.qs))} / ${fmtNum(max)}</b> marks</div></div>`;
  }
  html += `<header><h1>${esc(set.name)}</h1><div class="sub">${[data.code, data.title].filter(Boolean).map(esc).join(" · ")} · ${fmtNum(max)} marks</div></header><main>`;
  set.qs.forEach(q => {
    const m = parseFloat(q.marks) || 0;
    const got = attempt.scores?.[q.uid];
    html += `<article class="card" data-uid="${esc(q.uid)}">
      <div class="meta"><span class="qid">Q ${esc(q.id)}</span>
      ${q.src ? `<span class="tag">${esc(q.src)}</span>` : ""}
      ${q.marks ? `<span class="tag">${esc(q.marks)} marks</span>` : ""}</div>
      <div class="q">${q.q}</div>`;
    if (attempt.finished) {
      html += `<div class="answer open"><h4>Answer</h4>${q.ans}<h4>Explanation</h4>${q.exp}
        <div class="selfmark">My marks:
          <input type="number" class="scoreinp" min="0" max="${m}" step="0.5" value="${got === undefined ? "" : got}" placeholder="0">
          <span>/ ${fmtNum(m)}</span><button class="btn" data-a="exfull" data-max="${m}">Full marks</button>
          <button class="btn" data-a="exzero">Zero</button></div>
        <div class="flagrow">${askHTML()}<button class="btn flag" data-a="flag">⚑ Flag wrong</button></div></div>`;
    }
    html += `</article>`;
  });
  html += `</main></div>`;
  $("#app").innerHTML = html;
  document.title = set.name + " – " + data.title;
  renderMath();

  stopExamTimer();
  if (!attempt.finished) {
    const tick = () => {
      const left = attempt.start + data.mins * 60000 - Date.now();
      if (left <= 0) { finishExam(id, si, true); return; }
      const timerEl = $("#timer");
      if (!timerEl) { stopExamTimer(); return; }
      timerEl.textContent = fmtTime(left);
      timerEl.classList.toggle("low", left <= 5 * 60000);
    };
    tick();
    if (!attempt.finished) timer = setInterval(tick, 1000);
  }
}

export function finishExam(id, si, auto = false) {
  const data = EXDATA[id], attempt = examProgress.get(id, si);
  if (!attempt || attempt.finished) return;
  attempt.finished = true;
  attempt.end = Math.min(Date.now(), attempt.start + data.mins * 60000);
  examProgress.save();
  stopExamTimer();
  renderExamSet(id, si);
  window.scrollTo(0, 0);
  if (auto) toast("Time is up! Answers are now unlocked.");
}

export function setMark(ctx, uid, value) {
  const attempt = examProgress.get(ctx.id, ctx.si);
  if (!attempt?.finished) return;
  attempt.scores ||= {};
  if (value === "" || value === null) delete attempt.scores[uid];
  else attempt.scores[uid] = value;
  examProgress.save();
  const el = $("#exScore"), set = EXDATA[ctx.id].sets[ctx.si];
  if (el) el.textContent = `${fmtNum(examProgress.score(attempt, set.qs))} / ${fmtNum(setMarks(set))}`;
}
