/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import FrozenRoute from "./frozen";
import StaggeredMenu from "../sidebar/sidebar";

export default function View({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const animate = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
        };
    };
    const opacity = {
        initial: { opacity: 0 },
        enter: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 1,
        },
    };
    const perspective = {
        initial: { transform: "perspective(1000px) rotateX(0deg)" },
        enter: { transform: "perspective(1000px) rotateX(0deg)" },
        exit: {
            filter: ["brightness(100%)", "brightness(50%)"],
            transform: [
                "perspective(1000px) rotateX(0deg) scale(1)",
                "perspective(1000px) rotateX(-10deg) scale(0.9)",
                "perspective(1000px) rotateX(0deg) scale(0.85)",
            ],
            transition: { duration: 0.375 },
        },
    };
    const slide = {
        initial: {
            top: "100vh",
            transform: "perspective(1000px) rotateX(0deg) scale(0.85)",
        },
        enter: {
            top: "100vh",
            transform: "perspective(1000px) rotateX(0deg) scale(0.85)",
        },
        exit: {
            top: ["100vh", "0", "0"],
            filter: ["brightness(75%)", "brightness(100%)"],
            transform: [
                "perspective(1000px) rotateX(0deg) scale(0.85) ",
                "perspective(1000px) rotateX(-10deg) scale(0.9)",
                "perspective(1000px) rotateX(0deg) scale(1)",
            ],
            transition: {
                duration: 0.375,
                delay: 0.125,
            },
        },
    };
    const menuItems = [
        { label: "خانه", ariaLabel: "Go to home page", link: "/" },
        { label: "درباره ما", ariaLabel: "Learn about us", link: "/about" },
        { label: "تماس با ما", ariaLabel: "Get in touch", link: "/contact" },
        { label: "فرم میکسر", ariaLabel: "Get in touch", link: "/mixer" },
        {
            label: "سمپل",
            ariaLabel: "Get in touch",
            link: "/components-preview",
        },
    ];

    const socialItems = [
        { label: "Twitter", link: "https://twitter.com" },
        { label: "GitHub", link: "https://github.com" },
        { label: "LinkedIn", link: "https://linkedin.com" },
    ];
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                className="relative h-[100dvh] w-[100vw] p-2"
            >
                <motion.div
                    {...animate(perspective)}
                    className="bg-muted h-full w-full overflow-hidden rounded-4xl"
                >
                    <motion.div {...animate(opacity)}>
                        <FrozenRoute>
                            <div className="right-0 left-0 h-[100dvh] overflow-hidden overflow-y-scroll rounded-4xl">
                                <StaggeredMenu
                                    isFixed={false}
                                    position="right"
                                    items={menuItems}
                                    socialItems={socialItems}
                                    displaySocials={true}
                                    displayItemNumbering={true}
                                    changeMenuColorOnOpen={true}
                                    onMenuOpen={() => setIsOpen(true)}
                                    onMenuClose={() => setIsOpen(false)}
                                >
                                    {children}
                                </StaggeredMenu>
                            </div>
                        </FrozenRoute>
                    </motion.div>
                </motion.div>
                <motion.div
                    {...animate(slide)}
                    className="bg-muted fixed top-0 left-0 h-[100dvh] w-full rounded-[40px] bg-clip-content p-2"
                />
            </motion.div>
        </AnimatePresence>
    );
}
