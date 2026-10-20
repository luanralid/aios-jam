/**
 * Placeholder screen, already registered in `src/config/routes.ts` as "Screen 2".
 * Replace the content below, then rename the label/path/icon in the route registry.
 */
import { LayoutListIcon } from "lucide-react"

import { Container, EmptyState, PageHeader, Section } from "@/components/layout"

export function Screen2Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Placeholder"
        title="Screen 2"
        description="A placeholder screen, ready for your content."
      />
      <Section>
        <EmptyState
          className="min-h-72"
          icon={<LayoutListIcon />}
          title="Build Screen 2 here"
          description="Edit src/pages/screen-2.tsx. Rename it in src/config/routes.ts."
        />
      </Section>
    </Container>
  )
}
