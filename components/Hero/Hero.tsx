"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiShadcnui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden">
      <motion.h1
        className="text-center text-4xl  font-medium leading-tight sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {["Beatiful", "UI", "Components", "For", "Your", "Websites"].map(
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4, // Increased delay to appear after title
            duration: 0.8,
            ease,
          }}
          className="mr-3"
        >
          Beatiful components with:
        </motion.span>

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
              Icon: RiNextjsFill,
              href: "https://nextjs.org/",
              color: "text-black dark:text-white",
            },
            {
              Icon: IoLogoReact,
              href: "https://react.dev/",
              color: "text-[#61DAFB]",
            },
            {
              Icon: BiLogoTypescript,
              href: "https://www.typescriptlang.org/",
              color: "text-[#3178C6]",
            },
            {
              Icon: SiTailwindcss,
              href: "https://tailwindcss.com/",
              color: "text-[#06B6D4]",
            },
            {
              Icon: SiShadcnui,
              href: "https://ui.shadcn.com/",
              color: "text-black dark:text-white",
            },
            {
              Icon: TbBrandFramerMotion,
              href: "https://www.framer.com/motion/",
              color: "text-[#000] dark:text-[#fff] ",
            },
          ].map(({ Icon, href, color }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease }}
            >
              <Link href={href} target="_blank">
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

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-16 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroTitles />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
