import { MixerForm } from "@/components/forms/mixer-form";
import Silk from "@/components/silk/silk";
import React from "react";

export default function Mixer() {
    return (
        <div className="relative w-full">
            <div className="fixed h-screen w-full">
                <Silk
                    speed={5}
                    scale={1}
                    color="#5A5A5A"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <MixerForm />
        </div>
    );
}
