# mdToPDF

A client-side React application for converting Markdown to PDF with live preview.

## Features

- **Live Markdown Preview** - Real-time rendering as you type
- **GitHub Flavored Markdown** - Tables, task lists, strikethrough, and more
- **Code Syntax Highlighting** - Beautiful code blocks with highlight.js
- **Multiple Themes** - Classic, Modern, Dark, and Sepia
- **Custom Fonts** - Roboto, Open Sans, Lato, Merriweather, Source Code Pro
- **PDF Export** - Selectable text, proper formatting
- **Local Storage** - Your work persists across sessions

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Usage

1. Enter or paste Markdown in the editor (left panel)
2. Or upload a `.md` file using the upload button
3. Choose a theme and font from the dropdowns
4. Preview updates in real-time (right panel)
5. Click "Download PDF" to export

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-highlight** - Code highlighting
- **@react-pdf/renderer** - PDF generation
- **highlight.js** - Syntax highlighting styles

## Project Structure

```
src/
├── components/
│   ├── Editor.jsx        # Markdown input
│   ├── Preview.jsx       # Live preview
│   ├── ThemeSelector.jsx # Theme/font selection
│   ├── DownloadButton.jsx # PDF export
│   └── MarkdownToPdf.jsx # PDF renderer
├── styles/
│   └── print.css         # Print-specific styles
├── App.jsx               # Main component
└── main.jsx              # Entry point
```

## License

MIT