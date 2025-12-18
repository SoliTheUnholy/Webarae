"use client";
import FadeContent from "@/components/FadeContent";
import Iridescence from "@/components/Iridescence";
import SplitText from "@/components/SplitText";

export default function Home() {
    return (
        <div className="relative w-full">
            <div
                className={`fixed h-screen w-full transition-all duration-500 dark:invert`}
            >
                <Iridescence
                    color={[1, 1, 1]}
                    mouseReact={false}
                    amplitude={0.5}
                    speed={1.0}
                />
            </div>
            <FadeContent
                blur={false}
                duration={2000}
                initialOpacity={0}
                className="absolute flex h-svh w-full flex-col items-center justify-center"
            >
                <SplitText
                    text="وبآرای"
                    className="h-36 align text-8xl font-bold"
                    delay={100}
                    duration={1.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 48 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <SplitText
                    text="تجربه‌ای فراتر از کد"
                    className="h-12 text-center text-4xl"
                    delay={200}
                    duration={2}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 80 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </FadeContent>
        </div>
    );
}
