# Plan: GitHub Pages Deployment

## Date: 2026-03-29

## Objective
Configure and deploy the application to GitHub Pages.

## Configuration Steps

### 1. Update Vite Config
**File: `vite.config.js`**
```js
export default defineConfig({
  base: '/mdToPDF/', // Replace with actual repo name
  plugins: [react()],
});
```

### 2. Update Package.json
```json
{
  "homepage": "https://<username>.github.io/<repo-name>",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Deploy Command
```bash
npm run deploy
```

### 4. Alternative: GitHub Actions
**File: `.github/workflows/deploy.yml`**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Post-Deployment Checklist
- [ ] Site loads at GitHub Pages URL
- [ ] All assets (CSS, JS) load correctly
- [ ] Markdown rendering works
- [ ] PDF download works
- [ ] Theme switching works
- [ ] Font changes apply

## Troubleshooting

### Issue: 404 on assets
- Ensure `base` in `vite.config.js` matches repo name

### Issue: CSS not loading
- Check paths in built `dist/index.html`

### Issue: PDF not downloading
- Verify `html2pdf.js` works in production build

## Estimated Time
30-45 minutes