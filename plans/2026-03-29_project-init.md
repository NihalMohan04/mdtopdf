# Plan: Project Initialization and Setup

## Date: 2026-03-29

## Objective
Initialize the mdToPDF React project with Vite and install all necessary dependencies.

## Tasks

### 1. Create Vite React Project
```bash
npm create vite@latest mdToPDF -- --template react
cd mdToPDF
npm install
```

### 2. Install Core Dependencies
```bash
npm install react-markdown remark-gfm rehype-highlight html2pdf.js highlight.js
```

### 3. Install Dev Dependencies
```bash
npm install gh-pages --save-dev
```

## Dependencies Overview

| Package | Purpose |
|---------|---------|
| `react-markdown` | Markdown rendering |
| `remark-gfm` | GitHub Flavored Markdown support |
| `rehype-highlight` | Code syntax highlighting |
| `html2pdf.js` | PDF generation |
| `highlight.js` | Syntax highlighting styles |
| `gh-pages` | GitHub Pages deployment |

## Acceptance Criteria
- [ ] Vite React project created successfully
- [ ] All dependencies installed
- [ ] Project runs with `npm run dev`
- [ ] Default Vite page visible in browser

## Estimated Time
15-20 minutes