import { SUBJECTS, EXAMS } from "./config.js";
import { parseSubject, parseExam, parseMins } from "./parsers.js";
import { progress, examProgress } from "./storage.js";

export const DATA = {};
export const EXDATA = {};
export let failed = [];

export function ingestSubject(cfg, content) {
  const parsed = parseSubject(content);
  const qs = parsed.topics.flatMap(topic => topic.qs);
  progress.migrate(cfg.id, qs);
  const meta = parsed.meta;
  DATA[cfg.id] = {
    cfg, topics: parsed.topics, qs,
    title: cfg.title || meta.title || cfg.id,
    code: meta.code || "", desc: meta.description || "",
    icon: cfg.icon || meta.icon || "📘",
    color: cfg.color || meta.color || "#3b5bdb"
  };
}

export async function loadSubjects() {
  failed = [];
  await Promise.all(SUBJECTS.map(async cfg => {
    try {
      const response = await fetch(cfg.file, { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      ingestSubject(cfg, await response.text());
    } catch { failed.push(cfg); }
  }));
}

export async function loadExams() {
  await Promise.all(EXAMS.map(async cfg => {
    try {
      const response = await fetch(cfg.file, { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const parsed = parseExam(await response.text());
      EXDATA[cfg.id] = {
        cfg, sets: parsed.sets,
        title: cfg.title || parsed.meta.title || cfg.id,
        code: parsed.meta.code || "",
        timeLabel: parsed.meta.time || "1 Hour",
        mins: parseMins(parsed.meta.time),
        icon: cfg.icon || parsed.meta.icon || "Ж",
        color: cfg.color || parsed.meta.color || "#d9822b"
      };
      parsed.sets.forEach((set, i) => examProgress.migrate(cfg.id, i, set.qs));
    } catch { /* Optional exam file missing: don't prevent other subjects from loading. */ }
  }));
}

export function findQuestion(subjectId, uid, setIndex = 0) {
  if (subjectId?.startsWith("exam::")) {
    const set = EXDATA[subjectId.slice(6)]?.sets[setIndex];
    const q = set?.qs.find(question => question.uid === uid);
    return q ? { q, topic: set.name } : null;
  }
  for (const topic of DATA[subjectId]?.topics || []) {
    const q = topic.qs.find(question => question.uid === uid);
    if (q) return { q, topic: topic.name };
  }
  return null;
}

export function sourceOf(subjectId) {
  return subjectId?.startsWith("exam::") ? EXDATA[subjectId.slice(6)] : DATA[subjectId];
}

export function markLoaded(subjectId) {
  failed = failed.filter(cfg => cfg.id !== subjectId);
}
