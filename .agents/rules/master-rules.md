# MASTER RULES — SUJAL PANJIYAR PORTFOLIO

## 1. SOURCE OF TRUTH
The actual live public website (`https://spjr1115-creator.github.io/sujal-portfolio/`) is the ONLY final source of truth.
No phase or task is complete until verified directly on the public URL after a successful GitHub Actions deployment.

## 2. DEPLOYMENT PIPELINE
- Single Authoritative Mechanism: GitHub Actions (`.github/workflows/deploy.yml`) building `./dist` and publishing via `actions/deploy-pages@v4`.
- Base Path: Always configure `base: '/sujal-portfolio/'` in `vite.config.ts`.
- Lockfile Hygiene: Ensure `package-lock.json` remains strictly synchronized with `package.json` so `npm ci` never fails in CI.
- Disallow root source deployments: Never deploy raw `src/` or uncompiled `index.html`.

## 3. STRICT PHASE WORKFLOW
Every change MUST strictly follow:
1. Plan -> 2. Implement -> 3. Typecheck (`npm run build`) -> 4. Production Test (`npm run preview`) -> 5. Local Browser Test -> 6. Git Diff Audit -> 7. Commit -> 8. Push -> 9. Wait for GitHub Actions -> 10. Live Public URL Verification -> 11. Network Check (0 404s) -> 12. Console Check (0 errors) -> 13. Mark Complete.

## 4. DESIGN & DATA INTEGRITY
- Preserved Sections: Never alter previously completed sections (Hero, Marquee, Navbar, etc.) during subsequent phases.
- Real Data Only: Never invent user counts, performance telemetry, CO2 metrics, or response time statistics unless backed by real project data.
- Responsive Testing: Test on desktop (1440px, 1024px), tablet (768px), and mobile (430px, 375px) without horizontal scrollbar or layout breaks.

## 5. COMMIT VERIFICATION FORMAT
Every phase completion report MUST include:
```text
PHASE: <name>
BUILD: PASS
PRODUCTION PREVIEW: PASS
LOCAL BROWSER: PASS
GIT COMMIT: <hash>
GITHUB MAIN: <hash>
DEPLOYED COMMIT: <hash>
GITHUB ACTIONS: PASS
LIVE WEBSITE: PASS
LIVE URL: https://spjr1115-creator.github.io/sujal-creator/
CONSOLE: 0 errors
NETWORK: 0 404s
RESPONSIVE: PASS
STATUS: COMPLETE
```
