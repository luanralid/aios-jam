import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import { Container, PageHeader } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useTheme } from "@/hooks/use-theme"

import {
  AlertSection,
  AvatarSection,
  BadgeSection,
  BreadcrumbSection,
  ButtonSection,
  CardSection,
  FeedbackSection,
  KbdSeparatorSection,
  ScrollEmptySection,
  TableSection,
  ToggleSection,
} from "./components-basic"
import { FormsSection } from "./components-forms"
import { LayoutSection } from "./components-layout"
import {
  DialogsSection,
  PopupsSection,
  TabsAccordionSection,
  ToastSection,
} from "./components-overlays"
import { Colors, Radius, Shadows, Spacing, Typography } from "./foundations"

const toc = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "radius", label: "Radius" },
  { id: "shadows", label: "Shadows" },
  { id: "button", label: "Button" },
  { id: "badge", label: "Badge" },
  { id: "alert", label: "Alert" },
  { id: "card", label: "Card" },
  { id: "forms", label: "Forms" },
  { id: "tabs", label: "Tabs" },
  { id: "dialog", label: "Dialogs" },
  { id: "dropdown-menu", label: "Popups" },
  { id: "toast", label: "Toasts" },
  { id: "toggle", label: "Toggle" },
  { id: "breadcrumb", label: "Breadcrumb" },
  { id: "avatar", label: "Avatar" },
  { id: "table", label: "Table" },
  { id: "progress", label: "Progress" },
  { id: "scroll-area", label: "ScrollArea" },
  { id: "layout", label: "Layout" },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      value={theme}
      onValueChange={(v) => {
        if (v === "light" || v === "dark" || v === "system") setTheme(v)
      }}
      aria-label="Theme"
    >
      <ToggleGroupItem value="light" aria-label="Light theme">
        <SunIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <MoonIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="System theme">
        <MonitorIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function GroupHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-1 pt-12">
      <h2 className="text-h2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export function DesignSystemPage() {
  return (
    <Container className="pb-24">
      <PageHeader
        eyebrow="Design system"
        title="Tokens and components"
        description="Everything this starter ships with: foundations, every component with its variants and states, and layout primitives. Flip the theme to check both palettes."
        actions={<ThemeSwitch />}
      />
      <nav
        aria-label="Table of contents"
        className="flex flex-wrap gap-1.5 border-b py-4"
      >
        {toc.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <GroupHeading
        title="Foundations"
        description="Design tokens that every component is built from."
      />
      <Colors />
      <Separator />
      <Typography />
      <Separator />
      <Spacing />
      <Separator />
      <Radius />
      <Separator />
      <Shadows />

      <GroupHeading
        title="Components"
        description="Interactive demos with the markup to reproduce them."
      />
      <ButtonSection />
      <BadgeSection />
      <AlertSection />
      <CardSection />
      <FormsSection />
      <TabsAccordionSection />
      <DialogsSection />
      <PopupsSection />
      <ToastSection />
      <ToggleSection />
      <BreadcrumbSection />
      <KbdSeparatorSection />
      <AvatarSection />
      <TableSection />
      <FeedbackSection />
      <ScrollEmptySection />
      <GroupHeading
        title="Layout"
        description="Primitives for page structure."
      />
      <LayoutSection />
    </Container>
  )
}
