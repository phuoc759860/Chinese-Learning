# HSK3 书写练习平台 · HSK3 Writing Practice Platform

A web-based practice platform for the HSK Level 3 **writing section** (第71–80题).
Built from 20 real HSK3 past papers (HSK3-ĐỀ 1 … HSK3-ĐỀ 20).

## 功能 Features

- **20 sets of real HSK3 writing tests** covering both writing parts:
  - **Part 1 · 排列顺序 (Q71–75):** reorder the given words into a correct sentence.
  - **Part 2 · 汉字填空 (Q76–80):** fill in the missing character using the pinyin hint.
- **Vietnamese explanations** (💡 Giải thích) shown for every answer — explaining the sentence
  structure, grammar pattern, and the meaning of each character in context.
- Instant check, answer reveal, per-question scoring.
- Progress saved locally in your browser (localStorage), so you can resume anytime.
- Fully static — no server needed. Deploy on GitHub Pages or open `index.html` directly.

## 使用方法 How to use

1. Open `index.html` in any modern browser, **or**
2. Deploy this repository to GitHub Pages (Settings → Pages → deploy from `main`).

## 文件结构 Files

| File         | Description                                   |
| ------------ | --------------------------------------------- |
| `index.html` | App shell and UI logic                        |
| `styles.css` | Styling (red & gold Chinese theme)            |
| `data.js`    | All 20 exams × 10 writing questions + answers + explanations |

## 来源 Source

Questions and official answers are extracted from 20 HSK3 past papers located in the
`HSK3/` folder (exam papers, answer keys, listening material). Only the writing
section (第71–80题) of each paper is included in this platform.

## 技术栈 Tech

Pure HTML / CSS / JavaScript — no frameworks, no build step.
