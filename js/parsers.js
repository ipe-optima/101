import { md } from "./markdown.js";

// An exam label (e.g. "A-3") is a DISPLAY label, not an identifier.
// Hash its question text and topic, so reused labels cannot share progress.
// Unchanged questions also keep their identity when other questions are reordered.
function hashText(text) {
  let h1 = 2166136261, h2 = 2166136261;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = Math.imul(h2 ^ (c + 103), 16777619) >>> 0;
  }
  return h1.toString(36) + "-" + h2.toString(36);
}

function finalize(groups, groupField) {
  const used = new Set();
  for (const group of groups) {
    for (const q of group.qs) {
      const raw = q.q.join("\n").replace(/\s+/g, " ").trim();
      const base = "q-" + hashText([group[groupField], q.id, q.src, raw].join("\u001f"));
      let uid = base, n = 2;
      while (used.has(uid)) uid = base + "-" + n++;
      used.add(uid);
      q.uid = uid;
      q.q = md(q.q.join("\n"));
      q.ans = md(q.ans.join("\n"));
      q.exp = md(q.exp.join("\n"));
    }
  }
}

function parseMeta(lines) {
  const meta = {};
  let index = 0;
  if (lines[0]?.trim() === "---") {
    index = 1;
    while (index < lines.length && lines[index].trim() !== "---") {
      const match = lines[index].match(/^(\w+)\s*:\s*(.*)$/);
      if (match) meta[match[1].toLowerCase()] = match[2].trim();
      index++;
    }
    if (index < lines.length) index++;
  }
  return { meta, index };
}

export function parseSubject(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  const { meta, index } = parseMeta(lines);
  const topics = [];
  let topic = null, q = null, section = "q";
  for (let i = index; i < lines.length; i++) {
    const line = lines[i];
    if (/^## /.test(line)) {
      topic = { name: line.slice(3).trim(), desc: "", qs: [] };
      topics.push(topic); q = null; continue;
    }
    if (/^### /.test(line)) {
      if (!topic) { topic = { name: "General", desc: "", qs: [] }; topics.push(topic); }
      const parts = line.slice(4).split("|").map(x => x.trim());
      q = { id: parts[0], src: parts[1] || "", marks: parts[2] || "", or: /\bor\b/i.test(parts[3] || ""), q: [], ans: [], exp: [] };
      topic.qs.push(q); section = "q"; continue;
    }
    if (q && /^#### Answer\s*$/i.test(line)) { section = "ans"; continue; }
    if (q && /^#### Explanation\s*$/i.test(line)) { section = "exp"; continue; }
    if (q) q[section].push(line);
    else if (topic && /^desc\s*:/i.test(line)) topic.desc = line.replace(/^desc\s*:\s*/i, "");
  }
  finalize(topics, "name");
  return { meta, topics };
}

export function parseExam(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  const { meta, index } = parseMeta(lines);
  const sets = [];
  let set = null, q = null, section = "q";
  for (let i = index; i < lines.length; i++) {
    const line = lines[i];
    if (/^# /.test(line)) {
      set = { name: line.slice(2).trim(), qs: [] };
      sets.push(set); q = null; continue;
    }
    if (/^### /.test(line)) {
      if (!set) { set = { name: "Set", qs: [] }; sets.push(set); }
      const parts = line.slice(4).split("|").map(x => x.trim());
      q = { id: parts[0], src: parts[1] || "", marks: parts[2] || "", q: [], ans: [], exp: [] };
      set.qs.push(q); section = "q"; continue;
    }
    if (q && /^#### Answer\s*$/i.test(line)) { section = "ans"; continue; }
    if (q && /^#### Explanation\s*$/i.test(line)) { section = "exp"; continue; }
    if (q) q[section].push(line);
  }
  finalize(sets, "name");
  return { meta, sets };
}

export function parseMins(value) {
  let total = 0, found = false;
  String(value || "").replace(/([\d.]+)\s*(h[a-z]*|m[a-z]*)?/gi, (_, n, unit) => {
    found = true;
    total += /^h/i.test(unit || "") ? Number(n) * 60 : Number(n);
  });
  return found ? total : 60;
}
