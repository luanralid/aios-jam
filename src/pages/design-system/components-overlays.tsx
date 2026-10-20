import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Section } from "@/components/layout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Specimen } from "./specimen"

export function TabsAccordionSection() {
  return (
    <Section
      id="tabs"
      title="Tabs and Accordion"
      description="Switch between views or reveal content progressively."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="Tabs"
          code={`<Tabs defaultValue="account">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account" />\n</Tabs>`}
          previewClassName="block"
        >
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent
              value="account"
              className="pt-3 text-sm text-muted-foreground"
            >
              Update your name, email and profile picture.
            </TabsContent>
            <TabsContent
              value="password"
              className="pt-3 text-sm text-muted-foreground"
            >
              Change your password and review active sessions.
            </TabsContent>
            <TabsContent
              value="billing"
              className="pt-3 text-sm text-muted-foreground"
            >
              Manage your plan and payment methods.
            </TabsContent>
          </Tabs>
        </Specimen>
        <Specimen
          title="Accordion"
          code={`<Accordion type="single" collapsible>\n  <AccordionItem value="a">\n    <AccordionTrigger />\n    <AccordionContent />\n  </AccordionItem>\n</Accordion>`}
          previewClassName="block"
        >
          <Accordion type="single" collapsible defaultValue="a">
            <AccordionItem value="a">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It follows the WAI-ARIA accordion pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Is it themeable?</AccordionTrigger>
              <AccordionContent>
                Every color comes from the design tokens.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionTrigger>Can I customize it?</AccordionTrigger>
              <AccordionContent>
                Components live in your repo, so edit them freely.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Specimen>
      </div>
    </Section>
  )
}

export function DialogsSection() {
  return (
    <Section
      id="dialog"
      title="Dialog, AlertDialog and Sheet"
      description="Modal surfaces for focused tasks and confirmations."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Specimen
          title="Dialog"
          code={`<Dialog>\n  <DialogTrigger asChild><Button /></DialogTrigger>\n  <DialogContent>...</DialogContent>\n</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile. Save when you are done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ds-dialog-name">Name</FieldLabel>
                  <Input id="ds-dialog-name" defaultValue="Ada Lovelace" />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Specimen>
        <Specimen
          title="AlertDialog"
          code={`<AlertDialog>\n  <AlertDialogTrigger asChild />\n  <AlertDialogContent>...</AlertDialogContent>\n</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete project</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <Trash2Icon />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. All files will be removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Specimen>
        <Specimen
          title="Sheet"
          code={`<Sheet>\n  <SheetTrigger asChild />\n  <SheetContent side="right">...</SheetContent>\n</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>
                  Choose how you want to be notified.
                </SheetDescription>
              </SheetHeader>
              <div className="px-4 text-sm text-muted-foreground">
                Sheets slide in from any edge and keep the page context visible.
              </div>
              <SheetFooter>
                <Button>Save</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Specimen>
      </div>
    </Section>
  )
}

export function PopupsSection() {
  return (
    <Section
      id="dropdown-menu"
      title="DropdownMenu, Popover, Tooltip and HoverCard"
      description="Floating surfaces anchored to a trigger."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="DropdownMenu"
          code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild />\n  <DropdownMenuContent>\n    <DropdownMenuItem />\n  </DropdownMenuContent>\n</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <UserIcon />
                  Profile
                  <DropdownMenuShortcut>Ctrl P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCardIcon />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Specimen>
        <Specimen
          title="Popover"
          code={`<Popover>\n  <PopoverTrigger asChild />\n  <PopoverContent>...</PopoverContent>\n</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Dimensions</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>
                  Set the size of the layer.
                </PopoverDescription>
              </PopoverHeader>
              <Field>
                <FieldLabel htmlFor="ds-pop-width">Width</FieldLabel>
                <Input id="ds-pop-width" defaultValue="100%" />
              </Field>
            </PopoverContent>
          </Popover>
        </Specimen>
        <Specimen
          title="Tooltip"
          code={`<Tooltip>\n  <TooltipTrigger asChild />\n  <TooltipContent>Hint</TooltipContent>\n</Tooltip>`}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Focus me</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Also on keyboard focus
            </TooltipContent>
          </Tooltip>
        </Specimen>
        <Specimen
          title="HoverCard"
          code={`<HoverCard>\n  <HoverCardTrigger asChild />\n  <HoverCardContent>...</HoverCardContent>\n</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="px-0">
                @aios-jam
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-medium">AIOS Jam</h4>
                  <p className="text-sm text-muted-foreground">
                    A web app starter with a ready-to-use design system.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Specimen>
      </div>
    </Section>
  )
}

export function ToastSection() {
  return (
    <Section
      id="toast"
      title="Toasts"
      description="Transient notifications powered by Sonner."
    >
      <Specimen
        title="Triggers"
        code={`import { toast } from "sonner"\n\ntoast.success("Changes saved")`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast("Event created", { description: "Friday at 9:00 AM" })
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Changes saved")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Something went wrong")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.info("A new version is available")}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Storage almost full")}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 1800)), {
              loading: "Uploading file...",
              success: "Upload complete",
              error: "Upload failed",
            })
          }
        >
          Promise
        </Button>
      </Specimen>
    </Section>
  )
}
