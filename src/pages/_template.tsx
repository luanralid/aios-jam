/**
 * Page template — copy this file to start a new screen.
 *
 *   1. Copy to `src/pages/<name>.tsx` and rename `TemplatePage` (e.g. `ReportsPage`).
 *   2. Register it in `src/config/routes.ts` (this also adds it to the navigation):
 *        { path: "/reports", label: "Reports", icon: ChartBarIcon, Component: ReportsPage }
 *      Add `showInNav: false` to keep the page out of the header and mobile menu.
 *   3. Build the UI from `@/components/ui/*` and `@/components/layout`, using
 *      token utilities (bg-card, text-muted-foreground, border, ...) only.
 *
 * This template is also registered at `/#/template` so you can preview it.
 */
import { InboxIcon, PlusIcon } from "lucide-react"
import { toast } from "sonner"

import { Container, EmptyState, PageHeader, Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items = [
  {
    title: "First item",
    description: "Short supporting text.",
    status: "Active",
  },
  {
    title: "Second item",
    description: "Short supporting text.",
    status: "Draft",
  },
  {
    title: "Third item",
    description: "Short supporting text.",
    status: "Active",
  },
]

export function TemplatePage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Section name"
        title="Page title"
        description="One sentence that explains what this page is for."
        actions={
          <Button onClick={() => toast.success("Item created")}>
            <PlusIcon data-icon="inline-start" />
            New item
          </Button>
        }
      />

      <Section
        title="Overview"
        description="Group related content in sections."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  variant={item.status === "Active" ? "success" : "secondary"}
                >
                  {item.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Empty area">
        <EmptyState
          icon={<InboxIcon />}
          title="Nothing here yet"
          description="Use EmptyState for zero-data screens and placeholders."
          action={<Button variant="outline">Add content</Button>}
        />
      </Section>
    </Container>
  )
}
