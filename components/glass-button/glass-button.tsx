"use client";

import { LiquidGlass } from "@liquidglass/react";
import { Button } from "../ui/button";
import * as React from "react";
import { useTheme } from "next-themes";

const GlassButton = ({
    className,
    children,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> & {
    asChild?: boolean;
    children: React.ReactNode;
}) => {
    const { theme } = useTheme();
    return (
        <div>
            <LiquidGlass
                className="transition-all duration-300 hover:brightness-150"
                borderRadius={9999}
                blur={0.25}
                contrast={1.25}
                brightness={1.25}
                saturation={1.25}
                shadowIntensity={0.25}
                elasticity={1}
            >
                <Button
                    variant="outline"
                    className={`!rounded-full !bg-transparent ${className}`}
                    {...props}
                >
                    {children}
                </Button>
            </LiquidGlass>
        </div>
    );
};

export default GlassButton;
