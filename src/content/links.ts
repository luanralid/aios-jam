/**
 * Links shown on the /links page (`/#/links`).
 *
 * Paste a URL as a plain string, or use an object for a custom title,
 * description and tag. Nothing else needs to change:
 *
 *   "https://example.com",
 *   { title: "Docs", url: "https://example.com/docs", description: "Optional.", tag: "Reference" },
 */
export type LinkItem = {
  title: string
  url: string
  description?: string
  /** Groups links; each distinct tag becomes a filter on the page. */
  tag?: string
}

export type LinkEntry = string | LinkItem

export const links: LinkEntry[] = [
  {
    title: "shadcn/ui components",
    url: "https://ui.shadcn.com/docs/components",
    description: "Docs and examples for every component in src/components/ui.",
    tag: "Reference",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    description: "Utility class reference.",
    tag: "Reference",
  },
  {
    title: "Lucide icons",
    url: "https://lucide.dev/icons",
    description: "Search the icon set used across the app.",
    tag: "Reference",
  },
  "https://github.com/luanralid/aios-jam",
]
