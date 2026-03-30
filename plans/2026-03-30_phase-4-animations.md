# Phase 4: Animation Polish Sub-Plan

## Objective
Elevate the user experience by adding subtle micro-interactions, loading states, and entry animations that make the application feel responsive and "alive".

## Tasks & Steps

1.  **Implement Micro-interactions (Global & Component CSS)**
    *   Add `transition: all 0.2s ease-in-out` (or similar, utilizing CSS variables from Phase 1) to all interactive elements: buttons, select dropdowns, file upload inputs, and links.
    *   Ensure hover states for buttons include slight transforms (e.g., `transform: translateY(-1px)`) or shadow enhancements.

2.  **Add Loading State for PDF Generation (`src/components/DownloadButton.jsx` & `.css`)**
    *   When the PDF generation is in progress (the `loading` state from `PDFDownloadLink`), replace the text with a spinner or a loading message.
    *   Create a simple CSS keyframe animation (`@keyframes spin`) for a loading indicator next to the text.
    *   Ensure the button is disabled visually during generation to prevent multiple clicks.

3.  **Implement Component Entry Animations**
    *   Define a global `@keyframes fadeIn` and `@keyframes slideUp` in `index.css`.
    *   Apply these animations to the main container or individual components (Editor, Preview) when the app first loads.
    *   Example: `animation: fadeIn 0.4s ease-out forwards;`

4.  **Animate Mobile Tab Transitions (`src/App.css`)**
    *   When switching between the 'Editor' and 'Preview' tabs on mobile, add a quick fade-in effect to the incoming pane so the switch feels less abrupt.
    *   Ensure this transition does not trigger on desktop layout resizing.

5.  **Final Review & Quality Assurance**
    *   Test all interactions across all 4 themes to ensure animations are smooth and colors transition correctly.
    *   Verify mobile tab switching feels natural and fast.