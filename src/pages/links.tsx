import { ArrowUpRightIcon, CopyIcon, LinkIcon, SearchIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { toast } from "sonner"

import { Container, EmptyState, PageHeader, Section } from "@/components/layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { links } from "@/content/links"
import { faviconUrl, resolveLink, type ResolvedLink } from "@/lib/links"

const LINKS_FILE = "src/content/links.ts"
const ALL_TAGS = "__all__"

async function copyFilePath() {
  try {
    await navigator.clipboard.writeText(LINKS_FILE)
    toast.success("Copied to clipboard", { description: LINKS_FILE })
  } catch {
    toast.error("Couldn't copy", { description: LINKS_FILE })
  }
}

function LinkCard({ link }: { link: ResolvedLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full transition-[background-color,box-shadow] group-hover/link:bg-muted/40 group-hover/link:shadow-md">
        <CardHeader>
          <div className="flex items-start gap-3">
            <Avatar className="size-9 rounded-lg after:rounded-lg">
              <AvatarImage
                src={faviconUrl(link.hostname)}
                alt=""
                className="rounded-lg bg-background p-1.5"
                referrerPolicy="no-referrer"
              />
              <AvatarFallback className="rounded-lg font-medium uppercase">
                {link.hostname.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <CardTitle className="truncate">{link.title}</CardTitle>
              <CardDescription className="truncate font-mono text-xs">
                {link.displayUrl}
              </CardDescription>
            </div>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-foreground"
            />
          </div>
        </CardHeader>
        {(link.description || link.tag) && (
          <CardContent className="flex flex-1 flex-col items-start justify-between gap-3">
            {link.description && (
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            )}
            {link.tag && <Badge variant="secondary">{link.tag}</Badge>}
          </CardContent>
        )}
      </Card>
    </a>
  )
}

export function LinksPage() {
  const resolved = useMemo(() => links.map(resolveLink), [])
  const tags = useMemo(
    () => [
      ...new Set(resolved.flatMap((link) => (link.tag ? [link.tag] : []))),
    ],
    [resolved]
  )
  const [query, setQuery] = useState("")
  const [tag, setTag] = useState(ALL_TAGS)

  const normalizedQuery = query.trim().toLowerCase()
  const visible = resolved.filter((link) => {
    if (tag !== ALL_TAGS && link.tag !== tag) return false
    if (!normalizedQuery) return true
    return [link.title, link.displayUrl, link.description, link.tag]
      .filter(Boolean)
      .some((value) => value!.toLowerCase().includes(normalizedQuery))
  })

  return (
    <Container>
      <PageHeader
        eyebrow="Resources"
        title="Links"
        description={
          <>
            Quick access to everything you need. Add a URL to{" "}
            <code className="font-mono text-[0.9em]">{LINKS_FILE}</code> and it
            shows up here.
          </>
        }
        actions={
          <Button variant="outline" onClick={copyFilePath}>
            <CopyIcon data-icon="inline-start" />
            Copy file path
          </Button>
        }
      />

      <Section>
        {resolved.length === 0 ? (
          <EmptyState
            className="min-h-72"
            icon={<LinkIcon />}
            title="No links yet"
            description={`Paste a URL into ${LINKS_FILE} and push. It appears here as a card.`}
            action={
              <Button variant="outline" size="sm" onClick={copyFilePath}>
                <CopyIcon data-icon="inline-start" />
                Copy file path
              </Button>
            }
          />
        ) : (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <InputGroup className="sm:max-w-xs">
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput
                  type="search"
                  placeholder="Search links"
                  aria-label="Search links"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </InputGroup>
              {tags.length > 0 && (
                <ToggleGroup
                  type="single"
                  variant="outline"
                  size="sm"
                  value={tag}
                  onValueChange={(value) => setTag(value || ALL_TAGS)}
                  aria-label="Filter by tag"
                  className="flex-wrap"
                >
                  <ToggleGroupItem value={ALL_TAGS}>All</ToggleGroupItem>
                  {tags.map((name) => (
                    <ToggleGroupItem key={name} value={name}>
                      {name}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              )}
            </div>

            {visible.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((link, index) => (
                  <li key={`${link.url}-${index}`}>
                    <LinkCard link={link} />
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                icon={<SearchIcon />}
                title="No matching links"
                description="Try a different search or tag."
                action={
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery("")
                      setTag(ALL_TAGS)
                    }}
                  >
                    Clear filters
                  </Button>
                }
              />
            )}
          </>
        )}
      </Section>
    </Container>
  )
}
