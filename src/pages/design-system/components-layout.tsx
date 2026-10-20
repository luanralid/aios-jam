import { SparklesIcon } from "lucide-react"

import {
  Container,
  EmptyState,
  PageHeader,
  Section,
  Stack,
} from "@/components/layout"
import { Button } from "@/components/ui/button"

import { Specimen } from "./specimen"

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-dashed border-primary/40 bg-accent px-3 py-2 text-xs font-medium text-accent-foreground">
      {children}
    </div>
  )
}

export function LayoutSection() {
  return (
    <Section
      id="layout"
      title="Layout primitives"
      description="Small building blocks from @/components/layout for consistent page structure."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="Container"
          description="Sizes: sm, default, lg, full."
          code={`<Container size="sm">...</Container>`}
          previewClassName="block"
        >
          <div className="flex flex-col gap-2">
            {(["sm", "default", "lg"] as const).map((size) => (
              <div key={size} className="rounded-md bg-muted py-2">
                <Container size={size} className="px-2 sm:px-2 lg:px-2">
                  <Box>size="{size}"</Box>
                </Container>
              </div>
            ))}
          </div>
        </Specimen>
        <Specimen
          title="Stack"
          description="Flex layout with tokenized gaps."
          code={`<Stack direction="row" gap="sm" align="center">\n  ...\n</Stack>`}
          previewClassName="block"
        >
          <Stack gap="md">
            <Stack direction="row" gap="sm" wrap>
              <Box>row / sm</Box>
              <Box>row / sm</Box>
              <Box>row / sm</Box>
            </Stack>
            <Stack gap="xs">
              <Box>column / xs</Box>
              <Box>column / xs</Box>
            </Stack>
            <Stack direction="responsive" gap="lg">
              <Box>responsive / lg</Box>
              <Box>responsive / lg</Box>
            </Stack>
          </Stack>
        </Specimen>
        <Specimen
          title="Section"
          description="Spaced page region with title, description and actions."
          code={`<Section title="Team" description="..." actions={<Button />}>\n  ...\n</Section>`}
          previewClassName="block"
        >
          <Section
            className="py-0 sm:py-0"
            title="Team members"
            description="People with access to this workspace."
            actions={<Button size="sm">Invite</Button>}
          >
            <Box>Section content</Box>
          </Section>
        </Specimen>
        <Specimen
          title="PageHeader"
          description="Title block with eyebrow, description and actions."
          code={`<PageHeader\n  eyebrow="Settings"\n  title="Profile"\n  description="..."\n  actions={<Button />}\n/>`}
          previewClassName="block"
        >
          <PageHeader
            className="border-b-0 pt-0 pb-0 sm:pt-0"
            eyebrow="Settings"
            title="Profile"
            description="Manage how others see you."
            actions={<Button variant="outline">Preview</Button>}
          />
        </Specimen>
        <Specimen
          title="EmptyState"
          description="Opinionated wrapper around Empty."
          className="lg:col-span-2"
          code={`<EmptyState\n  icon={<SparklesIcon />}\n  title="Nothing here yet"\n  description="..."\n  action={<Button />}\n/>`}
          previewClassName="block"
        >
          <EmptyState
            icon={<SparklesIcon />}
            title="Nothing here yet"
            description="Create your first item to get started."
            action={<Button>Create item</Button>}
          />
        </Specimen>
      </div>
    </Section>
  )
}
