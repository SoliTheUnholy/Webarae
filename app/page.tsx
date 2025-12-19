import Iridescence from "@/components/Iridescence";
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
            <div className="absolute z-10 grid w-full snap-y snap-mandatory scroll-p-4 scroll-pt-20 items-center justify-center scroll-smooth">
                <div className="flex h-svh w-80 snap-center snap-always flex-col items-center justify-center gap-8">
                    <h1 className="text-6xl font-bold text-center">تجربه‌ای</h1>
                    <h1 className="-mt-4 text-6xl font-bold text-center">فراتر از کد</h1>
                    <h2 className="text-2xl text-center">
                        طراحی و توسعه وب سایت و وب اپلیکیشن با جدیدترین تکنولوژی
                        ها
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <LiquidButton className="w-38">
                            <ArrowRight />
                            ثبت سفارش
                        </LiquidButton>
                        <a href="tel:+989025206321">
                            <Button
                                variant={"default"}
                                className="h-12 w-38 rounded-full"
                            >
                                <Phone />
                                مشاوره تخصصی
                            </Button>
                        </a>
                    </div>
                </div>
                {/* <div className="flex h-svh w-full snap-center snap-always flex-col items-center justify-center gap-4"></div> */}
            </div>
        </>
    );
}
