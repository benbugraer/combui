"use client";

import { motion, useInView } from "framer-motion"; // Add useInView import
import { useRef } from "react";

import React from "react";

import { cn } from "@/lib/utils";

import Nextjs from "@/public/Icons/NextIcon";
import TypeScript from "@/public/Icons/TypeScriptIcon";
import TailwindCSS from "@/public/Icons/TailwindIcon";
import { SimpleIconsShadcnui } from "@/public/Icons/ShadcnIcon";
import { TablerBrandFramerMotion } from "@/public/Icons/MotionIcon";
import RadixUI from "@/public/Icons/RadixIcon";
import GridPattern from "@/components/ui/grid-pattern";

const ease = [0.16, 1, 0.3, 1];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 3, y: 0 } : { opacity: 0, y: -60 }}
      transition={{ duration: 1.4, ease }}
      className="flex flex-col justify-center items-center mt-44"
    >
      <h2 className="mt-2 font-semibold tracking-tight text-primary text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
        CombUI Creation Kit:
      </h2>
      <p className="mx-auto max-w-[500px] text-center mt-2 text-tertiary text-md">
        Your customers deserve a product built with the best technologies in our
        Nextjs Starter Kit
      </p>
      <div className="md:w-10/12 mt-6 mx-auto relative md:border-l-0 md:border-b-0 md:border-[1.2px] border-primary rounded-none -pr-2 mb-24">
        <div className="w-full md:mx-0">
          <div className="grid grid-cols-1 relative md:grid-rows-2 md:grid-cols-3 border-b-[1.2px] border-primary">
            <div className="hidden md:grid top-1/2 left-0 -translate-y-1/2 w-full grid-cols-3 z-10 pointer-events-none select-none absolute"></div>

            {techs.map((tech, index) => (
              <div
                key={tech.id}
                className={cn(
                  "justify-center border-l-[1.2px] md:min-h-[240px] border-t-[1.2px] md:border-t-0 border-primary transform-gpu flex flex-col p-10 bg-secondary",
                  index >= 3 && "md:border-t-[1.2px]"
                )}
              >
                <GridPattern
                  squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                  ]}
                  className={cn(
                    "[mask-image:radial-gradient(130px_circle_at_left,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 absolute"
                  )}
                />
                <div className="flex items-center gap-2 my-1">
                  <tech.icon className="w-7 h-7" />
                  <p className="text-secondary">{tech.label}</p>
                </div>
                <div className="mt-2">
                  <div className="max-w-full">
                    <div className="flex gap-3 ">
                      <p
                        className="max-w-lg text-xl font-normal tracking-tighter md:text-2xl text-primary"
                        dangerouslySetInnerHTML={{
                          __html: tech.title,
                        }}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-left text-tertiary">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const techs = [
  {
    id: 1,
    label: "Next.JS",
    title: "Best react framework for <strong>frontend</strong> development.",
    description:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
    icon: Nextjs,
  },
  {
    id: 2,
    label: "TypeScript",
    title: "Type-safe <strong>JavaScript</strong> language.",
    description:
      "TypeScript is a superset of JavaScript that adds static types to the language.",
    icon: TypeScript,
  },
  {
    id: 3,
    label: "Tailwind CSS",
    title: "A utility-first CSS framework.",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    icon: TailwindCSS,
  },
  {
    id: 4,
    label: "Shadcn",
    title: "Shadcn UI <strong>Components</strong>.",
    description:
      "Shadcn UI is a set of beautiful and accessible components for React.",
    icon: SimpleIconsShadcnui,
  },
  {
    id: 5,
    label: "Framer Motion",
    title: "Beautiful <strong>animations</strong> for your app",
    description:
      "Framer Motion is best animation library for React, it's easy to use and has a lot of features.",
    icon: TablerBrandFramerMotion,
  },
  {
    id: 6,
    label: "Radix UI",
    title: "Radix UI <strong>Components</strong>.",
    description:
      "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.",
    icon: RadixUI,
  },
];
