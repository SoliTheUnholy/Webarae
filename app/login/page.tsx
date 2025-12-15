"use client";
import ColorBends from "@/components/ColorBends";
import React, { useRef } from "react";

export default function Login() {
    const domRef = useRef<HTMLDivElement>(null);
    return (
        <div className="relative w-full">
            <div ref={domRef} className="fixed h-screen w-full">
                <ColorBends
                    speed={1}
                    scale={0.7}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent
                />
            </div>
        </div>
    );
}
