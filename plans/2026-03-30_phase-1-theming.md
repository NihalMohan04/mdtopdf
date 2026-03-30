# Phase 1: Foundation & Theming Sub-Plan

## Objective
Establish a modern design foundation by updating the global color palettes, typography variables, and setting up smooth theme transitions.

## Tasks & Steps

1.  **Refine Global CSS Variables (`src/index.css`)**
    *   Review and update the color palettes for all themes (`theme-classic`, `theme-modern`, `theme-dark`, `theme-sepia`).
    *   Ensure colors have good contrast and a modern, softer feel.
    *   Add variables for softer box-shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`).
    *   Add variables for generic transition timings (`--transition-fast`, `--transition-normal`).

2.  **Define Typography Base (`src/index.css`)**
    *   Introduce base CSS variables for typography scales (e.g., `--font-size-base`, `--font-size-lg`, `--font-weight-regular`, `--font-weight-bold`).

3.  **Update Font Selections (`src/components/ThemeSelector.jsx`)**
    *   Replace generic fonts with modern curated web fonts.
    *   **Sans-serif:** Inter, Geist
    *   **Serif:** Merriweather, Lora
    *   **Monospace:** JetBrains Mono, Fira Code
    *   Update the `fonts` array state to reflect these choices.
    *   Modify the `useEffect` that loads Google Fonts to fetch these specific font families and weights (400, 600).

4.  **Implement Smooth Theme Switching (`src/index.css`)**
    *   Apply a global transition to the `:root`, `body`, and generic background/text color elements.
    *   Example: `transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;`
    *   Test theme switching in the browser to ensure no jarring color flashes occur.