"use client";
import ColorBends from "@/components/ColorBends";
import React, { useRef } from "react";

export default function Home() {
    const domRef = useRef<HTMLDivElement>(null);
    return (
        <div className="relative w-full">
            <div ref={domRef} className="fixed h-screen w-full">
            
            </div>
            <div className="absolute flex h-svh w-full items-center justify-center">
                <span className="text-6xl font-bold">بزودی...</span>
            </div>
        </div>
    );
}
