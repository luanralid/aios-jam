import {
  HouseIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LayoutListIcon,
  LayoutTemplateIcon,
  LinkIcon,
  PaletteIcon,
  type LucideIcon,
} from "lucide-react"
import { lazy, type ComponentType } from "react"

import { TemplatePage } from "@/pages/_template"
import { HomePage } from "@/pages/home"
import { LinksPage } from "@/pages/links"
import { Screen1Page } from "@/pages/screen-1"
import { Screen2Page } from "@/pages/screen-2"
import { Screen3Page } from "@/pages/screen-3"

// Large pages can be code-split so they don't slow down the first load.
const DesignSystemPage = lazy(() =>
  import("@/pages/design-system").then((module) => ({
    default: module.DesignSystemPage,
  }))
)

export type AppRoute = {
  /** URL path, served under the hash: `/#/your-path`. */
  path: string
  /** Shown in the header, the mobile menu and the browser tab title. */
  label: string
  /** Any lucide-react icon, shown next to the label in the navigation. */
  icon?: LucideIcon
  Component: ComponentType
  /** Set to `false` to keep the route out of the navigation. Defaults to `true`. */
  showInNav?: boolean
}

/**
 * Route registry — the single source of truth for pages and navigation.
 * One entry registers the route and adds it to the header and mobile menu,
 * in this order. To add a page, copy `src/pages/_template.tsx`, then add:
 *
 *   { path: "/reports", label: "Reports", icon: ChartBarIcon, Component: ReportsPage },
 */
export const routes: AppRoute[] = [
  { path: "/", label: "Workspace", icon: HouseIcon, Component: HomePage },
  {
    path: "/screen-1",
    label: "Screen 1",
    icon: LayoutDashboardIcon,
    Component: Screen1Page,
  },
  {
    path: "/screen-2",
    label: "Screen 2",
    icon: LayoutListIcon,
    Component: Screen2Page,
  },
  {
    path: "/screen-3",
    label: "Screen 3",
    icon: LayoutGridIcon,
    Component: Screen3Page,
  },
  { path: "/links", label: "Links", icon: LinkIcon, Component: LinksPage },
  {
    path: "/design-system",
    label: "Design system",
    icon: PaletteIcon,
    Component: DesignSystemPage,
  },
  {
    path: "/template",
    label: "Page template",
    icon: LayoutTemplateIcon,
    Component: TemplatePage,
    showInNav: false,
  },
]

export const navRoutes = routes.filter((route) => route.showInNav !== false)
