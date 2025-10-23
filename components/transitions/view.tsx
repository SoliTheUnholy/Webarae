/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatePresence, delay, motion, scale } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { useContext, useRef, useState } from "react";
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
		initial: { top: "100vh", transform: "perspective(1000px) rotateX(0deg) scale(0.85)" },
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
		{ label: "Home", ariaLabel: "Go to home page", link: "/" },
		{ label: "About", ariaLabel: "Learn about us", link: "/about" },
		{ label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
	];

	const socialItems = [
		{ label: "Twitter", link: "https://twitter.com" },
		{ label: "GitHub", link: "https://github.com" },
		{ label: "LinkedIn", link: "https://linkedin.com" },
	];
	return (
		<AnimatePresence mode="wait">
			<motion.div key={pathname} className="relative p-2 h-[100dvh] w-[100vw]">
				<motion.div {...animate(perspective)} className="bg-muted h-full rounded-2xl overflow-hidden w-full">
					<motion.div {...animate(opacity)}>
						<FrozenRoute>
							<div className="h-[100dvh] left-0 right-0 overflow-hidden overflow-y-scroll rounded-2xl">
								<StaggeredMenu
									isFixed={false}
									position="right"
									items={menuItems}
									socialItems={socialItems}
									displaySocials={true}
									displayItemNumbering={true}
									menuButtonColor="#000"
									openMenuButtonColor="#000"
									changeMenuColorOnOpen={true}
									colors={["#B19EEF", "#5227FF"]}
									logoUrl="favicon.ico"
									accentColor="#ff6b6b"
									onMenuOpen={() => setIsOpen(true)}
									onMenuClose={() => setIsOpen(false)}>
									{children}
								</StaggeredMenu>
							</div>
						</FrozenRoute>
					</motion.div>
				</motion.div>
				<motion.div
					{...animate(slide)}
					className="fixed p-2 bg-clip-content h-[100dvh] rounded-3xl top-0 left-0 bg-muted  w-full"
				/>
			</motion.div>
		</AnimatePresence>
	);
}
