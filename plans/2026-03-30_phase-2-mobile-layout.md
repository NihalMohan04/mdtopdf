# Phase 2: Mobile Tabbed Navigation Sub-Plan

## Objective
Replace the stacked layout on mobile devices with a user-friendly tabbed interface, allowing users to switch effortlessly between the Editor and the Preview without extensive scrolling.

## Tasks & Steps

1.  **Introduce Layout State (`src/App.jsx`)**
    *   Add a new state variable: `const [activeTab, setActiveTab] = useState('editor');` (values can be 'editor' or 'preview').

2.  **Create Mobile Tab Bar UI (`src/App.jsx`)**
    *   Render a tab bar navigation section below the main header, but only visible on mobile (controlled via CSS).
    *   The tab bar should contain two buttons: "Write" and "Preview".
    *   Bind the buttons' `onClick` handlers to `setActiveTab`.

3.  **Style the Tab Bar (`src/App.css`)**
    *   Use media queries (`@media (max-width: 768px)`) to define the mobile layout.
    *   Style the tab container (flex, sticky or static, background matching header).
    *   Style tab buttons with active states (e.g., bold text, primary color bottom border).

4.  **Implement View Switching Logic (`src/App.jsx` & `src/App.css`)**
    *   Wrap both the `<Editor />` and `<Preview />` components in a container.
    *   Apply conditional CSS classes based on `activeTab` to display the active component and hide the inactive one.
    *   *Important:* Ensure that on desktop sizes (`> 768px`), the tab logic is ignored, the tab bar is hidden, and both panes are displayed side-by-side.

5.  **Refine Desktop Split-Pane Layout (Optional but recommended)**
    *   Ensure the `flex: 1` properties in `App.css` for `.container > *` provide a clean 50/50 split on desktop.
    *   Add a subtle vertical border or spacing between the Editor and Preview on desktop.