/**
 * Placeholder screen, already registered in `src/config/routes.ts` as "Screen 1".
 * Replace the content below, then rename the label/path/icon in the route registry.
 */
import { LayoutDashboardIcon } from "lucide-react"

import { Container, EmptyState, PageHeader, Section } from "@/components/layout"

export function Screen1Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Placeholder"
        title="Screen 1"
        description="A placeholder screen, ready for your content."
      />
      <Section>
        <EmptyState
          className="min-h-72"
          icon={<LayoutDashboardIcon />}
          title="Build Screen 1 here"
          description="Edit src/pages/screen-1.tsx. Rename it in src/config/routes.ts."
        />
      </Section>
    </Container>
  )
}
