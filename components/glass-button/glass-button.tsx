"use client";
import { Button } from "../ui/button";

// Glass effect constants - easy to adjust for different interaction states
const GLASS_EFFECTS = {
    // Navigation buttons
    NAV_BLUR_DEFAULT: 0.5,
    NAV_BLUR_HOVER: 1,
    NAV_REFRACTIVE_INDEX: 1,
    NAV_REFRACTIVE_INDEX_DEFAULT: 1.5,
    NAV_REFRACTIVE_INDEX_HOVER: 3,
    // Animation settings
    SPRING_CONFIG: { stiffness: 200, damping: 30 },
} as const;

export default function LiquidButton({
    className,
    children,
    onClick,
}: {
    className?: string;
    children: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement | null>;
    onClick?: () => void;
}) {
    return (
        <Button
            variant={"outline"}
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
