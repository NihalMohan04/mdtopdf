import { useState, useEffect } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { ThemeSelector } from './components/ThemeSelector';
import { DownloadButton } from './components/DownloadButton';
import './App.css';

const STORAGE_KEY_CONTENT = 'mdtopdf-content';
const STORAGE_KEY_THEME = 'mdtopdf-theme';
const STORAGE_KEY_FONT = 'mdtopdf-font';

const DEFAULT_CONTENT = `# Welcome to mdToPDF

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
| PDF Export | Done |
`;

function App() {
  const [markdown, setMarkdown] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_CONTENT) || DEFAULT_CONTENT;
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_THEME) || 'classic';
  });
  const [font, setFont] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_FONT) || 'Inter';
  });
  const [activeTab, setActiveTab] = useState('editor');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CONTENT, markdown);
  }, [markdown]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_FONT, font);
  }, [font]);

  return (
    <div className={`app theme-${theme}`}>
      <header className="app-header">
        <h1>mdToPDF</h1>
        <div className="header-controls">
          <DownloadButton content={markdown} />
          <ThemeSelector
            currentTheme={theme}
            currentFont={font}
            onThemeChange={setTheme}
            onFontChange={setFont}
          />
        </div>
      </header>
      <nav className="mobile-tab-bar">
        <button
          className={`tab-button ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          Write
        </button>
        <button
          className={`tab-button ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </nav>
      <div className="container">
        <div className={`pane editor-pane ${activeTab === 'editor' ? 'active' : ''}`}>
          <Editor content={markdown} onContentChange={setMarkdown} />
        </div>
        <div className={`pane preview-pane ${activeTab === 'preview' ? 'active' : ''}`}>
          <Preview content={markdown} style={{ fontFamily: font }} />
        </div>
      </div>
    </div>
  );
}

export default App;