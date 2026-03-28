# Plan: Styling and Themes

## Date: 2026-03-29

## Objective
Create CSS styles for all components, theme presets, and print-specific rules for PDF generation.

## Files Location
- `src/styles/themes.css`
- `src/styles/app.css`

## Theme Definitions

### 1. Classic Theme
```css
.theme-classic {
  --bg-color: #ffffff;
  --text-color: #333333;
  --heading-color: #222222;
  --code-bg: #f5f5f5;
  --link-color: #0066cc;
}
```

### 2. Modern Theme
```css
.theme-modern {
  --bg-color: #fafafa;
  --text-color: #2d2d2d;
  --heading-color: #1a1a1a;
  --code-bg: #e8e8e8;
  --link-color: #2563eb;
}
```

### 3. Dark Theme
```css
.theme-dark {
  --bg-color: #1e1e1e;
  --text-color: #e0e0e0;
  --heading-color: #ffffff;
  --code-bg: #2d2d2d;
  --link-color: #60a5fa;
}
```

### 4. Sepia Theme
```css
.theme-sepia {
  --bg-color: #f4ecd8;
  --text-color: #5b4636;
  --heading-color: #443322;
  --code-bg: #e8dcc8;
  --link-color: #8b5a2b;
}
```

## Global Styles

### Markdown Elements
- Headings (h1-h6)
- Paragraphs and text
- Lists (ordered, unordered)
- Code blocks and inline code
- Blockquotes
- Links
- Images
- Tables
- Horizontal rules

### Print Styles
```css
@media print {
  .page-break {
    page-break-before: always;
  }
  
  .no-print {
    display: none;
  }
  
  /* Ensure code highlighting prints */
  .hljs {
    color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}
```

## Split-Pane Layout
```css
.app-container {
  display: flex;
  height: 100vh;
}

.editor-pane {
  flex: 1;
  overflow: auto;
}

.preview-pane {
  flex: 1;
  overflow: auto;
}

.divider {
  width: 2px;
  background: #ccc;
}
```

## Acceptance Criteria
- [ ] All themes render distinctly
- [ ] Markdown elements styled consistently
- [ ] Print styles apply correctly for PDF
- [ ] Split-pane layout responsive
- [ ] Code highlighting styles complete

## Estimated Time
1-2 hours