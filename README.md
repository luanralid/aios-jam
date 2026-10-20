# AIOS Jam

Web app starter with a ready-to-use design system. Drop in a page, compose design system components, push to `main`, and it's live.

**Live:** https://luanralid.github.io/aios-jam/

- `/#/` — starter workspace
- `/#/design-system` — tokens and every component, with variants and states
- `/#/template` — the page template, rendered

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with semantic CSS-variable tokens
- [shadcn/ui](https://ui.shadcn.com) components on [Radix](https://www.radix-ui.com) primitives
- [lucide-react](https://lucide.dev) icons, [Sonner](https://sonner.emilkowal.ski) toasts
- [React Router](https://reactrouter.com) with `HashRouter` (deep links work on static hosting)
- Geist and Geist Mono fonts (self-hosted via Fontsource)
- Oxlint for linting, Prettier (with the Tailwind plugin) for formatting

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:5173/aios-jam/
```

## Scripts

| Script                 | What it does                                        |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload                |
| `npm run build`        | Type-check and build to `dist/`                     |
| `npm run preview`      | Serve the production build locally                  |
| `npm run typecheck`    | Run the TypeScript compiler without emitting        |
| `npm run lint`         | Lint with Oxlint (warnings fail)                    |
| `npm run format`       | Format everything with Prettier                     |
| `npm run format:check` | Check formatting without writing                    |
| `npm run check`        | `typecheck` + `lint` + `build` — run before pushing |

## Project structure

```
src/
  main.tsx                 Entry point
  app.tsx                  Providers (theme, tooltips, toasts) and the router
  routes.ts                Route registry — every page is listed here
  index.css                Design tokens (colors, type, radius, shadows) for light and dark
  pages/
    home.tsx               Starter workspace (/)
    _template.tsx          Copy this to create a new page
    design-system/         Design system showcase (/design-system)
    not-found.tsx          Fallback for unknown routes
  components/
    ui/                    shadcn/ui components (Button, Card, Dialog, Field, ...)
    layout/                Container, Stack, Section, PageHeader, EmptyState
    shell/                 App shell: header, logo, theme toggle
    theme-provider.tsx     Light / dark / system theme, persisted in localStorage
  hooks/use-theme.ts       Read or change the theme
  lib/utils.ts             cn() class-name helper
.github/workflows/deploy.yml   Build and deploy to GitHub Pages
```

## Add a page

1. Copy `src/pages/_template.tsx` to `src/pages/reports.tsx` and rename `TemplatePage` to `ReportsPage`.
2. Register it in `src/routes.ts`:

   ```ts
   import { ReportsPage } from "@/pages/reports"

   export const routes: AppRoute[] = [
     // ...
     { path: "/reports", Component: ReportsPage, navLabel: "Reports" },
   ]
   ```

   `navLabel` adds it to the header navigation; omit it for pages reached only by links.

3. Open `/#/reports`. Link to it with `<Link to="/reports">` from `react-router`.

## Design system

### Tokens

All visual values live in `src/index.css` as CSS variables, with a light theme on `:root` / `.light` and a dark theme on `.dark`. Tailwind utilities are generated from them, so use the utilities rather than raw values:

| Kind       | Utilities                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Surfaces   | `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-accent`, `bg-secondary`                                             |
| Text       | `text-foreground`, `text-muted-foreground`, `text-primary`, `text-*-foreground`                                               |
| Actions    | `bg-primary` / `text-primary-foreground`, `bg-secondary`, `bg-destructive`                                                    |
| Status     | `success`, `warning`, `info`, `destructive` (e.g. `bg-success/10 text-success`)                                               |
| Lines      | `border` (uses `--border`), `border-input`, `ring-ring`                                                                       |
| Charts     | `chart-1` … `chart-5`                                                                                                         |
| Type scale | `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-lead`, plus `text-xs` … `text-xl`; `font-sans`, `font-mono` |
| Radius     | `rounded-sm` … `rounded-4xl`, all derived from `--radius`                                                                     |
| Shadows    | `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl` (tinted per theme)                                            |
| Spacing    | Tailwind's 4px scale (`p-4` = 16px, `gap-6` = 24px, ...)                                                                      |

To restyle the whole app, edit the variables (for example `--primary` or `--radius`) in both theme blocks. To add a token, define it in `:root` and `.dark`, then map it in the `@theme inline` block (`--color-brand: var(--brand);` gives you `bg-brand`, `text-brand`, ...).

### Components

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container, PageHeader, Section, Stack } from "@/components/layout"
import { toast } from "sonner"
```

Browse `/#/design-system` for every component, its variants and states, with usage snippets. Need another shadcn component? Run:

```bash
npx shadcn@latest add <component>
```

### Theme

The header toggle switches between light, dark and system; the choice is saved in `localStorage` (`aios-jam-theme`). In code, use `useTheme()` from `@/hooks/use-theme`.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, builds with `npm run build` and publishes `dist/` to GitHub Pages. Progress shows in the repository's **Actions** tab; the site updates about a minute after the push.

The app is served from `/aios-jam/`, set by `base` in `vite.config.ts`. If the repository is renamed, update `base` to match.
