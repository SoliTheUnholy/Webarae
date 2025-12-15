"use client";
import { GridScan } from "@/components/GridScan";
import React, { useRef } from "react";

export default function Home() {
    const domRef = useRef<HTMLDivElement>(null);
    return (
        <div className="relative w-full">
            <div ref={domRef} className="fixed h-screen w-full">
                <GridScan
                    sensitivity={0}
                    lineThickness={0.1}
                    linesColor="#075985"
                    gridScale={0.02}
                    scanColor="#7dd3fc"
                    scanOpacity={0.4}
                    lineJitter={0.2}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.005}
                    noiseIntensity={0.01}
                />
            </div>
            <div className="absolute flex h-svh w-full items-center justify-center">
                <span className="text-6xl font-bold">بزودی...</span>
            </div>
        </div>
    );
}
