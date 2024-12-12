"use client";
import { useRef } from "react";
import { Plus, Copy } from "lucide-react";
import { SolarLibraryBold } from "@/public/Icons/LibraryIcon";
import { ClarityBlocksGroupSolid } from "@/public/Icons/ComponentsIcon";
import { UisWebGrid } from "@/public/Icons/WebIcon";
import { motion, useInView } from "framer-motion"; // Add useInView import
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
    name: "Beautiful and performant components",
    description:
      "CombUI is built with performance in mind. With a minimal footprint and efficient code, your application will be much more good looking.",
    icon: ClarityBlocksGroupSolid,
  },
  {
    id: "2",
    name: "Different UI libraries working together",
    description:
      "By combining different UI libraries, we create much better components and therefore much better looks for your projects.",
    icon: SolarLibraryBold,
  },
  {
    id: "3",
    name: "Cust copy and paste",
    description:
      "Just copy and paste the components you want to use and customize for your needs.",
    icon: Copy,
  },
  {
    id: "4",
    name: "Ready-made website blocks ",
    description:
      "Quickly build your own website with ready-made website blocks. Remember you can customize them according to your own requirements.",
    icon: UisWebGrid,
  },
];
const ease = [0.16, 1, 0.3, 1];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 3, y: 0 } : { opacity: 0, y: -60 }}
      transition={{ duration: 4, ease }}
      className="overflow-hidden mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 font-semibold tracking-tight text-2xl">
                Best way to look good in your projects with CombUI
              </h1>
              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                CombUI is a modern UI component library for Next.js
                applications.
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
                        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                          <span className="flex items-center gap-3">
                            <span
                              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-secondary"
                              aria-hidden="true"
                            >
                              <feature.icon
                                size={16}
                                strokeWidth={2}
                                className="opacity-60 w-5 h-5"
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
    </motion.div>
  );
}
