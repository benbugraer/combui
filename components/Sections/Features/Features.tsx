import { Computer, Network, Plus } from "lucide-react";
import { Building2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FeatureCircle } from "./FeatureCircle";

const features = [
  {
    id: "1",
    name: "Build faster.",
    description:
      "Get up and running in no time with pre-configured settings and best practices. Say goodbye to setup and focus on what truly matters - building your application.",
    icon: Computer,
  },
  {
    id: "2",
    name: "Focus on business logic.",
    description:
      "Concentrate on solving business problems instead of dealing with the repetitive setup.",
    icon: Building2,
  },
  {
    id: "3",
    name: "Ready for scale.",
    description:
      "Prepare for growth from day one. With built-in optimizations and scalable architecture, your application will be ready to handle increased traffic and complexity.",
    icon: Network,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 font-semibold tracking-tight dark:text-white text-gray-900">
                Nextjs Starter Kit: A faster way to production
              </p>
              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                Accelerate your development with this powerful Nextjs Starter
                Kit
              </p>
              <div className="mt-10">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="1"
                >
                  {features.map((feature) => (
                    <AccordionItem
                      value={feature.id}
                      key={feature.id}
                      className="py-2"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&[data-state=open]>svg]:rotate-180">
                          <span className="flex items-center gap-3">
                            <span
                              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border"
                              aria-hidden="true"
                            >
                              <feature.icon
                                size={16}
                                strokeWidth={2}
                                className="opacity-60"
                              />
                            </span>
                            <span className="flex flex-col space-y-1">
                              <span className="dark:text-gray-100 text-gray-900">
                                {feature.name}
                              </span>
                            </span>
                          </span>
                          <Plus
                            size={16}
                            strokeWidth={2}
                            className="shrink-0 opacity-60 transition-transform duration-200"
                            aria-hidden="true"
                          />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="ms-3 pb-2 ps-10 text-muted-foreground dark:text-gray-400">
                        {feature.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <FeatureCircle />
        </div>
      </div>
    </div>
  );
}
