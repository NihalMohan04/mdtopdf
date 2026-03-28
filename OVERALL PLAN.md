# Plan: Markdown-to-PDF Web App on GitHub Pages

## 1. Overview

A client-side React app that:
- Accepts Markdown via **paste** or **.md file upload**.
- Shows a **live side-by-side preview** (editor ↔ rendered view).
- Supports **Basic Markdown, GFM (tables, task lists, etc.), code highlighting, images**.
- Lets the user choose a **theme preset** and an additional **font family**.
- Generates a **well-formatted PDF** matching the preview and downloads it.

Hosted as a static site on **GitHub Pages**.

---

## 2. Tech Stack

| Area                 | Choice                                                    | Reason                                                                      |
|----------------------|-----------------------------------------------------------|-----------------------------------------------------------------------------|
| UI Framework         | **React** (Vite)                                          | Fast dev, great ecosystem; Vite gives a lean build.                         |
| Markdown Rendering   | `react-markdown` + `remark-gfm` + `rehype-highlight`       | Safe rendering, GFM support, syntax highlighting.                          |
| Code Highlighting    | `highlight.js` (via `rehype-highlight`)                   | Popular, multiple themes.                                                   |
| PDF Generation       | `html2pdf.js`                                             | Converts the live preview HTML to PDF; consistent styling.                  |
| Styling              | CSS modules (or plain CSS) + CSS variables                | Simple theming and font switching.                                          |
| Fonts                | Google Fonts (optional)                                   | Easy font selection.                                                         |
| Deployment           | `gh-pages` package or GitHub Actions                      | One-click deploy to GitHub Pages.                                           |

---

## 3. Key Features & Flow

### 3.1 Input Methods
- **Textarea** for pasting/typing Markdown.
- **File upload** (`<input type="file" accept=".md">`) read via `FileReader`.

### 3.2 Live Preview
- Split-pane layout: editor on left, rendered HTML on right.
- Uses `react-markdown` with:
  - `remark-gfm` for tables, strikethrough, task lists.
  - `rehype-highlight` for code block syntax highlighting.
- Images are rendered directly; `react-markdown` handles standard image syntax.

### 3.3 Theme & Font Selection
- **Theme presets** (e.g., Classic, Modern, Dark) defined as CSS classes.
- **Font selector** loads a chosen Google Font and updates CSS variable.
- Both affect the preview and consequently the PDF.

### 3.4 PDF Generation
- On “Download PDF” click:
  1. Call `html2pdf.js` on the preview container.
  2. Configure margins (e.g., `1in`), page size (`a4`), filename.
  3. Trigger download.

### 3.5 Persistence (optional)
- Save Markdown content to `localStorage` so users can resume.

---

## 4. Directory Structure

```
mdToPDF/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Editor.jsx
│  │  ├─ Preview.jsx
│  │  ├─ ThemeSelector.jsx
│  │  └─ DownloadButton.jsx
│  ├─ styles/
│  │  ├─ themes.css
│  │  └─ app.css
│  ├─ App.jsx
│  └─ main.jsx
├─ vite.config.js
├─ package.json
└─ README.md
```

---

## 5. Implementation Steps

1. **Scaffold project**
   ```bash
   npm create vite@latest mdToPDF -- --template react
   cd mdToPDF && npm install
   ```

2. **Install dependencies**
   ```bash
   npm install react-markdown remark-gfm rehype-highlight html2pdf.js highlight.js
   ```

3. **Create components**
   - `Editor.jsx` – textarea & file upload, passes content to parent.
   - `Preview.jsx` – wraps `react-markdown` with plugins.
   - `ThemeSelector.jsx` – dropdown for theme & font.
   - `DownloadButton.jsx` – calls `html2pdf.js`.

4. **Add styling**
   - CSS variables for theme colors, fonts, spacing.
   - Styles for Markdown elements (headings, tables, code blocks, etc.).
   - Print-specific rules for better PDF pagination (`@media print`).

5. **Implement PDF generation**
   ```js
   import html2pdf from 'html2pdf.js';

   const handleDownload = () => {
     const element = document.getElementById('preview');
     const opt = {
       margin: 1,
       filename: 'document.pdf',
       image: { type: 'jpeg', quality: 0.98 },
       html2canvas: { scale: 2 },
       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
     };
     html2pdf().set(opt).from(element).save();
   };
   ```

6. **Test locally**
   ```bash
   npm run dev
   ```
   - Verify live preview, themes, fonts, file upload, PDF download.

7. **Configure for GitHub Pages**
   - Set `base: '/repo-name/'` in `vite.config.js` (if not using custom domain).
   - Add `"homepage": "https://<username>.github.io/<repo-name>"` to `package.json`.
   - Add deploy script:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     ```
   - Install `gh-pages`:
     ```bash
     npm install gh-pages --save-dev
     ```

8. **Deploy**
   ```bash
   npm run deploy
   ```
   - Alternatively, set up a GitHub Actions workflow for automatic deployment on push to `main`.

---

## 6. Risks & Mitigations

| Risk                                              | Mitigation                                                                 |
|---------------------------------------------------|----------------------------------------------------------------------------|
| Complex layouts break PDF pagination.            | Use `page-break-*` CSS properties; tune `html2pdf` options.              |
| Images not loaded when PDF generated.            | Wait for `onload` events; show spinner until all images are ready.        |
| Large files may crash browser.                   | Limit file size or warn user; modern browsers handle reasonably large texts. |
| Code highlighting not included in PDF.           | `rehype-highlight` adds `<span>` styles that are captured by `html2pdf.js`. |

---

## 7. Future Enhancements (optional)

- Add more themes or allow custom CSS.
- Support for mermaid diagrams or math syntax (KaTeX).
- Export options (e.g., page size, orientation).
- Offline capability (service worker).

---

## 8. Next Steps

1. **Initialize the project** in this folder.
2. **Set up the component structure** as outlined.
3. **Implement core features** incrementally (editor → preview → PDF).
4. **Style and theme** for readability and aesthetics.
5. **Test** across browsers.
6. **Deploy** to GitHub Pages.

Let me know when you're ready to begin implementation.