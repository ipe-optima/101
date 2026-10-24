# Practice Hub

```
practice-hub/
├── index.html            ← the app (home screen, subject pages, stats)
├── questions/
│   └── chemistry.md      ← one markdown file per subject
└── README.md
```

## Run it

Browsers block `fetch()` on files opened by double-click, so serve the folder:

```
cd practice-hub
python3 -m http.server
```

then open http://localhost:8000. (It also works on any static host: GitHub Pages, Netlify, etc.)
If you do double-click `index.html`, a banner lets you pick the `.md` files by hand.

## Add a subject

1. Create `questions/physics.md` (copy the format below).
2. In `index.html`, add one line to `SUBJECTS`:

```js
const SUBJECTS = [
  { id: "chemistry", file: "questions/chemistry.md" },
  { id: "physics",   file: "questions/physics.md" },
];
```

Keep each `id` unique and never rename it later, because saved progress is stored under it.
Optional overrides per subject: `title`, `icon`, `color`.

## Add questions to an existing subject

Open its `.md` file and append a `###` block under the right `##` topic (or add a new `##` topic).
Question IDs must be unique within the file; progress is stored per ID.

## Markdown format

```
---
title: General Chemistry
code: CHE 0531 1101G
description: Past questions.
icon: ⚗️
color: #3b5bdb
---

## Topic name
desc: One-line description shown under the topic title.

### A-1(a) | Final 2025 | 3
Question text here.

#### Answer
Short answer.

#### Explanation
Worked explanation.

### A-3(b)-OR | Final 2025 | 2 | or
Add `| or` as the 4th field to show an "OR option" tag.
```

Supported inside question / answer / explanation:

| Syntax | Result |
|---|---|
| `**bold**`, `*italic*`, `` `code` `` | formatting |
| `- item`, `1. item`, `(i) item` | lists (indent 4 spaces for nested) |
| `\| a \| b \|` table with `\|---\|---\|` row | table |
| `:::final` … `:::` | green highlighted final answer |
| `:::eq` … `:::` | monospace equation box (one line per row) |
| `##### Heading` | small heading inside an answer |
| `<sub>`, `<sup>`, Unicode (₂ ² ⇌ →) | chemical/maths notation |
| `<svg>…</svg>` on its own lines | diagrams |

## Progress storage

"Got it" / "Review later" marks are saved in the browser's `localStorage` (key `practice_hub_v1`),
per subject and question ID, so refreshing keeps them. The home screen shows overall stats;
each subject page shows its own. Progress is per browser and device.
