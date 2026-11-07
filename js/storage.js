const PROGRESS_KEY = "practice_hub_v1"; // Keep the legacy key: existing browsers retain progress.
const EXAM_KEY = "practice_hub_exams_v1";
const AI_KEY = "practicehub-ai";

function storageRead(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function storageWrite(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private browsing / quota */ }
}

const raw = storageRead(PROGRESS_KEY, { status: {} });
const state = raw && typeof raw === "object" ? raw : { status: {} };
if (!state.status || typeof state.status !== "object" || Array.isArray(state.status)) state.status = {};

export const progress = {
  key: (subjectId, uid) => `${subjectId}::${uid}`,
  get(subjectId, uid) { return state.status[this.key(subjectId, uid)]; },
  set(subjectId, uid, action) {
    const k = this.key(subjectId, uid);
    if (state.status[k] === action) delete state.status[k];
    else state.status[k] = action;
    storageWrite(PROGRESS_KEY, state);
    return state.status[k];
  },
  stats(questions, subjectId) {
    let done = 0, rev = 0;
    for (const q of questions) {
      const status = this.get(subjectId, q.uid);
      if (status === "done") done++;
      else if (status === "review") rev++;
    }
    return { total: questions.length, done, rev };
  },
  reset(subjectId) {
    for (const k of Object.keys(state.status)) if (k.startsWith(subjectId + "::")) delete state.status[k];
    storageWrite(PROGRESS_KEY, state);
  },
  resetAll() { state.status = {}; storageWrite(PROGRESS_KEY, state); },
  migrate(subjectId, questions) {
    // Old versions used LABEL alone as key; importing ambiguous labels would
    // incorrectly mark every question sharing them as completed. Only unique
    // legacy labels can be migrated without inventing which question was meant.
    const counts = new Map();
    for (const q of questions) counts.set(q.id, (counts.get(q.id) || 0) + 1);
    let changed = false;
    for (const q of questions) {
      if (counts.get(q.id) !== 1) continue;
      const oldStatus = state.status[this.key(subjectId, q.id)];
      const newKey = this.key(subjectId, q.uid);
      if (state.status[newKey] == null && (oldStatus === "done" || oldStatus === "review")) {
        state.status[newKey] = oldStatus;
        changed = true;
      }
    }
    if (changed) storageWrite(PROGRESS_KEY, state);
  }
};

const examsRaw = storageRead(EXAM_KEY, {});
const attempts = examsRaw && typeof examsRaw === "object" && !Array.isArray(examsRaw) ? examsRaw : {};
export const examProgress = {
  key: (id, setIndex) => `${id}::${setIndex}`,
  get(id, setIndex) { return attempts[this.key(id, setIndex)]; },
  set(id, setIndex, value) { attempts[this.key(id, setIndex)] = value; storageWrite(EXAM_KEY, attempts); },
  delete(id, setIndex) { delete attempts[this.key(id, setIndex)]; storageWrite(EXAM_KEY, attempts); },
  save() { storageWrite(EXAM_KEY, attempts); },
  migrate(id, setIndex, questions) {
    const attempt = this.get(id, setIndex);
    if (!attempt?.scores || typeof attempt.scores !== "object") return;
    const counts = new Map();
    for (const q of questions) counts.set(q.id, (counts.get(q.id) || 0) + 1);
    let changed = false;
    for (const q of questions) {
      if (Object.hasOwn(attempt.scores, q.id)) {
        if (counts.get(q.id) === 1 && !Object.hasOwn(attempt.scores, q.uid)) {
          attempt.scores[q.uid] = attempt.scores[q.id];
        }
        // Keep the original legacy score untouched. It is not included in the
        // new per-question sum, but we must not erase data without permission.
        if (counts.get(q.id) === 1 && !Object.hasOwn(attempt.scores, q.uid)) changed = true;
      }
    }
    if (changed) this.save();
  },
  score(attempt, questions) {
    if (!attempt) return 0;
    return questions.reduce((sum, q) => sum + (+attempt.scores?.[q.uid] || 0), 0);
  }
};

export function getDefaultAI() {
  try { return localStorage.getItem(AI_KEY); } catch { return null; }
}
export function saveDefaultAI(ai) {
  try { localStorage.setItem(AI_KEY, ai); } catch { /* ignore */ }
}
