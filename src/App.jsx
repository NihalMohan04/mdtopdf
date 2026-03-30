import { useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { ThemeSelector } from './components/ThemeSelector';
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
  const [theme, setTheme] = useState('classic');
  const [font, setFont] = useState('Roboto');

  return (
    <div className={`app theme-${theme}`}>
      <header className="app-header">
        <h1>mdToPDF</h1>
        <ThemeSelector
          currentTheme={theme}
          currentFont={font}
          onThemeChange={setTheme}
          onFontChange={setFont}
        />
      </header>
      <div className="container">
        <Editor content={markdown} onContentChange={setMarkdown} />
        <Preview content={markdown} style={{ fontFamily: font }} />
      </div>
    </div>
  );
}

export default App;