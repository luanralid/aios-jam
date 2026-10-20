/**
 * Placeholder screen, already registered in `src/config/routes.ts` as "Screen 3".
 * Replace the content below, then rename the label/path/icon in the route registry.
 */
import { LayoutGridIcon } from "lucide-react"

import { Container, EmptyState, PageHeader, Section } from "@/components/layout"

export function Screen3Page() {
  return (
    <Container>
      <PageHeader
        eyebrow="Placeholder"
        title="Screen 3"
        description="A placeholder screen, ready for your content."
      />
      <Section>
        <EmptyState
          className="min-h-72"
          icon={<LayoutGridIcon />}
          title="Build Screen 3 here"
          description="Edit src/pages/screen-3.tsx. Rename it in src/config/routes.ts."
        />
      </Section>
    </Container>
  )
}
