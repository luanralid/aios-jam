import {
  ArrowRightIcon,
  CopyIcon,
  FilePlus2Icon,
  LayoutTemplateIcon,
  RocketIcon,
  RouteIcon,
  SparklesIcon,
} from "lucide-react"
import { Link } from "react-router"
import { toast } from "sonner"

import { Container, EmptyState, Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const steps = [
  {
    Icon: FilePlus2Icon,
    title: "Create a page",
    description:
      "Copy src/pages/_template.tsx to a new file and rename the component.",
  },
  {
    Icon: RouteIcon,
    title: "Register the route",
    description:
      "Add one entry to src/config/routes.ts. It shows up in the header and mobile menu.",
  },
  {
    Icon: RocketIcon,
    title: "Push to main",
    description:
      "GitHub Actions builds the app and publishes it to GitHub Pages.",
  },
]

const stack = [
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "React Router",
  "lucide-react",
]

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard", { description: text })
  } catch {
    toast.error("Couldn't copy", { description: text })
  }
}

export function HomePage() {
  return (
    <Container>
      <section className="relative isolate flex flex-col items-start gap-6 pt-12 pb-10 sm:pt-20 sm:pb-14">
        <div
          aria-hidden="true"
          className="absolute top-0 -left-24 -z-10 size-96 rounded-full bg-primary/12 blur-3xl"
        />
        <Badge variant="secondary" className="h-6 px-2.5">
          <SparklesIcon data-icon="inline-start" />
          Starter workspace
        </Badge>
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-h1 sm:text-display">Start building here.</h1>
          <p className="text-base text-pretty text-muted-foreground sm:text-lead">
            A clean canvas wired to a complete design system. Compose
            components, push to{" "}
            <code className="font-mono text-[0.9em]">main</code>, and it&apos;s
            live.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="lg" asChild>
            <Link to="/design-system">
              Explore the design system
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/template">
              <LayoutTemplateIcon data-icon="inline-start" />
              View page template
            </Link>
          </Button>
        </div>
      </section>

      {/* Build area: replace this block with your first screen. */}
      <div className="rounded-2xl border border-dashed bg-[radial-gradient(var(--input)_1px,transparent_1px)] [background-size:18px_18px] p-2 sm:p-3">
        <EmptyState
          className="min-h-80 border-none"
          icon={<LayoutTemplateIcon />}
          title="Build here"
          description="This area is yours. Replace it with your first screen in src/pages/home.tsx."
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard("src/pages/home.tsx")}
            >
              <CopyIcon data-icon="inline-start" />
              Copy file path
            </Button>
          }
        />
      </div>

      <Section
        title="Ship a new screen in three steps"
        description="Every page composes design system components and tokens, so new screens match from the start."
      >
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map(({ Icon, title, description }, index) => (
            <li key={title}>
              <Card className="h-full">
                <CardHeader className="gap-3">
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </Section>
    </Container>
  )
}
