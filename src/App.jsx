import { useState } from 'react';
import { Editor } from './components/Editor';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="app">
      <h1>mdToPDF</h1>
      <Editor content={markdown} onContentChange={setMarkdown} />
    </div>
  );
}

export default App;