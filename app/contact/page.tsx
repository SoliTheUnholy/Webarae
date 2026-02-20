import ColorBends from "@/components/ColorBends";

export default function Contact() {
  return (
    <>
      <div className="fixed h-screen w-screen">
        <ColorBends
          className="hue-rotate-180"
          speed={0.1}
          scale={3}
          frequency={0.125}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0.5}
          noise={0}
        />
      </div>

      <div className="absolute"></div>
    </>
  );
}
