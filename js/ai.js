import { getDefaultAI, saveDefaultAI } from "./storage.js";
import { copyText, esc, textFromHtml, toast } from "./utils.js";
import { findQuestion } from "./data.js";

const ASK_PROMPT = `You are a subject-matter expert answering an exam question. Correctness and accuracy come first; after that the most important thing is to explain in simple intuitive term. .

Before answering, use web search to verify the key facts, definitions, formulas, values, and the correct answer against authoritative sources (Wikipedia, standard textbooks, official or standards bodies, university and government sites, peer-reviewed work). Do not rely on memory alone. If sources conflict, the question is ambiguous, or the given answer looks wrong, say so explicitly instead of guessing.

Reply in this format:
1. Answer: the correct answer, stated directly.
2. Explanation: the exact reasoning or derivation, step by step, with every calculation double-checked. If options are given, state briefly why each wrong option is wrong.
3. Key concepts: only the definitions or principles needed to follow the explanation, in plain language.
4. Remember: a one-line exam takeaway.

make sure the build the intuition and step by step foundation required to answer the question, and explain the reasoning behind each step. Use simple language and avoid jargon. If a diagram or table would help, describe it in words.

Rules: Never invent facts, figures, or citations. Mark anything you could not verify as "unverified". Be concise.

Question:
{{QUESTION}}`;

export const AI_TARGETS = {
  claude: { name: "Claude", url: "https://claude.ai/new?q=" },
  chatgpt: { name: "ChatGPT", url: "https://chatgpt.com/?q=" },
  deepseek: { name: "DeepSeek", url: "https://chat.deepseek.com/?q=" }
};

let defaultAI = getDefaultAI();
if (!AI_TARGETS[defaultAI]) defaultAI = "claude";

export function askHTML() {
  return `<div class="ask"><button class="btn askgo" data-a="ask">Ask ${esc(AI_TARGETS[defaultAI].name)}</button><button class="btn askpick" data-a="askmenu" aria-label="Choose AI" aria-expanded="false" title="Choose AI">▾</button><div class="askmenu">${Object.entries(AI_TARGETS).map(([id, target]) => `<button data-a="ask" data-ai="${id}">${esc(target.name)}</button>`).join("")}</div></div>`;
}

export function selectedAI() { return defaultAI; }
export function setDefaultAI(ai) {
  if (!AI_TARGETS[ai] || ai === defaultAI) return;
  defaultAI = ai;
  saveDefaultAI(ai);
  document.querySelectorAll(".askgo").forEach(button => button.textContent = `Ask ${AI_TARGETS[ai].name}`);
}

export function buildAskPrompt(question) {
  return ASK_PROMPT.replace("{{QUESTION}}", () => textFromHtml(question.q || ""));
}

export async function askAI(subjectId, uid, ai, setIndex = 0) {
  const found = findQuestion(subjectId, uid, setIndex);
  const target = AI_TARGETS[ai];
  if (!found || !target) { toast("Couldn't find this question."); return; }
  const prompt = buildAskPrompt(found.q);
  const link = target.url + encodeURIComponent(prompt);
  if (link.length <= 7000) {
    window.open(link, "_blank", "noopener");
    return;
  }

  // Open while the click's user activation is live, before the clipboard awaits.
  window.open(target.url.split("?")[0], "_blank", "noopener");
  const copied = await copyText(prompt);
  if (copied) toast(`Prompt copied. Paste it into ${target.name}.`);
  else {
    toast("Automatic copying was blocked. Copy the prompt from the dialog.");
    window.prompt("Copy the question prompt:", prompt);
  }
}
