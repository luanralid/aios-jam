# AIOS Jam

Web app starter with a ready-to-use design system. Drop in a page, compose design system components, push to `main`, and it's live.

**Live:** https://luanralid.github.io/aios-jam/

- `/#/` — starter workspace
- `/#/screen-1`, `/#/screen-2`, `/#/screen-3` — placeholder screens, already in the navigation
- `/#/links` — link hub, generated from `src/content/links.ts`
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
  index.css                Design tokens (colors, type, radius, shadows) for light and dark
  config/routes.ts         Route registry — pages and navigation in one list
  content/links.ts         Links shown on /links — paste URLs here
  pages/
    home.tsx               Starter workspace (/)
    screen-1.tsx ... 3     Placeholder screens, ready to fill in
    links.tsx              Link hub (/links)
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
  lib/links.ts             Normalizes link entries (titles, hosts, favicons)
.github/workflows/deploy.yml   Build and deploy to GitHub Pages
```

## How to add a page

`src/config/routes.ts` is the single source of truth: one entry registers the route **and** adds it to the header and the mobile menu, in list order.

**Fastest:** fill in a placeholder. `Screen 1`, `Screen 2` and `Screen 3` are already wired up — edit `src/pages/screen-1.tsx`, then rename its `label`, `path` and `icon` in `src/config/routes.ts`.

**New page:**

1. Copy `src/pages/_template.tsx` to `src/pages/reports.tsx` and rename `TemplatePage` to `ReportsPage`.
2. Add one entry to `src/config/routes.ts`:

   ```ts
   import { ChartBarIcon } from "lucide-react"
   import { ReportsPage } from "@/pages/reports"

   export const routes: AppRoute[] = [
     // ...
     {
       path: "/reports",
       label: "Reports",
       icon: ChartBarIcon,
       Component: ReportsPage,
     },
   ]
   ```

   | Field       | Purpose                                                                     |
   | ----------- | --------------------------------------------------------------------------- |
   | `path`      | URL, served as `/#/reports`                                                 |
   | `label`     | Text in the header, mobile menu and browser tab                             |
   | `icon`      | Optional [lucide](https://lucide.dev/icons) icon shown next to the label    |
   | `Component` | The page component                                                          |
   | `showInNav` | Optional; set `false` to keep a page out of the navigation (default `true`) |

3. Push to `main`. Link to the page from code with `<Link to="/reports">` from `react-router`.

## How to add a link

Paste the URL into the `links` array in `src/content/links.ts` and push — that's the only step. It appears on `/#/links` as a card that opens in a new tab, with the site's favicon.

```ts
export const links: LinkEntry[] = [
  "https://example.com", // a bare URL works; the title becomes the host name
  {
    title: "Project brief",
    url: "https://example.com/brief",
    description: "Optional one-liner under the title.", // optional
    tag: "Docs", // optional; each tag becomes a filter on the page
  },
]
```

URLs without a protocol (`example.com`) are accepted. The page has search and tag filters, and shows an empty state when the array is empty. Favicons come from Google's favicon service; if one fails to load, the card shows the site's initial instead.

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
