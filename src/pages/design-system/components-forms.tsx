import { AtSignIcon, CopyIcon, SearchIcon } from "lucide-react"
import { useState } from "react"

import { Section } from "@/components/layout"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import { Specimen } from "./specimen"

const fieldCode = `<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" aria-invalid />
  <FieldError>Enter a valid email.</FieldError>
</Field>`

export function FormsSection() {
  const [volume, setVolume] = useState([40])

  return (
    <Section
      id="forms"
      title="Form fields"
      description="Inputs composed with Field for labels, descriptions and error states."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Specimen
          title="Input and Textarea"
          code={fieldCode}
          previewClassName="block"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ds-name">Full name</FieldLabel>
              <Input id="ds-name" placeholder="Ada Lovelace" />
              <FieldDescription>As it appears on your ID.</FieldDescription>
            </Field>
            <Field data-invalid>
              <FieldLabel htmlFor="ds-email">Email</FieldLabel>
              <Input
                id="ds-email"
                type="email"
                defaultValue="ada@example"
                aria-invalid
              />
              <FieldError>Enter a valid email address.</FieldError>
            </Field>
            <Field data-disabled>
              <FieldLabel htmlFor="ds-disabled">Disabled</FieldLabel>
              <Input id="ds-disabled" placeholder="Not editable" disabled />
            </Field>
            <Field>
              <FieldLabel htmlFor="ds-bio">Bio</FieldLabel>
              <Textarea id="ds-bio" placeholder="Tell us about yourself" />
            </Field>
          </FieldGroup>
        </Specimen>

        <Specimen
          title="Select"
          code={`<Select>\n  <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>\n  <SelectContent><SelectItem value="a">A</SelectItem></SelectContent>\n</Select>`}
          previewClassName="block"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ds-select">Role</FieldLabel>
              <Select>
                <SelectTrigger id="ds-select" className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Roles</SelectLabel>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldDescription>Controls what you can edit.</FieldDescription>
            </Field>
            <Field data-invalid>
              <FieldLabel htmlFor="ds-select-error">Country</FieldLabel>
              <Select>
                <SelectTrigger
                  id="ds-select-error"
                  className="w-full"
                  aria-invalid
                >
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="br">Brazil</SelectItem>
                  <SelectItem value="pt">Portugal</SelectItem>
                </SelectContent>
              </Select>
              <FieldError>Select a country to continue.</FieldError>
            </Field>
            <Field data-disabled>
              <FieldLabel htmlFor="ds-select-disabled">Plan</FieldLabel>
              <Select disabled>
                <SelectTrigger id="ds-select-disabled" className="w-full">
                  <SelectValue placeholder="Locked" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </Specimen>

        <Specimen
          title="Checkbox and Switch"
          code={`<Field orientation="horizontal">\n  <Checkbox id="terms" />\n  <FieldLabel htmlFor="terms">Accept terms</FieldLabel>\n</Field>`}
          previewClassName="block"
        >
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="ds-terms" defaultChecked />
              <FieldContent>
                <FieldLabel htmlFor="ds-terms">Accept terms</FieldLabel>
                <FieldDescription>
                  You agree to our terms of service.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal" data-invalid>
              <Checkbox id="ds-privacy" aria-invalid />
              <FieldContent>
                <FieldLabel htmlFor="ds-privacy">
                  Accept privacy policy
                </FieldLabel>
                <FieldError>This is required.</FieldError>
              </FieldContent>
            </Field>
            <Field orientation="horizontal" data-disabled>
              <Checkbox id="ds-cb-disabled" disabled />
              <FieldLabel htmlFor="ds-cb-disabled">Disabled option</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Switch id="ds-airplane" />
              <FieldLabel htmlFor="ds-airplane">Airplane mode</FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled>
              <Switch id="ds-switch-disabled" disabled defaultChecked />
              <FieldLabel htmlFor="ds-switch-disabled">
                Disabled switch
              </FieldLabel>
            </Field>
          </FieldGroup>
        </Specimen>

        <Specimen
          title="RadioGroup"
          code={`<RadioGroup defaultValue="comfortable">\n  <RadioGroupItem value="compact" />\n</RadioGroup>`}
          previewClassName="block"
        >
          <FieldSet>
            <FieldLegend variant="label">Density</FieldLegend>
            <RadioGroup defaultValue="comfortable">
              <Field orientation="horizontal">
                <RadioGroupItem value="compact" id="ds-r1" />
                <FieldLabel htmlFor="ds-r1">Compact</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="comfortable" id="ds-r2" />
                <FieldLabel htmlFor="ds-r2">Comfortable</FieldLabel>
              </Field>
              <Field orientation="horizontal" data-disabled>
                <RadioGroupItem value="spacious" id="ds-r3" disabled />
                <FieldLabel htmlFor="ds-r3">Spacious</FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>
          <FieldSet className="mt-6">
            <FieldLegend variant="label">Plan</FieldLegend>
            <RadioGroup defaultValue="pro">
              <FieldLabel htmlFor="ds-plan-pro">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Pro</FieldTitle>
                    <FieldDescription>For growing teams.</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="pro" id="ds-plan-pro" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="ds-plan-free">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Free</FieldTitle>
                    <FieldDescription>For personal projects.</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="free" id="ds-plan-free" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </Specimen>

        <Specimen
          title="Slider"
          code={`<Slider value={value} onValueChange={setValue} max={100} />`}
          previewClassName="block"
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ds-volume">
                Volume
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {volume[0]}
                </span>
              </FieldLabel>
              <Slider
                id="ds-volume"
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
              />
            </Field>
            <Field data-disabled>
              <FieldLabel htmlFor="ds-slider-disabled">Disabled</FieldLabel>
              <Slider id="ds-slider-disabled" defaultValue={[60]} disabled />
            </Field>
          </FieldGroup>
        </Specimen>

        <Specimen
          title="InputGroup"
          code={`<InputGroup>\n  <InputGroupAddon><SearchIcon /></InputGroupAddon>\n  <InputGroupInput placeholder="Search" />\n</InputGroup>`}
          previewClassName="block"
        >
          <FieldGroup>
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search" aria-label="Search" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon>
                <AtSignIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="username" aria-label="Username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>@example.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput
                readOnly
                value="https://example.com/invite/abc"
                aria-label="Invite link"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput
                disabled
                placeholder="Disabled"
                aria-label="Disabled"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupInput
                aria-invalid
                defaultValue="invalid value"
                aria-label="Invalid"
              />
            </InputGroup>
          </FieldGroup>
        </Specimen>
      </div>
    </Section>
  )
}
