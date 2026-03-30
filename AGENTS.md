# AGENTS.md - AI Assistant Context

## Project Overview

**mdToPDF** is a client-side React application that converts Markdown to PDF with live preview. It's hosted on GitHub Pages as a static site.

### Tech Stack
- **Framework:** React with Vite
- **Markdown:** `react-markdown` + `remark-gfm` + `rehype-highlight`
- **PDF:** `html2pdf.js`
- **Styling:** CSS modules with CSS variables
- **Testing:** Vitest
- **Deployment:** GitHub Pages (`gh-pages`)

---

## Development Workflow

### Before Starting Work
1. Read the relevant plan in `/plans/` directory
2. Check which plans are already completed (look for completed files)
3. Ask the user which plan they want to work on if not specified

### During Development
1. **Break down the plan into sub-tasks** - Create granular steps before starting
2. Mark sub-tasks as in-progress/completed as you work
3. Follow the code conventions below
4. Run lint/typecheck after making changes (see commands below)

### After Completing Work
1. Run validation commands (lint, typecheck, tests)
2. Summarize what was done
3. Suggest the next plan if applicable

---

## Code Conventions

### Style Guidelines
- **Comments:** MINIMAL. Write self-documenting code. Only add comments where logic is non-obvious or complex.
- **Naming:** Use descriptive names. Prefer `handleDownload` over `onclick`.
- **Exports:** Prefer named exports over default exports.
- **Components:** Functional components with hooks. No class components.

### File Structure
```
src/
├── components/     # Reusable UI components
├── styles/         # CSS files and theme definitions
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

### Component Template
```jsx
import { useState } from 'react';
import './ComponentName.css';

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);
  
  const handleSomething = () => {
    
  };
  
  return (
    <div className="component-name">
      
    </div>
  );
}

export { ComponentName };
```

### CSS Conventions
- Use CSS variables for theming
- Class names: lowercase with hyphens (kebab-case)
- Theme classes prefixed with `theme-` (e.g., `theme-dark`)
- Use `@media print` for PDF-specific styles

---

## Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build locally
```

### Validation (RUN AFTER CHANGES)
```bash
npm run lint         # Run ESLint
npm run typecheck    # Type checking (if TypeScript is added)
npm run test         # Run Vitest tests
npm run test:watch   # Run tests in watch mode
```

### Deployment
```bash
npm run deploy       # Deploy to GitHub Pages
```

---

## Plan Execution Protocol

**IMPORTANT: Always create a structured task list before executing any plan.**

### When User Requests Work on a Plan:
1. **Read the plan file** from `/plans/YYYY-MM-DD_brief.md`
2. **Create a todo list using TodoWrite tool** - MANDATORY step
   - Break the plan into granular, actionable sub-tasks
   - Each sub-task should be completable independently
   - Track status: pending → in_progress → completed (or cancelled if problematic)
3. **Show the sub-tasks** to the user before starting
4. **Execute step by step**, marking progress with TodoWrite:
   - Set task to `in_progress` when starting
   - Set task to `completed` when done
   - Set task to `cancelled` if blocked/problematic
5. **Verify each step** with appropriate commands
6. **Summarize completion** and suggest next plan

### Why This Matters:
- Provides visibility into what's pending, in-progress, completed, or problematic
- Helps track progress across complex multi-step plans
- Allows resuming work if interrupted
- Makes debugging easier when tasks fail

### Example Sub-task Breakdown
Given a plan "Editor Component":
1. Create `Editor.jsx` file
2. Add textarea with controlled state
3. Implement file upload handler
4. Add error handling for invalid files
5. Style the component
6. Test in browser
7. Run lint/typecheck

---

## Testing Requirements

### Test File Location
`src/components/__tests__/` or co-located with components

### Test Template (Vitest + React Testing Library)
```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Editor } from '../Editor';

describe('Editor', () => {
  it('renders textarea', () => {
    render(<Editor content="" onContentChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

---

## Current Status

Check the `/plans/` directory to see all available plans. Plans are executed in order:

| Order | Plan | Status |
|-------|------|--------|
| 1 | `2026-03-29_project-init.md` | Done |
| 2 | `2026-03-29_editor-component.md` | Done |
| 3 | `2026-03-29_preview-component.md` | Done |
| 4 | `2026-03-29_theme-selector.md` | Done |
| 5 | `2026-03-29_pdf-download.md` | Done |
| 6 | `2026-03-29_styling-themes.md` | Done |
| 7 | `2026-03-29_main-app.md` | Done |
| 8 | `2026-03-29_deployment.md` | Done |
| 9 | `2026-03-29_testing.md` | Skipped (V1) |
| 10 | `2026-03-29_polish-documentation.md` | Done |

---

## Important Notes

1. **Always validate** after making changes (lint, typecheck, test)
2. **Minimal comments** - code should be self-explanatory
3. **Ask user** which plan to work on if not specified
4. **Break into sub-tasks** before executing a plan
5. **Mark progress** using the TodoWrite tool when working on plans
6. **No auto-commits** - only commit when user explicitly asks