import { HashRouter, Route, Routes } from "react-router"

import { AppShell } from "@/components/shell/app-shell"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { NotFoundPage } from "@/pages/not-found"
import { routes } from "@/routes"

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
        {/* HashRouter keeps deep links working on static hosting (GitHub Pages). */}
        <HashRouter>
          <Routes>
            <Route element={<AppShell />}>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
        <Toaster position="bottom-right" />
      </TooltipProvider>
    </ThemeProvider>
  )
}
