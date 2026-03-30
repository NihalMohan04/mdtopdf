# mdToPDF

Convert Markdown to PDF directly in the browser with a live preview.

[![Demo](https://github.com/NihalMohan04/mdtopdf/raw/main/assets/demo.gif)](https://nihalmohan04.github.io/mdtopdf)

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features
- Live Markdown preview
- GitHub‑flavored Markdown (tables, task lists, strikethrough, etc.)
- Syntax‑highlighted code blocks
- Four built‑in visual themes + custom CSS variables
- Runtime font selector (Inter, Geist, Merriweather, Lora, JetBrains Mono, Fira Code)
- PDF export with selectable text (via `@react-pdf/renderer`)
- Persistence via `localStorage`

## Demo
Try the app live: https://nihalmohan04.github.io/mdtopdf

## Getting Started
```bash
# clone the repo
git clone https://github.com/NihalMohan04/mdtopdf.git
cd mdtopdf

# install dependencies
npm ci

# start dev server (http://localhost:5173)
npm run dev
```

## Usage
1. Type or paste Markdown in the editor (left pane).  
2. Choose a theme and font from the dropdowns.  
3. The preview updates instantly (right pane).  
4. Click **Download PDF** to generate a printable PDF.

## Project Structure
```
src/
├─ components/
│  ├─ Editor.jsx          # markdown textarea
│  ├─ Preview.jsx         # rendered markdown
│  ├─ ThemeSelector.jsx   # theme & font pickers
│  ├─ DownloadButton.jsx  # PDF export button
│  └─ MarkdownToPdf.jsx   # PDF rendering logic
├─ styles/
│  └─ print.css           # print‑specific CSS
├─ App.jsx                 # root component
└─ main.jsx                # entry point
```

## Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish to GitHub Pages (`gh-pages` branch) |

## Contributing
Issues and pull requests are welcome. Please follow the existing code style and run `npm run lint` before submitting.

## License
MIT © 2024 Nihal Mohan