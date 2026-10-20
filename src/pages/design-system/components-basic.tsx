import {
  ArrowRightIcon,
  BellIcon,
  BoldIcon,
  CheckCircle2Icon,
  DownloadIcon,
  InboxIcon,
  InfoIcon,
  ItalicIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  TriangleAlertIcon,
  UnderlineIcon,
  XCircleIcon,
} from "lucide-react"
import { useEffect, useState } from "react"

import { EmptyState, Section } from "@/components/layout"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { Specimen } from "./specimen"

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const
const buttonSizes = ["xs", "sm", "default", "lg"] as const
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const

export function ButtonSection() {
  return (
    <Section
      id="button"
      title="Button"
      description="Six variants, four text sizes and four icon-only sizes."
    >
      <Specimen
        title="Variants"
        code={`<Button variant="default">Button</Button>`}
      >
        {buttonVariants.map((v) => (
          <Button key={v} variant={v}>
            {v}
          </Button>
        ))}
      </Specimen>
      <Specimen title="Sizes" code={`<Button size="sm">Small</Button>`}>
        {buttonSizes.map((s) => (
          <Button key={s} size={s}>
            {s}
          </Button>
        ))}
        {iconSizes.map((s) => (
          <Button key={s} size={s} variant="outline" aria-label={s}>
            <PlusIcon />
          </Button>
        ))}
      </Specimen>
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="With icons"
          code={`<Button>\n  <MailIcon data-icon="inline-start" /> Email\n</Button>`}
        >
          <Button>
            <MailIcon data-icon="inline-start" />
            Email
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button variant="secondary">
            <DownloadIcon data-icon="inline-start" />
            Download
          </Button>
        </Specimen>
        <Specimen title="States" code={`<Button disabled>Disabled</Button>`}>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving
          </Button>
          <Button variant="outline" size="icon" disabled aria-label="Loading">
            <Spinner />
          </Button>
        </Specimen>
      </div>
      <Specimen
        title="Button group"
        code={`<ButtonGroup>\n  <Button variant="outline">Left</Button>\n  <Button variant="outline">Right</Button>\n</ButtonGroup>`}
        previewClassName="gap-6"
      >
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary">Save</Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="icon" aria-label="More">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical">
          <Button variant="outline">Top</Button>
          <Button variant="outline">Bottom</Button>
        </ButtonGroup>
      </Specimen>
    </Section>
  )
}

export function BadgeSection() {
  const variants = [
    "default",
    "secondary",
    "destructive",
    "success",
    "warning",
    "info",
    "outline",
    "ghost",
    "link",
  ] as const
  return (
    <Section
      id="badge"
      title="Badge"
      description="Compact status and category labels."
    >
      <Specimen
        title="Variants"
        code={`<Badge variant="success">Success</Badge>`}
      >
        {variants.map((v) => (
          <Badge key={v} variant={v}>
            {v}
          </Badge>
        ))}
      </Specimen>
      <Specimen title="With icon">
        <Badge variant="success">
          <CheckCircle2Icon data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="warning">
          <TriangleAlertIcon data-icon="inline-start" />
          Pending
        </Badge>
      </Specimen>
    </Section>
  )
}

export function AlertSection() {
  return (
    <Section
      id="alert"
      title="Alert"
      description="Inline messages for context and feedback."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="info">
          <InfoIcon />
          <AlertTitle>New version available</AlertTitle>
          <AlertDescription>
            Refresh the page to get the latest.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <CheckCircle2Icon />
          <AlertTitle>Changes saved</AlertTitle>
          <AlertDescription>Your profile is up to date.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <TriangleAlertIcon />
          <AlertTitle>Storage almost full</AlertTitle>
          <AlertDescription>You have used 92% of your quota.</AlertDescription>
        </Alert>
        <Alert variant="destructive" className="lg:col-span-2">
          <XCircleIcon />
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>
            Check your card details and try again.
          </AlertDescription>
        </Alert>
      </div>
      <pre className="overflow-x-auto rounded-xl border bg-muted px-4 py-3 font-mono text-xs text-muted-foreground">
        <code>{`<Alert variant="success">\n  <CheckCircle2Icon />\n  <AlertTitle>Changes saved</AlertTitle>\n  <AlertDescription>Your profile is up to date.</AlertDescription>\n</Alert>`}</code>
      </pre>
    </Section>
  )
}

export function CardSection() {
  return (
    <Section
      id="card"
      title="Card"
      description="Grouped content with header, action, content and footer slots."
    >
      <Specimen
        title="Anatomy"
        previewClassName="bg-muted"
        code={`<Card>\n  <CardHeader>\n    <CardTitle />\n    <CardDescription />\n    <CardAction />\n  </CardHeader>\n  <CardContent />\n  <CardFooter />\n</Card>`}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Team plan</CardTitle>
            <CardDescription>Billed monthly, cancel anytime.</CardDescription>
            <CardAction>
              <Badge variant="secondary">Popular</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Unlimited projects, shared workspaces and priority support for up
              to ten members.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button>Upgrade</Button>
            <Button variant="outline">Compare plans</Button>
          </CardFooter>
        </Card>
      </Specimen>
    </Section>
  )
}

export function ToggleSection() {
  return (
    <Section
      id="toggle"
      title="Toggle and ToggleGroup"
      description="Pressable buttons that hold state."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="Toggle"
          code={`<Toggle aria-label="Bold"><BoldIcon /></Toggle>`}
        >
          <Toggle aria-label="Bold">
            <BoldIcon />
          </Toggle>
          <Toggle variant="outline" aria-label="Italic" defaultPressed>
            <ItalicIcon />
          </Toggle>
          <Toggle variant="outline">
            <BellIcon data-icon="inline-start" />
            Notify
          </Toggle>
          <Toggle disabled aria-label="Disabled">
            <UnderlineIcon />
          </Toggle>
        </Specimen>
        <Specimen
          title="ToggleGroup"
          code={`<ToggleGroup type="multiple" variant="outline">\n  <ToggleGroupItem value="bold" />\n</ToggleGroup>`}
        >
          <ToggleGroup
            type="multiple"
            variant="outline"
            defaultValue={["bold"]}
          >
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" defaultValue="list">
            <ToggleGroupItem value="list">List</ToggleGroupItem>
            <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
          </ToggleGroup>
        </Specimen>
      </div>
    </Section>
  )
}

export function BreadcrumbSection() {
  return (
    <Section
      id="breadcrumb"
      title="Breadcrumb"
      description="Shows the current location in a hierarchy."
    >
      <Specimen
        title="Default"
        code={`<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink>Home</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <span>Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <span>Projects</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Specimen>
    </Section>
  )
}

export function KbdSeparatorSection() {
  return (
    <Section
      id="kbd"
      title="Kbd and Separator"
      description="Keyboard hints and dividers."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="Kbd"
          code={`<KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup>`}
        >
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <Kbd>Esc</Kbd>
          <span className="text-sm text-muted-foreground">
            Press <Kbd>Enter</Kbd> to confirm
          </span>
        </Specimen>
        <Specimen
          title="Separator"
          code={`<Separator orientation="vertical" />`}
          previewClassName="block"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">AIOS Jam</p>
            <Separator />
            <div className="flex h-5 items-center gap-3 text-sm">
              <span>Docs</span>
              <Separator orientation="vertical" />
              <span>Source</span>
              <Separator orientation="vertical" />
              <span>Support</span>
            </div>
          </div>
        </Specimen>
      </div>
    </Section>
  )
}

export function AvatarSection() {
  return (
    <Section
      id="avatar"
      title="Avatar"
      description="Initials fallback, sizes, status badge and groups."
    >
      <Specimen
        title="Fallback, sizes and group"
        code={`<Avatar size="lg">\n  <AvatarFallback>AB</AvatarFallback>\n</Avatar>`}
        previewClassName="gap-6"
      >
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+4</AvatarGroupCount>
        </AvatarGroup>
      </Specimen>
    </Section>
  )
}

const invoices = [
  { id: "INV-001", status: "Paid", method: "Card", amount: "$250.00" },
  {
    id: "INV-002",
    status: "Pending",
    method: "Bank transfer",
    amount: "$150.00",
  },
  { id: "INV-003", status: "Failed", method: "Card", amount: "$350.00" },
  { id: "INV-004", status: "Paid", method: "PayPal", amount: "$450.00" },
]

export function TableSection() {
  return (
    <Section
      id="table"
      title="Table"
      description="Tabular data with caption, header and rows."
    >
      <Specimen
        title="Invoices"
        previewClassName="block overflow-x-auto"
        code={`<Table>\n  <TableHeader><TableRow><TableHead /></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell /></TableRow></TableBody>\n</Table>`}
      >
        <Table>
          <TableCaption>A list of recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      inv.status === "Paid"
                        ? "success"
                        : inv.status === "Failed"
                          ? "destructive"
                          : "warning"
                    }
                  >
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Specimen>
    </Section>
  )
}

export function FeedbackSection() {
  const [value, setValue] = useState(18)
  useEffect(() => {
    const id = window.setInterval(
      () => setValue((v) => (v >= 100 ? 8 : v + 14)),
      1500
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <Section
      id="progress"
      title="Progress, Skeleton and Spinner"
      description="Loading and progress feedback."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Specimen
          title="Progress"
          code={`<Progress value={60} />`}
          previewClassName="block"
        >
          <div className="flex flex-col gap-4">
            <Progress value={value} />
            <Progress value={60} />
          </div>
        </Specimen>
        <Specimen
          title="Skeleton"
          code={`<Skeleton className="h-4 w-40" />`}
          previewClassName="block"
        >
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-full max-w-48" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          </div>
        </Specimen>
        <Specimen
          title="Spinner"
          code={`<Spinner className="size-6" />`}
          previewClassName="gap-6"
        >
          <Spinner />
          <Spinner className="size-6" />
          <Spinner className="size-8 text-primary" />
        </Specimen>
      </div>
    </Section>
  )
}

const tags = Array.from({ length: 20 }, (_, i) => `release-v1.${i}.0`)

export function ScrollEmptySection() {
  return (
    <Section
      id="scroll-area"
      title="ScrollArea and Empty"
      description="Scrollable regions and zero-data placeholders."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="ScrollArea"
          code={`<ScrollArea className="h-48 w-full">...</ScrollArea>`}
          previewClassName="block"
        >
          <ScrollArea className="h-48 w-full rounded-lg border">
            <div className="p-4">
              <h4 className="mb-3 text-sm font-medium">Releases</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="py-2 font-mono text-sm">{tag}</div>
                  <Separator />
                </div>
              ))}
            </div>
          </ScrollArea>
        </Specimen>
        <Specimen
          title="EmptyState"
          code={`<EmptyState\n  icon={<InboxIcon />}\n  title="No messages"\n  description="..."\n  action={<Button>Compose</Button>}\n/>`}
          previewClassName="block"
        >
          <EmptyState
            icon={<InboxIcon />}
            title="No messages yet"
            description="When someone writes to you, the conversation will show up here."
            action={
              <Button size="sm">
                <SearchIcon data-icon="inline-start" />
                Browse people
              </Button>
            }
          />
        </Specimen>
      </div>
    </Section>
  )
}
