"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Nextjs from "@/public/Icons/NextIcon";
import React from "@/public/Icons/ReactIcon";
import TypeScript from "@/public/Icons/TypeScriptIcon";
import { TablerBrandFramerMotion } from "@/public/Icons/MotionIcon";
import { SimpleIconsShadcnui } from "@/public/Icons/ShadcnIcon";
import TailwindCSS from "@/public/Icons/TailwindIcon";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "../../ui/animated-tooltip";
import { QlementineIconsBlocks16 } from "@/public/Icons/BlocksIcon";
import { ClarityBlocksGroupSolid } from "@/public/Icons/ComponentsIcon";
import Features from "./Features";

const ease = [0.16, 1, 0.3, 1];

function HeroCreated() {
  const bugra = [
    {
      id: 1,
      name: "Bugra Er",
      designation: "Frontend Developer",
      image: "https://avatars.githubusercontent.com/u/160940880",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="flex items-center mb-6"
    >
      <div className="flex gap-5">
        <div className="flex flex-row items-center justify-center ">
          <AnimatedTooltip items={bugra} />
        </div>
        <div className="z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-secondary  text-base  transition-all ease-in hover:cursor-pointer bg-black dark:bg-white dark:hover:bg-tertiary hover:bg-tertiary"
            )}
          >
            <div className="inline-flex text-xs lg:text-sm items-center justify-center px-4 py-1 transition ease-out text-white dark:text-black group-hover:text-primary group-hover:dark:text-primary">
              <span>
                {" "}
                Created By{" "}
                <a
                  href="https://github.com/benbugraer"
                  target="_blank"
                  className="font-bold"
                >
                  Bugra Er
                </a>
              </span>
              <MoveRight className="ml-3 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {["Beatiful", "UI", "Components", "For", "Your", "Website"].map(
          (text, index) => (
            <motion.span
              key={index}
              className="inline-block px-1 md:px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease,
              }}
            >
              {text}
            </motion.span>
          )
        )}
      </motion.h1>
      <motion.div className="mx-auto max-w-xl text-center leading-7 text-muted-foreground flex">
        <motion.span
          className="flex gap-2"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.6,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {[
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
              color: "text-[#000] dark:text-[#fff] ",
              title: "Framer Motion",
            },
          ].map(({ Icon, href, color, title }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease }}
            >
              <Link href={href} target="_blank" title={title}>
                <Icon
                  className={`w-6 h-6 ${color} hover:opacity-80 transition-opacity`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.span>
      </motion.div>
    </div>
  );
}

function HeroCTA() {
  return (
    <motion.div
      className="flex gap-3"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 2.0, // Start after icons animation
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: ease }}
      >
        <Link href="/docs/introduction" prefetch={true}>
          <Button className="group rounded-full  mx-auto mt-3 flex max-w-2xl items-center justify-center sm:mt-6 sm:flex-row sm:space-x-4 sm:space-y-0 bg-black text-white hover:bg-tertiary hover:text-primary dark:bg-white dark:text-black dark:hover:bg-tertiary dark:hover:text-primary duration-500 ease-linear transition-all hover:transition-colors hover:duration-300">
            <ClarityBlocksGroupSolid
              className="-ms-1 me-2 "
              strokeWidth={2}
              aria-hidden="true"
            />
            Components
            <MoveRight
              className="-me-1 ms-2  transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </Link>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: ease }}
      >
        <Link href="/blocks" prefetch={true}>
          <Button className="group rounded-full  mx-auto mt-3 flex max-w-2xl  items-center justify-center sm:mt-6 sm:flex-row sm:space-x-4 sm:space-y-0 bg-black text-white hover:bg-tertiary hover:text-primary dark:bg-white dark:text-black dark:hover:bg-tertiary dark:hover:text-primary duration-500 ease-linear transition-all hover:transition-colors hover:duration-300">
            <QlementineIconsBlocks16
              className="-ms-1 me-2"
              strokeWidth={2}
              aria-hidden="true"
            />
            Blocks
            <MoveRight
              className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-16 sm:px-6 sm:pt-24 md:pt-24 lg:px-8 ">
        <HeroCreated />
        <HeroTitles />
        <HeroCTA />
        <Features />
      </div>
    </section>
  );
}
