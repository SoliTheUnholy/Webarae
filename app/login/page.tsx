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
                {/* <Silk
                    speed={5}
                    scale={1}
                    color="#5A5A5A"
                    noiseIntensity={1.5}
                    rotation={0}
                /> */}
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur dolore, itaque at possimus mollitia, quo
                    assumenda suscipit voluptas error quas molestiae delectus
                    maiores dolorem autem exercitationem laudantium. Earum
                    aperiam fugiat impedit consequuntur, tempore laborum dolorum
                    totam, rerum esse accusantium, provident saepe. Nam fugiat
                    officia voluptatem minima officiis, soluta nulla dicta
                    eligendi error odio cum tempora, doloremque id magnam
                    laboriosam dignissimos iusto rem pariatur sapiente ullam
                    tempore aspernatur consectetur sunt reiciendis! Fuga aliquid
                    dignissimos iusto culpa accusamus reprehenderit vel,
                    asperiores hic maxime vitae, dicta odit molestias. Autem,
                    nemo praesentium mollitia non nam incidunt odio quis
                    blanditiis dolores dolor fuga exercitationem cumque?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur dolore, itaque at possimus mollitia, quo
                    assumenda suscipit voluptas error quas molestiae delectus
                    maiores dolorem autem exercitationem laudantium. Earum
                    aperiam fugiat impedit consequuntur, tempore laborum dolorum
                    totam, rerum esse accusantium, provident saepe. Nam fugiat
                    officia voluptatem minima officiis, soluta nulla dicta
                    eligendi error odio cum tempora, doloremque id magnam
                    laboriosam dignissimos iusto rem pariatur sapiente ullam
                    tempore aspernatur consectetur sunt reiciendis! Fuga aliquid
                    dignissimos iusto culpa accusamus reprehenderit vel,
                    asperiores hic maxime vitae, dicta odit molestias. Autem,
                    nemo praesentium mollitia non nam incidunt odio quis
                    blanditiis dolores dolor fuga exercitationem cumque?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur dolore, itaque at possimus mollitia, quo
                    assumenda suscipit voluptas error quas molestiae delectus
                    maiores dolorem autem exercitationem laudantium. Earum
                    aperiam fugiat impedit consequuntur, tempore laborum dolorum
                    totam, rerum esse accusantium, provident saepe. Nam fugiat
                    officia voluptatem minima officiis, soluta nulla dicta
                    eligendi error odio cum tempora, doloremque id magnam
                    laboriosam dignissimos iusto rem pariatur sapiente ullam
                    tempore aspernatur consectetur sunt reiciendis! Fuga aliquid
                    dignissimos iusto culpa accusamus reprehenderit vel,
                    asperiores hic maxime vitae, dicta odit molestias. Autem,
                    nemo praesentium mollitia non nam incidunt odio quis
                    blanditiis dolores dolor fuga exercitationem cumque?
                </p>{" "}
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur dolore, itaque at possimus mollitia, quo
                    assumenda suscipit voluptas error quas molestiae delectus
                    maiores dolorem autem exercitationem laudantium. Earum
                    aperiam fugiat impedit consequuntur, tempore laborum dolorum
                    totam, rerum esse accusantium, provident saepe. Nam fugiat
                    officia voluptatem minima officiis, soluta nulla dicta
                    eligendi error odio cum tempora, doloremque id magnam
                    laboriosam dignissimos iusto rem pariatur sapiente ullam
                    tempore aspernatur consectetur sunt reiciendis! Fuga aliquid
                    dignissimos iusto culpa accusamus reprehenderit vel,
                    asperiores hic maxime vitae, dicta odit molestias. Autem,
                    nemo praesentium mollitia non nam incidunt odio quis
                    blanditiis dolores dolor fuga exercitationem cumque?
                </p>
            </div>
            <div className="absolute w-full">
                <div style={{ height: "600px", position: "relative" }}>
                    {domRef.current && (
                        <FluidGlass
                            domElement={domRef.current}
                            mode="lens" // or "bar", "cube"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
