"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = Readonly<{
  href: string;
  children: ReactNode;
}>;

export default function NavLinks({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-1.5 rounded-lg text-sm font-light hover:text-primary transition-all duration-300 hover:duration-300 hover:transition-all ease-linear",
        active ? "text-primary" : "text-tertiary "
      )}
    >
      {children}
    </Link>
  );
}
