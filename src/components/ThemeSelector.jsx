import { useEffect } from 'react';
import './ThemeSelector.css';

const themes = [
  { id: 'classic', name: 'Classic' },
  { id: 'modern', name: 'Modern' },
  { id: 'dark', name: 'Dark' },
  { id: 'sepia', name: 'Sepia' },
];

const fonts = [
  'Roboto',
  'Open Sans',
  'Lato',
  'Merriweather',
  'Source Code Pro',
];

function ThemeSelector({ currentTheme, currentFont, onThemeChange, onFontChange }) {
  useEffect(() => {
    fonts.forEach((font) => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}:wght@400;600&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="theme-selector">
      <div className="selector-group">
        <label htmlFor="theme-select">Theme</label>
        <select
          id="theme-select"
          value={currentTheme}
          onChange={(e) => onThemeChange(e.target.value)}
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
        >
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { ThemeSelector };