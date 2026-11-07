import { HUB_TITLE, HUB_SUBTITLE, SUBJECTS, EXAMS } from "../config.js";
import { DATA, EXDATA, failed, ingestSubject, markLoaded } from "../data.js";
import { progress, examProgress } from "../storage.js";
import { $, esc } from "../utils.js";
import { renderMath } from "../math.js";

export function renderHome() {
  const loadedIds = SUBJECTS.filter(subject => DATA[subject.id]).map(subject => subject.id);
  let total = 0, done = 0, review = 0;
  for (const id of loadedIds) {
    const s = progress.stats(DATA[id].qs, id);
    total += s.total; done += s.done; review += s.rev;
  }
  let html = `<header><h1>${esc(HUB_TITLE)}</h1><div class="sub">${esc(HUB_SUBTITLE)}</div>
    <div class="stats"><span class="pill">${loadedIds.length} subject${loadedIds.length === 1 ? "" : "s"}</span>
    <span class="pill">${total} questions</span><span class="pill">✓ ${done} mastered</span>
    <span class="pill">↻ ${review} to review</span>
    <div class="bar" title="Overall progress"><i style="width:${total ? done / total * 100 : 0}%"></i></div></div></header>`;

  if (failed.length) {
    html += `<div class="notice"><b>Couldn't load: ${failed.map(cfg => esc(cfg.file)).join(", ")}</b><br>
      Add the missing files to their declared folders. If you opened this page via file://, serve it using
      <code>python3 -m http.server 8000</code> and visit <code>http://localhost:8000</code>.<br>
      Or select a missing .md file manually:<br>
      <input type="file" id="filePick" accept=".md,.markdown,.txt" multiple></div>`;
  }

  html += `<div class="grid">` + loadedIds.map(id => {
    const d = DATA[id], s = progress.stats(d.qs, id);
    return `<a class="subject scope" href="#/${encodeURIComponent(id)}" style="--accent:${esc(d.color)}">
      <div class="ico">${esc(d.icon)}</div><h3>${esc(d.title)}</h3><div class="code">${esc(d.code)}</div>
      ${d.desc ? `<p>${esc(d.desc)}</p>` : ""}
      <div class="bar"><i style="width:${s.total ? s.done / s.total * 100 : 0}%"></i></div>
      <div class="mini">${s.done}/${s.total} mastered · ${d.topics.length} topics${s.rev ? ` · ↻ ${s.rev}` : ""}</div>
      </a>`;
  }).join("") + `</div>`;

  const examIds = EXAMS.filter(exam => EXDATA[exam.id]).map(exam => exam.id);
  if (examIds.length) {
    html += `<h2 class="topic-title" style="margin-top:40px">Practice Exams</h2>
    <p class="topic-desc">Self-evaluation mock exams with timer.</p><div class="grid">`;
    for (const id of examIds) {
      const d = EXDATA[id];
      const completed = d.sets.filter((set, i) => examProgress.get(id, i)?.finished).length;
      html += `<a class="subject scope" href="#/exam/${encodeURIComponent(id)}" style="--accent:${esc(d.color)}">
        <div class="ico">${esc(d.icon)}</div><h3>${esc(d.title)}</h3><div class="code">${esc(d.code)}</div>
        <p>⏱ ${esc(d.timeLabel)}</p><div class="mini">${d.sets.length} set${d.sets.length === 1 ? "" : "s"} · ${completed} completed</div></a>`;
    }
    html += `</div>`;
  }
  if (!loadedIds.length && !failed.length) html += `<div class="empty">No subjects configured yet.</div>`;
  if (total) html += `<p style="margin-top:20px"><button class="btn link" data-a="resetall">Reset all progress</button></p>`;
  $("#app").innerHTML = html;
  document.title = HUB_TITLE;
  const picker = $("#filePick");
  if (picker) picker.addEventListener("change", async () => {
    for (const file of picker.files) {
      const cfg = SUBJECTS.find(subject => subject.file.split("/").pop() === file.name);
      if (!cfg) continue;
      ingestSubject(cfg, await file.text());
      markLoaded(cfg.id);
    }
    renderHome();
  });
  renderMath();
}
