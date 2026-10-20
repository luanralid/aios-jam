import { cn } from "@/lib/utils"

/** Brand mark: four equalizer bars on a primary tile. */
function LogoMark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-7 shrink-0", className)}
      {...props}
    >
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <g className="fill-primary-foreground">
        <rect x="7" y="13" width="3.5" height="9" rx="1.75" />
        <rect x="12.5" y="8" width="3.5" height="16" rx="1.75" />
        <rect x="18" y="11" width="3.5" height="12" rx="1.75" opacity="0.75" />
        <rect x="23.5" y="15" width="3.5" height="6" rx="1.75" opacity="0.5" />
      </g>
    </svg>
  )
}

function Logo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      {...props}
    >
      <LogoMark />
      <span className="text-[0.9375rem] font-semibold tracking-tight">
        AIOS Jam
      </span>
    </span>
  )
}

export { Logo, LogoMark }
