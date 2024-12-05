"use client";

import { useState, useEffect, SetStateAction } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: SetStateAction<string>) => {
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="inline-flex items-center space-x-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted"
        >
          {theme === "light" && <Sun className="h-4 w-4 " />}
          {theme === "dark" && <Moon className="h-4 w-4" />}
          {theme === "system" && <Monitor className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-[4.7rem] space-y-1">
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className={theme === "light" ? "bg-tertiary" : ""}
        >
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 font-light" />
            <span>Light</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className={theme === "dark" ? "bg-tertiary" : ""}
        >
          <div className="flex items-center space-x-2">
            <Moon className="h-4 w-4 font-light" />
            <span>Dark</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("system")}
          className={theme === "system" ? "bg-tertiary" : ""}
        >
          <div className="flex items-center space-x-2">
            <Monitor className="h-4 w-4 font-light" />
            <span>System</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
