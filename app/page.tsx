"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone } from "lucide-react";

import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import Iridescence from "@/components/Iridescence";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
  subtitle: string;
  title: string;
  description: string;
};

function Section({ subtitle, title, description }: SectionProps) {
  return (
    <div className="flex h-lvh w-full snap-start snap-always flex-col items-start justify-center p-4">
      <SplitText
        splitType="words"
        ease="power3.out"
        delay={100}
        duration={1}
        from={{ opacity: 0, y: 64 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="right"
        tag="span"
        className="text-primary text-sm sm:text-lg font-extrabold sm:mr-10"
        text={subtitle}
      />

      <SplitText
        splitType="words"
        ease="power3.out"
        delay={100}
        duration={1}
        from={{ opacity: 0, y: 64 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="right"
        tag="h2"
        className="mt-2 text-pretty text-2xl sm:text-4xl font-bold sm:mr-10  sm:w-1/2"
        text={title}
      />

      <SplitText
        splitType="lines"
        ease="power3.out"
        delay={500}
        duration={1}
        from={{ opacity: 0, y: 64 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="right"
        tag="p"
        className="mt-4 sm:text-xl font-light sm:mr-10 sm:w-1/2"
        text={description}
      />
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) {
            scroller.scrollTop = value as number;
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
    }, scroller);

    setReady(true);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 transition-all duration-500 dark:invert dark:hue-rotate-180">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.5}
          speed={1}
        />
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="absolute h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth p-4 md:p-6"
      >
        {/* Hero Section */}
        <FadeContent className="mx-auto flex h-lvh  w-80 sm:w-96 snap-start snap-always flex-col items-center justify-center gap-6">
          <AnimatedContent duration={2} animateOpacity>
            <div className="grid gap-4 text-center">
              <h1 className="text-5xl sm:text-7xl font-black">
                تجربه‌ای
                <br /> فراتر از کد
              </h1>
              <h2 className="text-xl sm:text-2xl font-extralight">
                طراحی و توسعه وب‌سایت و وب‌اپلیکیشن‌های مدرن با جدیدترین
                تکنولوژی‌ها
              </h2>
            </div>
          </AnimatedContent>

          <AnimatedContent
            duration={2}
            animateOpacity
            className="grid grid-cols-2 gap-4"
          >
            <Button
              variant="secondary"
              onClick={() => router.push("/order")}
              className="h-12 w-40 rounded-xl"
            >
              <ArrowRight className="ml-2" />
              ثبت سفارش
            </Button>

            <a href="tel:+989025206321">
              <Button variant="default" className="h-12 w-40 rounded-xl">
                <Phone className="ml-2" />
                مشاوره تخصصی
              </Button>
            </a>
          </AnimatedContent>
        </FadeContent>

        {/* Content Sections */}
        {ready && (
          <>
            <Section
              subtitle="چرا وب آرای ؟"
              title="طراحی هدفمند، فراتر از ظاهر"
              description={`در طراحی وب‌سایت، همه‌چیز به زیبایی ختم نمی‌شود.
ساختار اصولی، تجربه کاربری روان و دسترسی آسان به محتوا نقش مهمی در موفقیت یک وب‌سایت دارند. 
ما با در نظر گرفتن رفتار کاربران و اهداف کسب‌وکار شما، سایتی طراحی می‌کنیم که بازدیدکننده را به مشتری تبدیل کند.`}
            />

            <Section
              subtitle="چرا وب آرای ؟"
              title="سازگار با موبایل و بهینه برای گوگل"
              description={`بخش بزرگی از کاربران از طریق موبایل وارد وب‌سایت می‌شوند.
تمامی وب‌سایت‌ها به‌صورت واکنش‌گرا طراحی می‌شوند و در تمامی دستگاه‌ها عملکرد مناسبی دارند.
همچنین اصول اولیه سئو در ساختار سایت رعایت می‌شود تا شانس دیده‌شدن شما افزایش یابد.`}
            />

            <Section
              subtitle="چرا وب آرای ؟"
              title="طراحی اختصاصی متناسب با برند شما"
              description={`هر کسب‌وکار هویت خاص خود را دارد و وب‌سایت باید بازتابی از آن باشد.
ما از قالب‌های تکراری استفاده نمی‌کنیم و هر پروژه را بر اساس نیاز، سلیقه و اهداف شما طراحی می‌کنیم
تا نتیجه نهایی کاملاً منحصربه‌فرد باشد.`}
            />

            <Section
              subtitle="چرا وب آرای ؟"
              title="همراهی و پشتیبانی پس از تحویل"
              description={`پایان طراحی، آغاز مسیر رشد است.
پس از تحویل وب‌سایت نیز کنار شما هستیم تا با پشتیبانی، آموزش و راهنمایی،
بیشترین بهره را از وب‌سایت خود ببرید و با خیال راحت کسب‌وکار آنلاین‌تان را توسعه دهید.`}
            />
          </>
        )}
      </div>
    </>
  );
}
