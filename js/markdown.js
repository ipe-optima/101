import { esc } from "./utils.js";

// This is the original project's lightweight markdown dialect, not generic Markdown.
// Raw SVG/HTML blocks remain supported for diagrams in existing questions.
export function inline(value) {
  return esc(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/(^|[^*\w])\*([^*\n]+)\*(?!\*)/g, "$1<i>$2</i>");
}

const LIST_RE = /^(\s*)([-*]|\d+\.|\(?(?:iv|v|i{1,3})\))\s+(.*)$/;
const RAW_RE = /^<(svg|table|div|p|ul|ol|h[1-6]|figure|details)\b/i;

function renderList(items) {
  let index = 0;
  function build(indent) {
    const first = items[index];
    const ordered = !/^[-*]$/.test(first.marker);
    const roman = /^\(?(iv|v|i{1,3})\)$/.test(first.marker);
    const tag = ordered ? "ol" : "ul";
    let html = "";
    while (index < items.length && items[index].indent >= indent) {
      const item = items[index++];
      html += "<li>" + inline(item.text);
      if (index < items.length && items[index].indent > item.indent) html += build(items[index].indent);
      html += "</li>";
    }
    return `<${tag}${roman ? ' type="i"' : ""}>${html}</${tag}>`;
  }
  return build(items[0].indent);
}

export function md(source) {
  const lines = String(source ?? "").replace(/\r/g, "").split("\n");
  const output = [];
  let i = 0;
  const blank = line => !line.trim();
  const blockStart = line => line.startsWith(":::") || RAW_RE.test(line)
    || line.startsWith("|") || LIST_RE.test(line) || /^##### /.test(line);

  while (i < lines.length) {
    const line = lines[i];
    if (blank(line)) { i++; continue; }
    if (line.startsWith(":::")) {
      const name = line.slice(3).trim();
      const body = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") body.push(lines[i++]);
      if (i < lines.length) i++;
      if (name === "eq" || name === "final") {
        output.push(`<div class="${name}">${body.map(inline).join("<br>")}</div>`);
      } else {
        output.push(`<div class="${esc(name)}">${md(body.join("\n"))}</div>`);
      }
      continue;
    }
    if (RAW_RE.test(line)) {
      const body = [];
      if (/^<svg/i.test(line)) {
        while (i < lines.length) { body.push(lines[i]); if (/<\/svg>/i.test(lines[i++])) break; }
      } else {
        while (i < lines.length && !blank(lines[i])) body.push(lines[i++]);
      }
      output.push(body.join("\n"));
      continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++].trim());
      const cells = row => row.replace(/^\||\|$/g, "").split("|").map(cell => cell.trim());
      const hasSep = rows[1] && /^\|?[\s:|-]+\|?$/.test(rows[1]);
      let html = "<table><tr>" + cells(rows[0]).map(cell => `<th>${inline(cell)}</th>`).join("") + "</tr>";
      for (const row of rows.slice(hasSep ? 2 : 1)) {
        html += "<tr>" + cells(row).map(cell => `<td>${inline(cell)}</td>`).join("") + "</tr>";
      }
      output.push(html + "</table>");
      continue;
    }
    if (/^##### /.test(line)) {
      output.push("<h4>" + inline(line.slice(6)) + "</h4>"); i++; continue;
    }
    if (LIST_RE.test(line)) {
      const items = [];
      while (i < lines.length && !blank(lines[i])) {
        const match = lines[i].match(LIST_RE);
        if (match && !RAW_RE.test(lines[i])) {
          items.push({ indent: match[1].replace(/\t/g, "  ").length, marker: match[2], text: match[3] });
        } else if (/^\s+\S/.test(lines[i]) && items.length) {
          items[items.length - 1].text += " " + lines[i].trim();
        } else break;
        i++;
      }
      output.push(renderList(items));
      continue;
    }
    const body = [];
    while (i < lines.length && !blank(lines[i]) && (!body.length || !blockStart(lines[i]))) body.push(lines[i++]);
    output.push("<p>" + inline(body.join(" ")) + "</p>");
  }
  return output.join("\n");
}
