import { createContext } from "react"

export type Theme = "light" | "dark" | "system"
export type ResolvedTheme = "light" | "dark"

/** localStorage key. Keep in sync with the inline script in index.html. */
export const THEME_STORAGE_KEY = "aios-jam-theme"

export type ThemeContextValue = {
  /** The user's choice, including "system". */
  theme: Theme
  /** The theme actually applied to the page. */
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system"
}
