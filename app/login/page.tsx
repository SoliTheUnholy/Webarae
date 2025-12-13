"use client";
import { MixerForm } from "@/components/forms/mixer-form";
import FluidGlass from "@/components/glass-button/glass-button";
import Silk from "@/components/silk/silk";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

export default function ComponentsPreview() {
    const domRef = useRef<HTMLDivElement>(null);
    return (
        <div className="relative w-full">
            <div ref={domRef} className="fixed h-screen w-full">
                <Silk
                    speed={5}
                    scale={2}
                    color="#5A5A5A"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className="absolute w-full">

            </div>
        </div>
    );
}
