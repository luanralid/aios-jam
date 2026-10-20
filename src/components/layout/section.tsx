import { cn } from "@/lib/utils"

type SectionProps = Omit<React.ComponentProps<"section">, "title"> & {
  title?: React.ReactNode
  description?: React.ReactNode
  /** Rendered on the right of the heading (buttons, links, filters). */
  actions?: React.ReactNode
}

/** A vertically spaced page region with an optional heading row. */
function Section({
  className,
  title,
  description,
  actions,
  children,
  ...props
}: SectionProps) {
  const hasHeader = title || description || actions

  return (
    <section
      data-slot="section"
      className={cn(
        "flex scroll-mt-20 flex-col gap-6 py-10 sm:py-12",
        className
      )}
      {...props}
    >
      {hasHeader && (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-2xl flex-col gap-1.5">
            {title && <h2 className="text-h3">{title}</h2>}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {actions && (
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export { Section }
