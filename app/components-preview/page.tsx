import { MixerForm } from "@/components/forms/mixer-form";
import Silk from "@/components/silk/silk";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ComponentsPreview() {
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
            <div className="absolute w-full">
                <div className="mx-auto mt-20 grid items-center justify-center gap-4">
                    <Button variant={"default"}>پرایمری</Button>
                    <Button variant={"secondary"}>سکندری</Button>
                    <Button variant={"ghost"}>گوست</Button>
                    <Button variant={"link"}>لینک</Button>
                </div>
            </div>
        </div>
    );
}
