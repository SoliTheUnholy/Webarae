import Silk from "@/components/silk/silk";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="fixed h-screen w-screen ">
                <Silk
                    speed={5}
                    scale={2}
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className="absolute">
            </div>
        </>
    );
}
