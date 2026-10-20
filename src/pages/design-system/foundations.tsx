import { Section } from "@/components/layout"
import { cn } from "@/lib/utils"

import { Code } from "./specimen"

type Swatch = {
  name: string
  /** Tailwind background utility (must be a complete literal for the scanner). */
  bg: string
  /** CSS variable backing the utility. */
  variable: string
  /** Optional text-color utility used to show the foreground pairing. */
  fg?: string
}

const colorGroups: {
  title: string
  description: string
  swatches: Swatch[]
}[] = [
  {
    title: "Surface",
    description:
      "Page, container and overlay backgrounds with their text colors.",
    swatches: [
      {
        name: "Background",
        bg: "bg-background",
        variable: "--background",
        fg: "text-foreground",
      },
      {
        name: "Card",
        bg: "bg-card",
        variable: "--card",
        fg: "text-card-foreground",
      },
      {
        name: "Popover",
        bg: "bg-popover",
        variable: "--popover",
        fg: "text-popover-foreground",
      },
      {
        name: "Muted",
        bg: "bg-muted",
        variable: "--muted",
        fg: "text-muted-foreground",
      },
      {
        name: "Accent",
        bg: "bg-accent",
        variable: "--accent",
        fg: "text-accent-foreground",
      },
      {
        name: "Sidebar",
        bg: "bg-sidebar",
        variable: "--sidebar",
        fg: "text-sidebar-foreground",
      },
    ],
  },
  {
    title: "Brand and action",
    description: "Primary and secondary actions.",
    swatches: [
      {
        name: "Primary",
        bg: "bg-primary",
        variable: "--primary",
        fg: "text-primary-foreground",
      },
      {
        name: "Secondary",
        bg: "bg-secondary",
        variable: "--secondary",
        fg: "text-secondary-foreground",
      },
      {
        name: "Foreground",
        bg: "bg-foreground",
        variable: "--foreground",
        fg: "text-background",
      },
    ],
  },
  {
    title: "Status",
    description: "Feedback colors used by Alert, Badge and Button.",
    swatches: [
      {
        name: "Destructive",
        bg: "bg-destructive",
        variable: "--destructive",
        fg: "text-destructive-foreground",
      },
      {
        name: "Success",
        bg: "bg-success",
        variable: "--success",
        fg: "text-success-foreground",
      },
      {
        name: "Warning",
        bg: "bg-warning",
        variable: "--warning",
        fg: "text-warning-foreground",
      },
      {
        name: "Info",
        bg: "bg-info",
        variable: "--info",
        fg: "text-info-foreground",
      },
    ],
  },
  {
    title: "Border and ring",
    description: "Dividers, input outlines and focus rings.",
    swatches: [
      { name: "Border", bg: "bg-border", variable: "--border" },
      { name: "Input", bg: "bg-input", variable: "--input" },
      { name: "Ring", bg: "bg-ring", variable: "--ring" },
    ],
  },
  {
    title: "Chart",
    description: "Categorical series colors.",
    swatches: [
      { name: "Chart 1", bg: "bg-chart-1", variable: "--chart-1" },
      { name: "Chart 2", bg: "bg-chart-2", variable: "--chart-2" },
      { name: "Chart 3", bg: "bg-chart-3", variable: "--chart-3" },
      { name: "Chart 4", bg: "bg-chart-4", variable: "--chart-4" },
      { name: "Chart 5", bg: "bg-chart-5", variable: "--chart-5" },
    ],
  },
]

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div
        className={cn(
          "flex h-20 items-end p-3 text-sm font-medium",
          swatch.bg,
          swatch.fg
        )}
      >
        {swatch.fg ? "Aa" : ""}
      </div>
      <div className="flex flex-col gap-1 border-t p-3">
        <span className="text-sm font-medium">{swatch.name}</span>
        <Code className="w-fit">{swatch.bg}</Code>
        <span className="font-mono text-xs break-all text-muted-foreground">
          {swatch.variable}
        </span>
      </div>
    </div>
  )
}

const previewTokens: { label: string; bg: string; fg: string }[] = [
  { label: "primary", bg: "bg-primary", fg: "text-primary-foreground" },
  { label: "secondary", bg: "bg-secondary", fg: "text-secondary-foreground" },
  { label: "muted", bg: "bg-muted", fg: "text-muted-foreground" },
  { label: "accent", bg: "bg-accent", fg: "text-accent-foreground" },
  {
    label: "destructive",
    bg: "bg-destructive",
    fg: "text-destructive-foreground",
  },
  { label: "success", bg: "bg-success", fg: "text-success-foreground" },
  { label: "warning", bg: "bg-warning", fg: "text-warning-foreground" },
  { label: "info", bg: "bg-info", fg: "text-info-foreground" },
]

function ThemePreview({ mode }: { mode: "light" | "dark" }) {
  return (
    <div
      className={cn(
        mode,
        "flex flex-col gap-4 rounded-xl border border-border bg-background p-4 text-foreground"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium capitalize">{mode}</span>
        <span className="font-mono text-xs text-muted-foreground">.{mode}</span>
      </div>
      <div className="rounded-lg border border-border bg-card p-3 text-card-foreground shadow-sm">
        <p className="text-sm font-medium">Card surface</p>
        <p className="text-xs text-muted-foreground">
          Secondary text on a card.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {previewTokens.map((t) => (
          <div
            key={t.label}
            className={cn(
              "rounded-md px-2.5 py-2 text-xs font-medium",
              t.bg,
              t.fg
            )}
          >
            {t.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Colors() {
  return (
    <Section
      id="colors"
      title="Colors"
      description="Semantic tokens defined in src/index.css. Components never use raw color values, so every theme change flows from these variables."
    >
      <div className="flex flex-col gap-8">
        {colorGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <div>
              <h3 className="text-h4">{group.title}</h3>
              <p className="text-sm text-muted-foreground">
                {group.description}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {group.swatches.map((s) => (
                <SwatchCard key={s.variable} swatch={s} />
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-h4">Light and dark</h3>
            <p className="text-sm text-muted-foreground">
              The same tokens resolved under <Code>.light</Code> and{" "}
              <Code>.dark</Code>, regardless of the active page theme.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ThemePreview mode="light" />
            <ThemePreview mode="dark" />
          </div>
        </div>
      </div>
    </Section>
  )
}

const typeScale: { cls: string; size: string; lh: string; sample: string }[] = [
  { cls: "text-display", size: "52px", lh: "1.05", sample: "Display headline" },
  { cls: "text-h1", size: "36px", lh: "1.1", sample: "Heading one" },
  { cls: "text-h2", size: "28px", lh: "1.2", sample: "Heading two" },
  { cls: "text-h3", size: "22px", lh: "1.3", sample: "Heading three" },
  { cls: "text-h4", size: "18px", lh: "1.4", sample: "Heading four" },
  {
    cls: "text-lead",
    size: "18px",
    lh: "1.6",
    sample: "Lead paragraph for introductions and summaries.",
  },
  { cls: "text-xl", size: "20px", lh: "1.4", sample: "Extra large body text" },
  { cls: "text-lg", size: "18px", lh: "1.55", sample: "Large body text" },
  { cls: "text-base", size: "16px", lh: "1.5", sample: "Base body text" },
  {
    cls: "text-sm",
    size: "14px",
    lh: "1.43",
    sample: "Small text for dense interfaces",
  },
  {
    cls: "text-xs",
    size: "12px",
    lh: "1.33",
    sample: "Extra small text for captions",
  },
]

const weights = [
  { cls: "font-normal", label: "Normal 400" },
  { cls: "font-medium", label: "Medium 500" },
  { cls: "font-semibold", label: "Semibold 600" },
  { cls: "font-bold", label: "Bold 700" },
]

export function Typography() {
  return (
    <Section
      id="typography"
      title="Typography"
      description="A semantic scale for headings plus Tailwind's text sizes. Fonts are Geist and Geist Mono."
    >
      <div className="overflow-hidden rounded-xl border bg-card">
        {typeScale.map((t) => (
          <div
            key={t.cls}
            className="flex flex-col gap-1 border-b px-4 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-6 sm:px-6"
          >
            <div className="flex shrink-0 flex-col gap-0.5 sm:w-40">
              <Code className="w-fit">{t.cls}</Code>
              <span className="text-xs text-muted-foreground">
                {t.size} / {t.lh}
              </span>
            </div>
            <p className={cn("min-w-0 text-balance", t.cls)}>{t.sample}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-xl border bg-card p-4 sm:p-6">
          <Code className="w-fit">font-sans</Code>
          <p className="font-sans text-h3">Geist Sans</p>
          <p className="font-sans text-sm break-all text-muted-foreground">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border bg-card p-4 sm:p-6">
          <Code className="w-fit">font-mono</Code>
          <p className="font-mono text-h3">Geist Mono</p>
          <p className="font-mono text-sm break-all text-muted-foreground">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {weights.map((w) => (
          <div
            key={w.cls}
            className="flex flex-col gap-1 rounded-xl border bg-card p-4"
          >
            <span className={cn("text-h3", w.cls)}>Aa</span>
            <Code className="w-fit">{w.cls}</Code>
            <span className="text-xs text-muted-foreground">{w.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

const spacing = [
  { step: "1", px: 4, bar: "w-1" },
  { step: "2", px: 8, bar: "w-2" },
  { step: "3", px: 12, bar: "w-3" },
  { step: "4", px: 16, bar: "w-4" },
  { step: "6", px: 24, bar: "w-6" },
  { step: "8", px: 32, bar: "w-8" },
  { step: "10", px: 40, bar: "w-10" },
  { step: "12", px: 48, bar: "w-12" },
  { step: "16", px: 64, bar: "w-16" },
  { step: "20", px: 80, bar: "w-20" },
  { step: "24", px: 96, bar: "w-24" },
]

export function Spacing() {
  return (
    <Section
      id="spacing"
      title="Spacing"
      description="Tailwind's 4px scale. Use it for padding, margin and gap."
    >
      <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:p-6">
        {spacing.map((s) => (
          <div key={s.step} className="flex items-center gap-4">
            <Code className="w-12 shrink-0 text-center">{s.step}</Code>
            <span className="w-12 shrink-0 text-xs text-muted-foreground">
              {s.px}px
            </span>
            <div className={cn("h-4 rounded-sm bg-primary", s.bar)} />
          </div>
        ))}
      </div>
    </Section>
  )
}

const radii = [
  "rounded-sm",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-3xl",
  "rounded-4xl",
  "rounded-full",
]

export function Radius() {
  return (
    <Section
      id="radius"
      title="Radius"
      description="Every step derives from a single --radius variable, so one change reshapes the whole interface."
    >
      <div className="grid grid-cols-2 gap-4 min-[480px]:grid-cols-4 lg:grid-cols-8">
        {radii.map((r) => (
          <div key={r} className="flex flex-col items-center gap-2">
            <div
              className={cn("size-20 border-2 border-primary bg-accent", r)}
            />
            <Code>{r}</Code>
          </div>
        ))}
      </div>
    </Section>
  )
}

const shadows = [
  "shadow-xs",
  "shadow-sm",
  "shadow-md",
  "shadow-lg",
  "shadow-xl",
]

export function Shadows() {
  return (
    <Section
      id="shadows"
      title="Shadows"
      description="Elevation steps tinted per theme through --shadow-tint."
    >
      <div className="grid grid-cols-2 gap-6 rounded-xl bg-muted p-4 sm:grid-cols-3 sm:p-8 lg:grid-cols-5">
        {shadows.map((s) => (
          <div
            key={s}
            className={cn(
              "flex h-24 items-center justify-center rounded-xl border bg-card",
              s
            )}
          >
            <Code>{s}</Code>
          </div>
        ))}
      </div>
    </Section>
  )
}
