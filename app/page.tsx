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
            <div className="absolute scroll-smooth h-svh w-full snap-y snap-mandatory items-center justify-center overflow-y-scroll">
                <FadeContent className="mx-auto flex h-svh w-80 snap-start snap-always flex-col items-center justify-center gap-4 text-pretty">
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
                <div className="flex h-svh w-full snap-start snap-always flex-col items-start justify-center p-4">
                    <h3 className="text-primary sm:mr-10">چرا وب آرای ؟</h3>
                    <h2 className="mx-auto mt-2 text-4xl font-bold text-pretty sm:mr-10">
                        طراحی هدفمند، فراتر از ظاهر
                    </h2>
                    <p className="mx-auto mt-4 text-xl font-light text-pretty sm:mr-10 sm:w-1/2">
                        در طراحی وب‌سایت، همه‌چیز به زیبایی ختم نمی‌شود. ساختار
                        اصولی، تجربه کاربری روان و دسترسی آسان به محتوا نقش مهمی
                        در موفقیت یک وب‌سایت دارند. ما با در نظر گرفتن رفتار
                        کاربران و اهداف کسب‌وکار شما، سایتی طراحی می‌کنیم که
                        بازدیدکننده را به مشتری تبدیل کند.
                    </p>
                </div>
                <div className="flex h-svh w-full snap-start snap-always flex-col items-start justify-center p-4">
                    <h3 className="text-primary sm:mr-10">چرا وب آرای ؟</h3>
                    <h2 className="mx-auto mt-2 text-4xl font-bold text-pretty sm:mr-10">
                        سازگار با موبایل و بهینه برای گوگل
                    </h2>
                    <p className="mx-auto mt-4 text-xl font-light text-pretty sm:mr-10 sm:w-1/2">
                        بخش بزرگی از کاربران از طریق موبایل وارد وب‌سایت
                        می‌شوند. به همین دلیل تمامی وب‌سایت‌ها به‌صورت واکنش‌گرا
                        طراحی می‌شوند و در تمامی دستگاه‌ها عملکرد مناسبی دارند.
                        همچنین اصول اولیه سئو در ساختار سایت رعایت می‌شود تا
                        شانس دیده‌شدن شما در نتایج جستجو افزایش یابد.
                    </p>
                </div>
                <div className="flex h-svh w-full snap-start snap-always flex-col items-start justify-center p-4">
                    <h3 className="text-primary sm:mr-10">چرا وب آرای ؟</h3>
                    <h2 className="mx-auto mt-2 text-4xl font-bold text-pretty sm:mr-10">
                        طراحی اختصاصی متناسب با برند شما
                    </h2>
                    <p className="mx-auto mt-4 text-xl font-light text-pretty sm:mr-10 sm:w-1/2">
                        هر کسب‌وکار هویت خاص خود را دارد و وب‌سایت باید بازتابی
                        از آن باشد. ما از قالب‌های تکراری استفاده نمی‌کنیم و هر
                        پروژه را بر اساس نیاز، سلیقه و اهداف شما طراحی می‌کنیم
                        تا نتیجه نهایی کاملاً منحصربه‌فرد باشد.
                    </p>
                </div>
                <div className="flex h-svh w-full snap-start snap-always flex-col items-start justify-center p-4">
                    <h3 className="text-primary sm:mr-10">چرا وب آرای ؟</h3>
                    <h2 className="mx-auto mt-2 text-4xl font-bold text-pretty sm:mr-10">
                        همراهی و پشتیبانی پس از تحویل
                    </h2>
                    <p className="mx-auto mt-4 text-xl font-light text-pretty sm:mr-10 sm:w-1/2">
                        پایان طراحی، آغاز مسیر رشد است. پس از تحویل وب‌سایت نیز
                        کنار شما هستیم تا با پشتیبانی، آموزش و راهنمایی، بتوانید
                        بیشترین بهره را از وب‌سایت خود ببرید و با خیال راحت
                        کسب‌وکار آنلاین‌تان را توسعه دهید.
                    </p>
                </div>
            </div>
        </>
    );
}
