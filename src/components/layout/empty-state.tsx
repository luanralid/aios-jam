import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { cn } from "@/lib/utils"

type EmptyStateProps = Omit<React.ComponentProps<typeof Empty>, "title"> & {
  /** A lucide icon element, e.g. `<InboxIcon />`. */
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  /** Buttons or links shown under the text. */
  action?: React.ReactNode
}

/** Placeholder for empty lists, zero-data screens and "nothing here yet" areas. */
function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <Empty className={cn("border", className)} {...props}>
      <EmptyHeader>
        {icon && <EmptyMedia variant="icon">{icon}</EmptyMedia>}
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      {(action || children) && (
        <EmptyContent>
          {action}
          {children}
        </EmptyContent>
      )}
    </Empty>
  )
}

export { EmptyState }
