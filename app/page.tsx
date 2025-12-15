"use client";
import Silk from "@/components/silk/silk";
import React, { useRef } from "react";

export default function Home() {
    const domRef = useRef<HTMLDivElement>(null);
    return (
        <div className="relative w-full">
            <div ref={domRef} className="fixed h-screen w-full">
                <Silk
                    speed={5}
                    scale={2}
                    color="#104e64"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className="absolute flex h-svh w-full items-center justify-center">
                <span className="text-6xl font-bold">بزودی...</span>
            </div>
        </div>
    );
}
