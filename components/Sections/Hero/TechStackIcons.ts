/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";
import Nextjs from "@/public/Icons/NextIcon";
import React from "@/public/Icons/ReactIcon";
import TypeScript from "@/public/Icons/TypeScriptIcon";
import TailwindCSS from "@/public/Icons/TailwindIcon";
import { TablerBrandFramerMotion } from "@/public/Icons/MotionIcon";
import { SimpleIconsShadcnui } from "@/public/Icons/ShadcnIcon";

interface TechStackIcon {
  Icon: ComponentType<any>;
  href: string;
  color: string;
  title: string;
}

export const techStackIcons: TechStackIcon[] = [
  {
    Icon: Nextjs,
    href: "https://nextjs.org/",
    color: "text-black dark:text-white",
    title: "Next.js",
  },
  {
    Icon: React,
    href: "https://react.dev/",
    color: "text-[#61DAFB]",
    title: "React.js",
  },
  {
    Icon: TypeScript,
    href: "https://www.typescriptlang.org/",
    color: "text-[#3178C6]",
    title: "Typescript",
  },
  {
    Icon: TailwindCSS,
    href: "https://tailwindcss.com/",
    color: "text-[#06B6D4]",
    title: "Tailwind CSS",
  },
  {
    Icon: SimpleIconsShadcnui,
    href: "https://ui.shadcn.com/",
    color: "text-black dark:text-white",
    title: "Shadcn UI",
  },
  {
    Icon: TablerBrandFramerMotion,
    href: "https://www.framer.com/motion/",
    color: "text-[#000] dark:text-[#fff]",
    title: "Framer Motion",
  },
] as const;
