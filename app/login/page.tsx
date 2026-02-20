"use client";

import Beams from "@/components/Beams";
import ColorBends from "@/components/ColorBends";
import LoginForm from "@/components/login/login-form";

export default function Login() {
  return (
    <>
      <div className={`bg-background fixed h-full w-full`}>
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
      <div className="absolute z-20 flex h-full w-full items-center justify-center">
        <LoginForm />
      </div>
    </>
  );
}
