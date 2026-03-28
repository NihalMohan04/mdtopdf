# Plan: Editor Component

## Date: 2026-03-29

## Objective
Create the Editor component that accepts Markdown input via text area or file upload.

## File Location
`src/components/Editor.jsx`

## Component Features

### 1. Textarea Input
- Large textarea for typing/pasting Markdown
- Controlled component with state
- Real-time change callbacks

### 2. File Upload
- File input accepting `.md` files
- FileReader API to read file contents
- Error handling for invalid files

## Props Interface
```jsx
interface EditorProps {
  content: string;
  onContentChange: (markdown: string) => void;
}
```

## Implementation Structure
```jsx
function Editor({ content, onContentChange }) {
  // File upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onContentChange(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="editor">
      <input type="file" accept=".md" onChange={handleFileUpload} />
      <textarea 
        value={content} 
        onChange={(e) => onContentChange(e.target.value)}
      />
    </div>
  );
}
```

## Acceptance Criteria
- [ ] Textarea displays current Markdown content
- [ ] Changes propagate to parent via callback
- [ ] File upload loads .md file content
- [ ] Invalid file types handled gracefully

## Estimated Time
30-45 minutes