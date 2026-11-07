import { loadSubjects, loadExams, DATA, EXDATA } from "./data.js";
import { progress, examProgress } from "./storage.js";
import { selectedAI, setDefaultAI, askAI } from "./ai.js";
import { openFlag, sendFlag } from "./report.js";
import { $, toast } from "./utils.js";
import { renderHome } from "./views/home.js";
import { view, resetView, renderSubject, updateSubjectProgress } from "./views/subject.js";
import { examContext, renderExamList, renderExamSet, stopExamTimer, finishExam, setMark } from "./views/exams.js";

let currentSid = null;

function route() {
  stopExamTimer();
  const exam = location.hash.match(/^#\/exam\/([^/]+)(?:\/(\d+))?$/);
  if (exam) {
    const id = decodeURIComponent(exam[1]);
    currentSid = "exam::" + id;
    if (!EXDATA[id]) { location.hash = "#/"; return; }
    if (exam[2] !== undefined) renderExamSet(id, +exam[2]);
    else renderExamList(id);
    window.scrollTo(0, 0);
    return;
  }
  const match = location.hash.match(/^#\/(.+)$/);
  const subjectId = match ? decodeURIComponent(match[1]) : null;
  if (subjectId !== currentSid) { resetView(); currentSid = subjectId; }
  if (subjectId && DATA[subjectId]) renderSubject(subjectId);
  else if (subjectId) { location.hash = "#/"; return; }
  else renderHome();
  window.scrollTo(0, 0);
}

function toggleAllAnswers(open) {
  for (const card of document.querySelectorAll(".card")) {
    card.querySelector(".answer")?.classList.toggle("open", open);
    const button = card.querySelector('[data-a="toggle"]');
    if (!button) continue;
    button.textContent = open ? "Hide answer" : "Show answer";
    button.setAttribute("aria-expanded", String(open));
  }
}

function handleExamAction(button, action) {
  const path = location.hash.match(/^#\/exam\/([^/]+)/);
  const id = path ? decodeURIComponent(path[1]) : null;
  const data = id && EXDATA[id];
  if (!data) return;
  if (action === "exopen") {
    const index = +button.dataset.set;
    if (!data.sets[index]) return;
    if (!examProgress.get(id, index)) {
      if (!confirm(`Start "${data.sets[index].name}" now?\n\nThe ${data.timeLabel} timer begins immediately and cannot be paused.`)) return;
      examProgress.set(id, index, { start: Date.now(), finished: false, scores: {} });
    }
    location.hash = "#/exam/" + encodeURIComponent(id) + "/" + index;
  } else if (action === "exfinish") {
    const ctx = examContext();
    if (ctx && confirm("Finish the exam now? You cannot go back to answering after this.")) finishExam(ctx.id, ctx.si);
  } else if (action === "exretake") {
    const ctx = examContext();
    if (ctx && confirm("Discard this attempt and score, and return to the set list?")) {
      examProgress.delete(ctx.id, ctx.si);
      location.hash = "#/exam/" + encodeURIComponent(ctx.id);
    }
  } else if (action === "exfull" || action === "exzero") {
    const ctx = examContext(), card = button.closest(".card");
    if (!ctx || !card) return;
    const input = card.querySelector(".scoreinp");
    const value = action === "exfull" ? (parseFloat(button.dataset.max) || 0) : 0;
    input.value = value;
    setMark(ctx, card.dataset.uid, value);
  }
}

function handleClick(e) {
  const button = e.target.closest("[data-a]");
  if (!button) return;
  const action = button.dataset.a;
  if (action.startsWith("ex")) { handleExamAction(button, action); return; }

  const sid = currentSid;
  if (action === "toggle-topics") {
    const menu = button.closest(".topic-menu");
    const open = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  } else if (action === "topic" && sid && !sid.startsWith("exam::")) {
    view.topic = button.dataset.t;
    renderSubject(sid);
    window.scrollTo(0, 0);
  } else if (action === "flag") {
    const uid = button.closest(".card")?.dataset.uid;
    if (uid) openFlag(sid, uid, examContext()?.si ?? 0);
  } else if (action === "askmenu") {
    const menu = button.closest(".ask");
    const open = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  } else if (action === "ask") {
    const ai = button.dataset.ai || selectedAI();
    if (button.dataset.ai) setDefaultAI(ai);
    const askBox = button.closest(".ask"), uid = button.closest(".card")?.dataset.uid;
    askBox.classList.remove("open");
    askBox.querySelector(".askpick")?.setAttribute("aria-expanded", "false");
    if (uid) void askAI(sid, uid, ai, examContext()?.si ?? 0);
  } else if (action === "flagcancel") {
    $("#flagDlg").close();
  } else if (action === "flagsend") {
    void sendFlag();
  } else if (action === "showall" || action === "hideall") {
    toggleAllAnswers(action === "showall");
  } else if (action === "filter" && sid && !sid.startsWith("exam::")) {
    view.onlyOpen = !view.onlyOpen;
    renderSubject(sid);
  } else if (action === "reset" && sid && !sid.startsWith("exam::")) {
    if (confirm("Reset progress for this subject?")) { progress.reset(sid); renderSubject(sid); }
  } else if (action === "resetall") {
    if (confirm("Reset progress for ALL subjects?")) { progress.resetAll(); renderHome(); }
  } else if (action === "toggle") {
    const card = button.closest(".card");
    const answer = card?.querySelector(".answer");
    if (!answer) return;
    const open = answer.classList.toggle("open");
    button.textContent = open ? "Hide answer" : "Show answer";
    button.setAttribute("aria-expanded", String(open));
  } else if ((action === "done" || action === "review") && sid && !sid.startsWith("exam::")) {
    const card = button.closest(".card"), uid = card?.dataset.uid;
    if (!uid) return;
    const status = progress.set(sid, uid, action);
    if (view.onlyOpen && status === "done") {
      // The active filter excludes newly mastered items. Refresh only this view.
      renderSubject(sid);
      return;
    }
    card.classList.toggle("done", status === "done");
    card.classList.toggle("review", status === "review");
    for (const name of ["done", "review"]) {
      const control = card.querySelector(`[data-a="${name}"]`);
      control.classList.toggle("on", status === name);
      control.setAttribute("aria-pressed", String(status === name));
    }
    updateSubjectProgress(sid);
  }
}

function closeMenusOutside(e) {
  const askMine = e.target.closest(".ask");
  const topicMine = e.target.closest(".topic-menu");
  for (const menu of document.querySelectorAll(".ask.open")) {
    if (menu !== askMine) {
      menu.classList.remove("open");
      menu.querySelector(".askpick")?.setAttribute("aria-expanded", "false");
    }
  }
  for (const menu of document.querySelectorAll(".topic-menu.open")) {
    if (menu !== topicMine) {
      menu.classList.remove("open");
      menu.querySelector(".topic-trigger")?.setAttribute("aria-expanded", "false");
    }
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("click", closeMenusOutside);
document.addEventListener("input", e => {
  if (!e.target.matches(".scoreinp")) return;
  const ctx = examContext(), uid = e.target.closest(".card")?.dataset.uid;
  if (!ctx || !uid) return;
  const max = parseFloat(e.target.max) || 0;
  const value = e.target.value === "" ? "" : Math.min(max, Math.max(0, parseFloat(e.target.value) || 0));
  setMark(ctx, uid, value);
});
window.addEventListener("hashchange", route);

Promise.all([loadSubjects(), loadExams()])
  .then(route)
  .catch(error => {
    console.error(error);
    $("#app").innerHTML = '<div class="notice">Couldn\'t initialize the questionnaire. Check the browser console.</div>';
    toast("Failed to initialize questionnaire");
  });
