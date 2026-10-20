import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router"

import { Container } from "@/components/layout"
import { Logo } from "@/components/shell/logo"
import { ThemeToggle } from "@/components/shell/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navRoutes } from "@/config/routes"
import { cn } from "@/lib/utils"

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "flex shrink-0 items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-4 [&_svg]:shrink-0",
    isActive && "bg-muted text-foreground"
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-14 items-center gap-4">
        <Link
          to="/"
          className="shrink-0 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Logo />
        </Link>

        {/* Generated from src/config/routes.ts */}
        <nav
          aria-label="Main"
          className="no-scrollbar hidden min-w-0 items-center gap-1 overflow-x-auto lg:flex"
        >
          {navRoutes.map(({ path, label, icon: Icon }) => (
            <NavLink key={path} to={path} end className={navLinkClass}>
              {Icon && <Icon aria-hidden="true" />}
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {navRoutes.map(({ path, label, icon: Icon }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {Icon && <Icon aria-hidden="true" />}
                    {label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
