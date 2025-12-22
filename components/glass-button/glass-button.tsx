"use client";
import { Button } from "../ui/button";

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
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl !backdrop-blur-md ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
