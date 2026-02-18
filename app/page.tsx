"use client";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import Iridescence from "@/components/Iridescence";
import SplitText from "@/components/SplitText";
import LiquidButton from "@/components/glass-button/glass-button";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
    const router = useRouter();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const scroller = scrollRef.current;
        if (!scroller) return;

        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
                if (arguments.length) {
                    scroller.scrollTop = value!;
                }
                return scroller.scrollTop;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: scroller.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.defaults({ scroller });

        ScrollTrigger.refresh();
        setReady(true);

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            ScrollTrigger.clearScrollMemory();
        };
    }, []);
    return (
        <>
            <div
                className={`fixed h-full w-full transition-all duration-500 dark:invert dark:hue-rotate-180`}
            >
                <Iridescence
                    color={[1, 1, 1]}
                    mouseReact={false}
                    amplitude={0.5}
                    speed={1.0}
                />
            </div>
            <div
                ref={scrollRef}
                className="absolute h-screen w-full snap-y snap-mandatory items-center justify-center overflow-y-scroll scroll-smooth p-4 md:p-6"
            >
                <FadeContent className="mx-auto flex h-lvh w-80 snap-start snap-always flex-col items-center justify-center gap-4">
                    <AnimatedContent
                        duration={2}
                        animateOpacity
                        className="flex flex-col gap-4"
                    >
                        <h1 className="text-center text-6xl font-black">
                            تجربه ای فراتر از کد
                        </h1>
                        <h2 className="text-center text-2xl font-light">
                            طراحی و توسعه وب سایت و وب اپلیکیشن های مدرن با
                            جدیدترین تکنولوژی ها
                        </h2>
                    </AnimatedContent>
                    <AnimatedContent
                        duration={2}
                        animateOpacity
                        className="grid grid-cols-2 gap-4"
                    >
                        <Button
                            variant={"secondary"}
                            onClick={() => {
                                router.push("/order");
                            }}
                            className="h-12 w-40 rounded-xl"
                        >
                            <ArrowRight />
                            ثبت سفارش
                        </Button>
                        <a href="tel:+989025206321">
                            <Button
                                variant={"default"}
                                className="h-12 w-40 rounded-xl"
                            >
                                <Phone />
                                مشاوره تخصصی
                            </Button>
                        </a>
                    </AnimatedContent>
                </FadeContent>
                {ready && (
                    <>
                        <div className="flex h-lvh w-full snap-start snap-always flex-col items-start justify-center">
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="span"
                                className="text-primary mr-0 sm:mr-10"
                                text="چرا وب آرای ؟"
                            />
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="h3"
                                className="mx-auto mt-2 mr-0 text-4xl font-bold sm:mr-10"
                                text="طراحی هدفمند، فراتر از ظاهر"
                            />
                            <SplitText
                                splitType="lines"
                                ease={"power3.out"}
                                delay={500}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="p"
                                className="mx-auto mt-4 mr-0 text-xl font-light sm:mr-10 sm:w-1/2"
                                text="در طراحی وب‌سایت، همه‌چیز به زیبایی ختم نمی‌شود.
                                ساختار اصولی، تجربه کاربری روان و دسترسی آسان به
                                محتوا نقش مهمی در موفقیت یک وب‌سایت دارند. ما با
                                در نظر گرفتن رفتار کاربران و اهداف کسب‌وکار شما،
                                سایتی طراحی می‌کنیم که بازدیدکننده را به مشتری
                                تبدیل کند."
                            />
                        </div>
                        <div className="flex h-lvh w-full snap-start snap-always flex-col items-start justify-center p-4">
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="span"
                                className="text-primary mr-0 sm:mr-10"
                                text="چرا وب آرای ؟"
                            />
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="h2"
                                className="mx-auto mt-2 mr-0 text-4xl font-bold sm:mr-10"
                                text="سازگار با موبایل و بهینه برای گوگل"
                            />
                            <SplitText
                                splitType="lines"
                                ease={"power3.out"}
                                delay={500}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="p"
                                className="mx-auto mt-4 mr-0 text-xl font-light sm:mr-10 sm:w-1/2"
                                text="بخش بزرگی از کاربران از طریق موبایل وارد وب‌سایت
                                می‌شوند. به همین دلیل تمامی وب‌سایت‌ها به‌صورت
                                واکنش‌گرا طراحی می‌شوند و در تمامی دستگاه‌ها
                                عملکرد مناسبی دارند. همچنین اصول اولیه سئو در
                                ساختار سایت رعایت می‌شود تا شانس دیده‌شدن شما در
                                نتایج جستجو افزایش یابد."
                            />
                        </div>
                        <div className="flex h-lvh w-full snap-start snap-always flex-col items-start justify-center p-4">
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="span"
                                className="text-primary mr-0 sm:mr-10"
                                text="چرا وب آرای ؟"
                            />
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="h2"
                                className="mx-auto mt-2 mr-0 text-4xl font-bold sm:mr-10"
                                text="طراحی اختصاصی متناسب با برند شما"
                            />
                            <SplitText
                                splitType="lines"
                                ease={"power3.out"}
                                delay={500}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="p"
                                className="mx-auto mt-4 mr-0 text-xl font-light sm:mr-10 sm:w-1/2"
                                text="هر کسب‌وکار هویت خاص خود را دارد و وب‌سایت باید
                                بازتابی از آن باشد. ما از قالب‌های تکراری
                                استفاده نمی‌کنیم و هر پروژه را بر اساس نیاز،
                                سلیقه و اهداف شما طراحی می‌کنیم تا نتیجه نهایی
                                کاملاً منحصربه‌فرد باشد."
                            />
                        </div>
                        <div className="flex h-lvh w-full snap-start snap-always flex-col items-start justify-center p-4">
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="span"
                                className="text-primary mr-0 sm:mr-10"
                                text="چرا وب آرای ؟"
                            />
                            <SplitText
                                splitType="words"
                                ease={"power3.out"}
                                delay={100}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="h2"
                                className="mx-auto mt-2 mr-0 text-4xl font-bold sm:mr-10"
                                text="همراهی و پشتیبانی پس از تحویل"
                            />
                            <SplitText
                                splitType="lines"
                                ease={"power3.out"}
                                delay={500}
                                duration={1}
                                from={{ opacity: 0, y: 64 }}
                                to={{ opacity: 1, y: 0 }}
                                rootMargin="0"
                                textAlign="right"
                                tag="p"
                                className="mx-auto mt-4 mr-0 text-xl font-light sm:mr-10 sm:w-1/2"
                                text="پایان طراحی، آغاز مسیر رشد است. پس از تحویل
                                وب‌سایت نیز کنار شما هستیم تا با پشتیبانی، آموزش
                                و راهنمایی، بتوانید بیشترین بهره را از وب‌سایت
                                خود ببرید و با خیال راحت کسب‌وکار آنلاین‌تان را
                                توسعه دهید."
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
