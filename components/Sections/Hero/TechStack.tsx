"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import TypeScript from "@/public/Icons/TypeScriptIcon";
import Nextjs from "@/public/Icons/NextIcon";
import TailwindCSS from "@/public/Icons/TailwindIcon";
import { SimpleIconsShadcnui } from "@/public/Icons/ShadcnIcon";
import { TablerBrandFramerMotion } from "@/public/Icons/MotionIcon";
import RadixUI from "@/public/Icons/RadixIcon";
import { motion, useInView } from "framer-motion"; // Add useInView import
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 3, y: 0 } : { opacity: 0, y: -60 }}
      transition={{ duration: 4, ease }}
      className="flex flex-col justify-center items-center mt-44"
    >
      <h2 className="mt-2 font-semibold tracking-tight text-primary text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
        CombUI Creation Kit:
      </h2>
      <p className="mx-auto max-w-[500px] text-center mt-2 text-tertiary text-md">
        Your customers deserve a product built with the best technologies in our
        Nextjs Starter Kit
      </p>
      <HoverEffect items={projects} />
    </motion.div>
  );
}

export const projects = [
  {
    title: "NextJS",
    icon: <Nextjs className="w-7 h-7" />,
    description:
      "A React framework that enables functionality such as server-side rendering and generating static websites.",
    link: "https://nextjs.org",
  },
  {
    title: "TypeScript",
    icon: <TypeScript className="w-7 h-7" />,
    description:
      "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    link: "https://www.typescriptlang.org",
  },
  {
    title: "Tailwind CSS",
    icon: <TailwindCSS className="w-7 h-7" />,
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    link: "https://tailwindcss.com",
  },
  {
    title: "ShadcnUI",
    icon: <SimpleIconsShadcnui className="w-7 h-7" />,
    description:
      "A collection of beautifully designed components built with Radix UI and Tailwind CSS.",
    link: "https://ui.shadcn.com/",
  },
  {
    title: "Framer Motion",
    icon: <TablerBrandFramerMotion className="w-7 h-7" />,
    description:
      "A production-ready motion library for React that makes it easy to create animations and interactions.",
    link: "https://motion.dev/",
  },
  {
    title: "RadixUI",
    icon: <RadixUI className="w-7 h-7" />,
    description:
      "A set of React components that provide a consistent, accessible, and customizable user interface.",
    link: "https://www.radix-ui.com",
  },
];
