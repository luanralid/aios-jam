import type { LinkEntry } from "@/content/links"

export type ResolvedLink = {
  title: string
  url: string
  /** Host and path without the protocol, e.g. `example.com/docs`. */
  displayUrl: string
  hostname: string
  description?: string
  tag?: string
}

function parseUrl(raw: string): URL | null {
  const value = raw.trim()
  try {
    return new URL(value)
  } catch {
    // Accept URLs pasted without a protocol, e.g. "example.com".
    try {
      return new URL(`https://${value}`)
    } catch {
      return null
    }
  }
}

/** Normalizes a string or object entry into everything the UI needs. */
export function resolveLink(entry: LinkEntry): ResolvedLink {
  const item = typeof entry === "string" ? { url: entry } : entry
  const parsed = parseUrl(item.url)
  const hostname = parsed?.hostname.replace(/^www\./, "") ?? item.url
  const path = parsed ? parsed.pathname.replace(/\/$/, "") : ""

  return {
    title: ("title" in item && item.title) || hostname,
    url: parsed?.href ?? item.url,
    displayUrl: `${hostname}${path}`,
    hostname,
    description: "description" in item ? item.description : undefined,
    tag: "tag" in item ? item.tag : undefined,
  }
}

/** Favicon from Google's public service; the UI falls back to an initial if it fails. */
export function faviconUrl(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`
}
