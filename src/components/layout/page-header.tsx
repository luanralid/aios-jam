import { cn } from "@/lib/utils"

type PageHeaderProps = Omit<React.ComponentProps<"header">, "title"> & {
  /** Small label above the title, e.g. a section name or a Badge. */
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  /** Primary page actions, aligned right on wide screens. */
  actions?: React.ReactNode
}

/** Title block at the top of a page. */
function PageHeader({
  className,
  eyebrow,
  title,
  description,
  actions,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <header
      data-slot="page-header"
      className={cn(
        "flex flex-col gap-6 border-b pt-10 pb-8 sm:pt-14 md:flex-row md:items-end md:justify-between",
        className
      )}
      {...props}
    >
      <div className="flex max-w-3xl flex-col gap-3">
        {eyebrow && (
          <div className="text-sm font-medium text-primary">{eyebrow}</div>
        )}
        <h1 className="text-h2 sm:text-h1">{title}</h1>
        {description && (
          <p className="text-base text-pretty text-muted-foreground sm:text-lead">
            {description}
          </p>
        )}
        {children}
      </div>
      {actions && (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </div>
      )}
    </header>
  )
}

export { PageHeader }
