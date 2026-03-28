# Plan: Theme and Font Selector

## Date: 2026-03-29

## Objective
Create the ThemeSelector component allowing users to choose theme presets and font families.

## File Location
`src/components/ThemeSelector.jsx`

## Component Features

### 1. Theme Presets
- Classic (light, traditional)
- Modern (clean, minimal)
- Dark (dark mode)
- Sepia (warm tones)

### 2. Font Family Selection
- Google Fonts integration
- Popular fonts: Roboto, Open Sans, Lato, Merriweather, etc.
- Dynamic font loading

## Props Interface
```jsx
interface ThemeSelectorProps {
  currentTheme: string;
  currentFont: string;
  onThemeChange: (theme: string) => void;
  onFontChange: (font: string) => void;
}
```

## Implementation Structure
```jsx
function ThemeSelector({ currentTheme, currentFont, onThemeChange, onFontChange }) {
  const themes = ['classic', 'modern', 'dark', 'sepia'];
  const fonts = ['Roboto', 'Open Sans', 'Lato', 'Merriweather', 'Source Code Pro'];

  const loadFont = (font) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };

  return (
    <div className="theme-selector">
      <select 
        value={currentTheme} 
        onChange={(e) => onThemeChange(e.target.value)}
      >
        {themes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <select 
        value={currentFont} 
        onChange={(e) => {
          loadFont(e.target.value);
          onFontChange(e.target.value);
        }}
      >
        {fonts.map(f => <option key={f} value={f}>{f}</option>)}
      </select>
    </div>
  );
}
```

## Acceptance Criteria
- [ ] All themes selectable and applied
- [ ] Fonts load dynamically from Google Fonts
- [ ] Selected theme/font persists to preview
- [ ] UI is intuitive and accessible

## Estimated Time
30-45 minutes