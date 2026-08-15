# HSK3 书写练习平台 · HSK3 Practice Platform

A web-based practice platform for the HSK Level 3 **writing** (第71–80题) and
**reading** (第41–70题) sections, built from 20 real HSK3 past papers (HSK3-ĐỀ 1 … HSK3-ĐỀ 20).

## 功能 Features

- **20 sets of real HSK3 writing tests** covering both writing parts:
  - **Part 1 · 排列顺序 (Q71–75):** reorder the given words into a correct sentence.
  - **Part 2 · 汉字填空 (Q76–80):** fill in the missing character using the pinyin hint.
- **20 sets of real HSK3 reading tests** covering all 5 reading parts:
  - **P1/P2 (Q41–50):** match each statement with the correct sentence (6/5 options).
  - **P3/P4 (Q51–60):** choose the word that fills the blank.
  - **P5 (Q61–70):** reading comprehension with 3 choices per passage.
- **Vietnamese explanations** (💡 Giải thích) shown for every answer — explaining the sentence
  structure, grammar pattern, and the meaning of each character in context.
- Navigate freely with back/next buttons — go back to the previous question anytime.
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
| `data.js`    | All 20 exams × writing (10) + reading (30) questions with answers |

## 来源 Source

Questions and official answers are extracted from 20 HSK3 past papers located in the
`HSK3/` folder (exam papers, answer keys, listening material). Only the writing section
(第71–80题) and reading section (第41–70题) of each paper are included in this platform.

## 技术栈 Tech

Pure HTML / CSS / JavaScript — no frameworks, no build step.
