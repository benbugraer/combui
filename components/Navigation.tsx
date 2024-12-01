"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavLinks from "./NavigationLinks";
import Github from "@/public/Icons/GithubIcon";
import XformerlyTwitter from "@/public/Icons/XIcon";
import { MobileNavigation } from "./MobileNavigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Blocks", href: "/blocks" },
];

const social = [
  {
    url: "https://github.com/benbugraer",
    icon: <Github className="w-4 h-4" />,
  },
  {
    url: "https://x.com/benbugraer",
    icon: <XformerlyTwitter className="w-4 h-4" />,
  },
];

export default function Navigation() {
  return (
    <header
      className="bg-tertiary  lg:rounded-full lg:w-8/12 w-full  mx-auto lg:my-6 top-0 sticky z-40  backdrop-blur-xl animate-in-reverse shadow-xl"
      style={{ "--index": 0 } as CSSProperties}
    >
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-2xl"></hr>

      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="relative text-lg font-normal tracking-tighter flex items-center space-x-0"
        >
          <span className="text-primary">
            Comb<span className="font-black">UI</span>
          </span>
        </Link>
        <nav className="hidden xl:flex items-center ml-12 text-sm font-medium">
          <ul className="hidden md:flex gap-1 items-center">
            {navItems.map((items) => (
              <li key={items.href}>
                <NavLinks href={items.href}>{items.label}</NavLinks>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex  items-center justify-end ml-auto">
          {social.map((social) => (
            <a
              target="_blank"
              key={social.url}
              href={social.url}
              className="inline-flex text-tertiary items-center justify-center  text-sm font-medium transition-colors  rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary duration-500 hover:duration-500 hover:text-accent-foreground h-9 py-2 w-9"
            >
              {social.icon}
            </a>
          ))}
          <div className="ml-2">
            <ThemeSwitcher />
          </div>
        </nav>
        <div className="lg:hidden flex ml-2">
          <MobileNavigation />
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-2xl"></hr>
    </header>
  );
}
