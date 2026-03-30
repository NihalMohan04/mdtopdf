import { useEffect } from 'react';
import './ThemeSelector.css';

const themes = [
  { id: 'classic', name: 'Classic' },
  { id: 'modern', name: 'Modern' },
  { id: 'dark', name: 'Dark' },
  { id: 'sepia', name: 'Sepia' },
];

const fonts = [
  { family: 'Inter', category: 'sans-serif' },
  { family: 'Geist', category: 'sans-serif' },
  { family: 'Merriweather', category: 'serif' },
  { family: 'Lora', category: 'serif' },
  { family: 'JetBrains Mono', category: 'monospace' },
  { family: 'Fira Code', category: 'monospace' },
];

function ThemeSelector({ currentTheme, currentFont, onThemeChange, onFontChange }) {
  useEffect(() => {
    const fontUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600;700&family=Merriweather:wght@400;700&family=Lora:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Fira+Code:wght@400;500;600&display=swap';
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="theme-selector" role="group" aria-label="Theme and font selection">
      <div className="selector-group">
        <label htmlFor="theme-select">Theme</label>
        <select
          id="theme-select"
          value={currentTheme}
          onChange={(e) => onThemeChange(e.target.value)}
          aria-label="Select theme"
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div className="selector-group">
        <label htmlFor="font-select">Font</label>
        <select
          id="font-select"
          value={currentFont}
          onChange={(e) => onFontChange(e.target.value)}
          aria-label="Select font"
        >
          {fonts.map((f) => (
            <option key={f.family} value={f.family}>
              {f.family}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { ThemeSelector };