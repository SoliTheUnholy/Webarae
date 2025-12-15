import { LiquidGlass } from "@/components/ui/glass";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

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
    children,
    onClick,
}: {
    children: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement | null>;
    onClick?: () => void;
}) {
    const navTopButtonBlur = useSpring(1, GLASS_EFFECTS.SPRING_CONFIG);

    const navTopButtonRefractiveIndex = useSpring(
        GLASS_EFFECTS.NAV_REFRACTIVE_INDEX,
        GLASS_EFFECTS.SPRING_CONFIG,
    );

    const handleLoad = () => {
        setTimeout(() => {
            navTopButtonRefractiveIndex.set(
                GLASS_EFFECTS.NAV_REFRACTIVE_INDEX_DEFAULT,
            );
        }, 3000);
    };

    const handleTopNavHover = (isHovered: boolean) => {
        navTopButtonBlur.set(
            isHovered
                ? GLASS_EFFECTS.NAV_BLUR_HOVER
                : GLASS_EFFECTS.NAV_BLUR_DEFAULT,
        );
        navTopButtonRefractiveIndex.set(
            isHovered
                ? GLASS_EFFECTS.NAV_REFRACTIVE_INDEX_HOVER
                : GLASS_EFFECTS.NAV_REFRACTIVE_INDEX_DEFAULT,
        );
    };

    return (
        <LiquidGlass
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl"
            onClick={onClick}
            onReady={handleLoad}
            onMouseEnter={() => handleTopNavHover(true)}
            onMouseLeave={() => handleTopNavHover(false)}
            glassThickness={50}
            bezelWidth={25}
            refractiveIndex={navTopButtonRefractiveIndex}
            blur={navTopButtonBlur}
            specularOpacity={1}
        >
            {children}
        </LiquidGlass>
    );
}
