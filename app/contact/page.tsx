import ColorBends from "@/components/ColorBends";

export default function Contact() {
    return (
        <>
            <div className="fixed h-screen w-screen">
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
            <div className="absolute">
            </div>
        </>
    );
}
