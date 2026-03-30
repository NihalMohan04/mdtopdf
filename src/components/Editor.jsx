import { useState } from 'react';
import './Editor.css';

function Editor({ content, onContentChange }) {
  const [error, setError] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    if (!file.name.endsWith('.md')) {
      setError('Please upload a valid .md file');
      e.target.value = '';
      return;
    }
    
    setError(null);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      onContentChange(event.target.result);
    };
    reader.onerror = () => {
      setError('Failed to read file');
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="editor" role="region" aria-label="Markdown editor">
      <div className="editor-header">
        <label className="file-upload">
          <input 
            type="file" 
            accept=".md" 
            onChange={handleFileUpload}
            aria-label="Upload Markdown file"
          />
          <span>Upload .md file</span>
        </label>
        {error && <span className="error-message" role="alert">{error}</span>}
      </div>
      <textarea
        className="editor-textarea"
        value={content}
        onChange={(e) => {
          setError(null);
          onContentChange(e.target.value);
        }}
        placeholder="Enter or paste your Markdown here..."
        aria-label="Markdown content"
      />
    </div>
  );
}

export { Editor };