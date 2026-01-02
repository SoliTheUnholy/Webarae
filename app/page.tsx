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
            <div className="absolute z-10 flex w-full snap-y snap-mandatory scroll-p-4 scroll-pt-20 flex-col items-center justify-center scroll-smooth">
                <FadeContent className="flex h-svh w-80 snap-center snap-always flex-col items-center justify-center gap-4">
                    <AnimatedContent
                        duration={2}
                        animateOpacity
                        className="flex flex-col gap-4"
                    >
                        <h1 className="text-center text-6xl font-black">
                            تجربه ای فراتر از کد
                        </h1>
                        <h2 className="text-center text-2xl font-light text-pretty">
                            طراحی و توسعه وب سایت و وب اپلیکیشن های مدرن با
                            جدیدترین تکنولوژی ها
                        </h2>
                    </AnimatedContent>
                    <AnimatedContent
                        duration={2}
                        animateOpacity
                        className="grid grid-cols-2 gap-4"
                    >
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
                <div className="h-svh w-full p-4">
                    <h3 className="text-primary mr-10">چرا وب آرای ؟</h3>
                    <h2 className="mr-10 text-4xl font-bold">
                        ما تو این حوضه بهترینیم !
                    </h2>
                    <p className="mt-4 mr-10 text-xl font-light sm:w-1/2">
                        بکارگیری شیوه های نوین در برنامه نویسی وبسایت شما که با
                        ساده کردن مسیر فرایند ها با افزایش فروش و سبک کردن کار
                        کارمندان سود شما را افزایش میدهیم.
                    </p>
                </div>
            </div>
        </>
    );
}
