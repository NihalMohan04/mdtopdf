# Plan: Preview Component

## Date: 2026-03-29

## Objective
Create the Preview component that renders Markdown as HTML with GFM support and syntax highlighting.

## File Location
`src/components/Preview.jsx`

## Component Features

### 1. Markdown Rendering
- Use `react-markdown` for safe HTML rendering
- Support standard Markdown syntax

### 2. GFM Support
- Tables
- Strikethrough
- Task lists
- Autolinks

### 3. Syntax Highlighting
- Code blocks highlighted via `rehype-highlight`
- Uses `highlight.js` styles

## Props Interface
```jsx
interface PreviewProps {
  content: string;
  theme: string;
  fontFamily: string;
}
```

## Implementation Structure
```jsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

function Preview({ content, theme, fontFamily }) {
  return (
    <div 
      id="preview" 
      className={`preview ${theme}`}
      style={{ fontFamily }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
```

## Acceptance Criteria
- [ ] Renders standard Markdown correctly
- [ ] Tables display properly
- [ ] Code blocks have syntax highlighting
- [ ] Task lists are interactive
- [ ] Theme and font applied correctly

## Estimated Time
45-60 minutes