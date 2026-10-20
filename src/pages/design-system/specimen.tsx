import { cn } from "@/lib/utils"

type SpecimenProps = {
  title: string
  description?: string
  /** Optional usage snippet rendered under the preview. */
  code?: string
  className?: string
  /** Classes for the preview area (layout of the demo content). */
  previewClassName?: string
  children: React.ReactNode
}

/** Titled, bordered preview area with an optional code snippet. */
export function Specimen({
  title,
  description,
  code,
  className,
  previewClassName,
  children,
}: SpecimenProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-medium">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border bg-card text-card-foreground">
        <div
          className={cn(
            "flex flex-wrap items-center gap-3 p-4 sm:p-6",
            previewClassName
          )}
        >
          {children}
        </div>
        {code && (
          <pre className="overflow-x-auto border-t bg-muted px-4 py-3 font-mono text-xs text-muted-foreground">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

/** Small monospace token label. */
export function Code({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <code
      className={cn(
        "rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground",
        className
      )}
    >
      {children}
    </code>
  )
}
