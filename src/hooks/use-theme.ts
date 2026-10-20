import { use } from "react"

import { ThemeContext } from "@/lib/theme"

export function useTheme() {
  const context = use(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used inside <ThemeProvider>")
  }
  return context
}
