import { useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to mdToPDF

This is a **markdown** preview.

## Features

- Live preview
- GitHub Flavored Markdown
- Code highlighting

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

| Feature | Status |
|---------|--------|
| Editor | Done |
| Preview | Done |
| PDF Export | Pending |
`);

  return (
    <div className="app">
      <h1>mdToPDF</h1>
      <div className="container">
        <Editor content={markdown} onContentChange={setMarkdown} />
        <Preview content={markdown} />
      </div>
    </div>
  );
}

export default App;