import { Suspense, useEffect } from "react"
import { Outlet, useLocation } from "react-router"

import { Container } from "@/components/layout"
import { SiteHeader } from "@/components/shell/site-header"
import { Spinner } from "@/components/ui/spinner"
import { routes } from "@/config/routes"

const APP_NAME = "AIOS Jam"

/** Layout shared by every route: sticky header, page content, footer. */
export function AppShell() {
  const { pathname } = useLocation()

  // Start each page at the top and name the tab after the route's label.
  useEffect(() => {
    window.scrollTo({ top: 0 })
    const route = routes.find((item) => item.path === pathname)
    document.title =
      route && route.path !== "/" ? `${route.label} · ${APP_NAME}` : APP_NAME
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Suspense
          fallback={
            <div className="flex flex-1 items-center justify-center py-24">
              <Spinner className="size-5 text-muted-foreground" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer className="border-t">
        <Container className="flex h-14 items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{APP_NAME}</span>
          <span>Built with React, Tailwind CSS and shadcn/ui</span>
        </Container>
      </footer>
    </div>
  )
}
