import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import Iridescence from "@/components/Iridescence";
import SplitText from "@/components/SplitText";
import LiquidButton from "@/components/glass-button/glass-button";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Home() {
    return (
        <>
            <div
                className={`fixed h-full w-full transition-all duration-500 dark:invert`}
            >
                <Iridescence
                    color={[1, 1, 1]}
                    mouseReact={false}
                    amplitude={0.5}
                    speed={1.0}
                />
            </div>
            <div className="absolute z-10 flex w-full snap-y snap-mandatory scroll-p-4 scroll-pt-20 items-center justify-center scroll-smooth">
                <FadeContent className="flex h-svh w-80 snap-center snap-always flex-col items-center justify-center gap-8">
                    <SplitText
                        text="تجربه‌ای"
                        tag="h1"
                        className="text-6xl font-bold"
                        delay={100}
                        duration={1.5}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 128 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text="فراتر از کد"
                        tag="h1"
                        className="-mt-4 text-6xl font-bold"
                        delay={100}
                        duration={1.5}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 128 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text="طراحی و توسعه وب سایت و وب اپلیکیشن با جدیدترین تکنولوژی ها"
                        className="text-2xl"
                        delay={200}
                        duration={2}
                        ease="power3.out"
                        splitType="lines"
                        from={{ opacity: 0, y: 80 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <AnimatedContent className="grid grid-cols-2 gap-4">
                        <LiquidButton className="w-40">
                            <ArrowRight />
                            ثبت سفارش
                        </LiquidButton>
                        <a href="tel:+989025206321">
                            <Button
                                variant={"default"}
                                className="h-12 w-40 rounded-full"
                            >
                                <Phone />
                                مشاوره تخصصی
                            </Button>
                        </a>
                    </AnimatedContent>
                </FadeContent>
                {/* <div className="flex h-svh w-full snap-center snap-always flex-col items-center justify-center gap-4"></div> */}
            </div>
        </>
    );
}
