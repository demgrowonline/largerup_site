"use client";

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { ChevronDown, Plus, Minus } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-semibold text-white transition-all outline-none",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <Plus className="size-4 text-zinc-400 shrink-0 group-aria-expanded/accordion-trigger:hidden transition-transform" />
        <Minus className="size-4 text-zinc-400 shrink-0 hidden group-aria-expanded/accordion-trigger:inline transition-transform" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-xs sm:text-sm text-zinc-400 leading-relaxed px-5 sm:px-6 pb-6 border-t border-white/5 pt-4"
      {...props}
    >
      <div className={cn("[&_p:not(:last-child)]:mb-4", className)}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
