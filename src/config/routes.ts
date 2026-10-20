import { lazy, type ComponentType } from "react"

import { TemplatePage } from "@/pages/_template"
import { HomePage } from "@/pages/home"

// Large pages can be code-split so they don't slow down the first load.
const DesignSystemPage = lazy(() =>
  import("@/pages/design-system").then((module) => ({
    default: module.DesignSystemPage,
  }))
)

export type AppRoute = {
  /** URL path, served under the hash: `/#/your-path`. */
  path: string
  Component: ComponentType
  /** Label shown in the header navigation. Omit to keep the route out of the nav. */
  navLabel?: string
}

/**
 * Route registry. To add a page:
 *   1. Copy `src/pages/_template.tsx` to `src/pages/<name>.tsx` and rename the component.
 *   2. Import it here and add `{ path: "/<name>", Component: <Name>Page, navLabel: "<Label>" }`.
 */
export const routes: AppRoute[] = [
  { path: "/", Component: HomePage, navLabel: "Workspace" },
  {
    path: "/design-system",
    Component: DesignSystemPage,
    navLabel: "Design system",
  },
  { path: "/template", Component: TemplatePage },
]
