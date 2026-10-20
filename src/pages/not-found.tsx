import { CompassIcon } from "lucide-react"
import { Link } from "react-router"

import { Container, EmptyState } from "@/components/layout"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <Container size="sm" className="flex flex-1 items-center py-16">
      <EmptyState
        icon={<CompassIcon />}
        title="Page not found"
        description="This route isn't registered. Check src/config/routes.ts."
        action={
          <Button asChild>
            <Link to="/">Back to workspace</Link>
          </Button>
        }
      />
    </Container>
  )
}
