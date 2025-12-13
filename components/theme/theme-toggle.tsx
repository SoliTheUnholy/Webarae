"use client"
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import LiquidButton from "../glass-button/glass-button";
export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <LiquidButton
            onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
            }
        >
            <Sun className="h-4 w-4 scale-100 rotate-0 stroke-3 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 stroke-3 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </LiquidButton>
    );
}
