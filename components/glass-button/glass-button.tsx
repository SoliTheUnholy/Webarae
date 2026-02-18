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
        variant={"secondary"}
            className={`flex h-12 w-12 bg cursor-pointer items-center justify-center rounded-2xl !backdrop-blur-md md:rounded-xl ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
