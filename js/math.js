export function renderMath() {
  if (typeof window.renderMathInElement !== "function") return;
  const root = document.getElementById("app");
  if (!root) return;
  try {
    window.renderMathInElement(root, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  } catch (err) { console.warn("Couldn't render math:", err); }
}
window.addEventListener("load", renderMath);
