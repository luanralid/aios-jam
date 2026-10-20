# AGENTS.md

Conventions for coding agents working in this repository.

## Project

Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui (Radix). Single-page app with `HashRouter`, deployed to GitHub Pages under `/aios-jam/` on every push to `main`.

## Commands

- `npm run dev` — dev server
- `npm run check` — typecheck + lint + build. Run it before every commit; it must pass.
- `npm run format` — Prettier (no semicolons, double quotes, Tailwind class sorting)

## Where things live

- `src/routes.ts` — the route registry. Every page is registered here.
- `src/pages/` — one file (or folder) per page. `_template.tsx` is the starting point for new pages.
- `src/components/ui/` — shadcn/ui components. Prefer composing them over editing them; add new ones with `npx shadcn@latest add <name>`.
- `src/components/layout/` — `Container`, `Stack`, `Section`, `PageHeader`, `EmptyState`.
- `src/components/shell/` — header, logo, theme toggle.
- `src/index.css` — all design tokens (light on `:root`/`.light`, dark on `.dark`).
- `src/pages/design-system/` — the living showcase. When you add a component or token, add a specimen there too.

## Adding a page

1. Copy `src/pages/_template.tsx` to `src/pages/<name>.tsx`; rename the exported component to `<Name>Page` (named export).
2. Add `{ path: "/<name>", Component: <Name>Page, navLabel: "<Label>" }` to `routes` in `src/routes.ts` (omit `navLabel` to hide it from the header).
3. Wrap the page in `<Container>` and start with `<PageHeader>`; group content in `<Section>`.

## Rules

- Always build UI from design system components (`@/components/ui/*`, `@/components/layout`). Don't hand-roll buttons, inputs, dialogs, menus or cards.
- Never hardcode colors: no hex/rgb/oklch literals and no palette utilities like `bg-white`, `text-black`, `bg-zinc-*`, `text-blue-*`. Use semantic tokens: `bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`, `bg-primary text-primary-foreground`, `border`, `ring-ring`, and the status tokens `success`, `warning`, `info`, `destructive`.
- Typography: `text-display`, `text-h1`…`text-h4`, `text-lead`, then `text-base`/`text-sm`/`text-xs`. Spacing: Tailwind's 4px scale. Radius: `rounded-*`. Elevation: `shadow-xs`…`shadow-xl`.
- Need a new token? Add it to both theme blocks in `src/index.css` and map it in `@theme inline`. Don't scatter custom values in components.
- Every screen must work in light and dark themes and at 400px width (no horizontal scroll).
- Icons come from `lucide-react`. Toasts: `toast()` from `sonner` (the `<Toaster />` is already mounted).
- Merge classes with `cn()` from `@/lib/utils`. Import with the `@/` alias.
- Routing uses `HashRouter`: link with `<Link to="/path">`. Never use `href="#id"` for in-page anchors — use `element.scrollIntoView()`.
- Theme: `useTheme()` from `@/hooks/use-theme`.
- Code, comments, UI copy and commit messages are in English.
