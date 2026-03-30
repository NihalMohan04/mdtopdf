# Phase 3: Component Styling Revamp Sub-Plan

## Objective
Individually polish each React component (Editor, Preview, ThemeSelector, DownloadButton) to align with modern UI standards, focusing on spacing, borders, focus states, and overall visual hierarchy.

## Tasks & Steps

1.  **Revamp Editor (`src/components/Editor.css` & `Editor.jsx`)**
    *   Update the `<textarea>` to use the new monospace font variable.
    *   Improve the focus state (use a clean outline/box-shadow with the primary theme color).
    *   Refine the "Upload .md file" button to look like a modern action button (softer border radius, better hover/active transitions).
    *   Style the custom scrollbar to be thinner and match the theme colors unobtrusively.

2.  **Revamp Preview Typography (`src/components/Preview.css`)**
    *   Adjust the typography scale (h1 through h6) to be more distinct and legible.
    *   Style `<blockquote>` to have a modern, softer background and prominent left border.
    *   Improve inline `<code>` and block `<pre>` styling (softer backgrounds, proper monospace font).
    *   Refine table styles (clean borders, striped rows on hover, distinct header backgrounds).
    *   Ensure proper line heights (`1.6` or `1.7`) for paragraph text for optimal readability.

3.  **Refine Theme & Font Selectors (`src/components/ThemeSelector.css`)**
    *   Style the native `<select>` dropdowns to look custom (add custom SVG dropdown arrow, adjust padding, set border-radius).
    *   Ensure focus rings on dropdowns are visible and styled consistently with the text area focus.
    *   Align labels and select boxes cleanly.

4.  **Enhance Download Button (`src/components/DownloadButton.css`)**
    *   Update the primary button styling (padding, typography, border-radius).
    *   Add clear `:hover`, `:active`, and `:disabled` state styles.
    *   Ensure it looks distinctly like the primary call-to-action on the page.