import { LiquidGlass } from "@/components/ui/glass";
import { useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

// Glass effect constants - easy to adjust for different interaction states
const GLASS_EFFECTS = {
    // Navigation buttons
    NAV_BLUR_DEFAULT: 0,
    NAV_BLUR_HOVER: 1.5,
    NAV_REFRACTIVE_INDEX_DEFAULT: 1.4,
    NAV_REFRACTIVE_INDEX_HOVER: 3,
    // Bottom bar
    BOTTOM_BAR_BLUR_DEFAULT: 0,
    BOTTOM_BAR_BLUR_HOVER: 0.8,
    BOTTOM_BAR_BLUR_SEARCH_FOCUSED: 3.5,
    BOTTOM_BAR_REFRACTIVE_INDEX_DEFAULT: 1.4,
    BOTTOM_BAR_REFRACTIVE_INDEX_HOVER: 2,
    BOTTOM_BAR_REFRACTIVE_INDEX_SEARCH_FOCUSED: 3,
    // Animation settings
    SPRING_CONFIG: { stiffness: 300, damping: 30 },
} as const;

export default function LiquidButton({
    children,
    ref,
    onClick,
}: {
    children: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement | null>;
    onClick?: () => void;
}) {
    // Motion values for interactive glass effects
    // Navigation buttons
    const navTopButtonBlur = useSpring(
        GLASS_EFFECTS.NAV_BLUR_DEFAULT,
        GLASS_EFFECTS.SPRING_CONFIG,
    );
    const navTopButtonRefractiveIndex = useSpring(
        GLASS_EFFECTS.NAV_REFRACTIVE_INDEX_DEFAULT,
        GLASS_EFFECTS.SPRING_CONFIG,
    );
    const navBottomButtonBlur = useSpring(
        GLASS_EFFECTS.NAV_BLUR_DEFAULT,
        GLASS_EFFECTS.SPRING_CONFIG,
    );
    const navBottomButtonRefractiveIndex = useSpring(
        GLASS_EFFECTS.NAV_REFRACTIVE_INDEX_DEFAULT,
        GLASS_EFFECTS.SPRING_CONFIG,
    );
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
            className="bg-background/20 hover:bg-accent/40 flex h-12 w-24 max-w-32 cursor-pointer items-center justify-center rounded-full"
            onClick={onClick}
            onMouseEnter={() => handleTopNavHover(true)}
            onMouseLeave={() => handleTopNavHover(false)}
            glassThickness={110}
            bezelWidth={20}
            refractiveIndex={navTopButtonRefractiveIndex}
            blur={navTopButtonBlur}
            specularOpacity={0.9}
        >
            {children}
        </LiquidGlass>
    );
}
