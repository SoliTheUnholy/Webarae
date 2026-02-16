"use client";
import AnimatedContent from "@/components/AnimatedContent";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/* ---------------- TYPES ---------------- */
type Key = "type" | "size" | "functionality" | "scale" | "design" | "speed";

type ProjectType =
    | "لندینگ پیج"
    | "سایت شرکتی"
    | "فروشگاه آنلاین"
    | "سیستم رزرو"
    | "وب‌اپلیکیشن اختصاصی";

type Size = "کوچک" | "متوسط" | "بزرگ";
type Functionality = "پایه" | "تعاملی" | "پیشرفته";
type Scale = "ندارد" | "کم" | "درحال رشد" | "زیاد";

type Design =
    | "قالب آماده + محتوا دارم"
    | "طراحی اختصاصی + محتوا دارم"
    | "طراحی و محتوا می‌خواهم";

type Speed = "منعطف" | "عادی" | "سریع" | "فوری";

export type QuoteAnswers = {
    type?: ProjectType;
    size?: Size;
    functionality?: Functionality;
    scale?: Scale;
    design?: Design;
    speed?: Speed;
};

type Option = {
    label: string;
    description: string;
};

type Page = {
    key: Key;
    title: string;
    description: string;
    options: Option[];
};

/* ---------------- DATA ---------------- */

export const pages: Page[] = [
    {
        key: "type",
        title: "چه نوع سایتی نیاز دارید؟",
        description: "نوع پروژه پایه قیمت و تکنولوژی را مشخص می‌کند.",
        options: [
            {
                label: "لندینگ پیج",
                description: "مناسب معرفی یک محصول یا کمپین",
            },
            { label: "سایت شرکتی", description: "برای معرفی خدمات و برند شما" },
            {
                label: "فروشگاه آنلاین",
                description: "امکان فروش و مدیریت محصولات",
            },
            {
                label: "سیستم رزرو",
                description: "رزرو آنلاین خدمات یا زمان‌بندی",
            },
            {
                label: "وب‌اپلیکیشن اختصاصی",
                description: "سیستم کاملاً سفارشی و پیشرفته",
            },
        ],
    },
    {
        key: "size",
        title: "اندازه پروژه چقدر است؟",
        description: "تعداد صفحات و گستردگی ساختار سایت.",
        options: [
            { label: "کوچک", description: "کمتر از ۵ صفحه" },
            { label: "متوسط", description: "حدود ۵ تا ۱۵ صفحه" },
            { label: "بزرگ", description: "بیش از ۱۵ صفحه و ساختار پیچیده" },
        ],
    },
    {
        key: "functionality",
        title: "سطح امکانات موردنیاز چیست؟",
        description: "پیچیدگی فنی و قابلیت‌های تعاملی سایت.",
        options: [
            { label: "پایه", description: "نمایش اطلاعات ساده" },
            { label: "تعاملی", description: "فرم‌ها و تعامل کاربر" },
            {
                label: "پیشرفته",
                description: "داشبورد، حساب کاربری و منطق پیچیده",
            },
        ],
    },
    {
        key: "scale",
        title: "مقیاس کاربران یا محصولات؟",
        description: "حجم داده و ترافیک تاثیر مستقیم روی هزینه دارد.",
        options: [
            { label: "ندارد", description: "کاربران محدود یا بدون داده زیاد" },
            { label: "کم", description: "ترافیک سبک" },
            { label: "درحال رشد", description: "قابل توسعه در آینده" },
            { label: "زیاد", description: "ترافیک بالا و زیرساخت قوی" },
        ],
    },
    {
        key: "design",
        title: "وضعیت طراحی و محتوا؟",
        description: "میزان کار طراحی رابط کاربری و تولید محتوا.",
        options: [
            {
                label: "قالب آماده + محتوا دارم",
                description: "سریع‌ترین و کم‌هزینه‌ترین حالت",
            },
            {
                label: "طراحی اختصاصی + محتوا دارم",
                description: "ظاهر حرفه‌ای با محتوای آماده",
            },
            {
                label: "طراحی و محتوا می‌خواهم",
                description: "طراحی کامل به‌همراه تولید محتوا",
            },
        ],
    },
    {
        key: "speed",
        title: "زمان تحویل موردنظر؟",
        description: "فشار زمانی ضریب قیمت را افزایش می‌دهد.",
        options: [
            { label: "منعطف", description: "بدون عجله" },
            { label: "عادی", description: "زمان‌بندی استاندارد" },
            { label: "سریع", description: "تحویل سریع‌تر از معمول" },
            { label: "فوری", description: "اولویت بالا و تحویل فوری" },
        ],
    },
];
/* ---------------- COMPONENT ---------------- */

const Orders = () => {
    const TOMAN_RATE = 160000;
    const [animate, setAnimate] = useState(true);
    const router = useRouter();

    const [step, setStep] = useState(0);
    const [price, setPrice] = useState(0);
    const [answers, setAnswers] = useState<QuoteAnswers>({});

    /* ---------- CARD SIZE ANIMATION ---------- */

    const cardRef = useRef<HTMLDivElement>(null);
    const prevHeight = useRef<number>(0);

    useLayoutEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const newHeight = el.offsetHeight;

        if (prevHeight.current) {
            gsap.fromTo(
                el,
                { height: prevHeight.current },
                {
                    height: newHeight,
                    duration: 0.6,
                    ease: "power3.inOut",
                },
            );
        }

        prevHeight.current = newHeight;
    }, [step]);

    /* ---------- PRICING ---------- */

    const pricing = {
        type: {
            "لندینگ پیج": 40,
            "سایت شرکتی": 90,
            "فروشگاه آنلاین": 180,
            "سیستم رزرو": 240,
            "وب‌اپلیکیشن اختصاصی": 400,
        },
        size: { کوچک: 1, متوسط: 1.4, بزرگ: 1.8 },
        functionality: { پایه: 1, تعاملی: 1.5, پیشرفته: 2.2 },
        scale: { ندارد: 1, کم: 1.1, "درحال رشد": 1.3, زیاد: 1.6 },
        design: {
            "قالب آماده + محتوا دارم": 1,
            "طراحی اختصاصی + محتوا دارم": 1.3,
            "طراحی و محتوا می‌خواهم": 1.7,
        },
        speed: { منعطف: 1, عادی: 1.1, سریع: 1.25, فوری: 1.5 },
    };

    function roundToMillion(num: number) {
        return Math.round(num / 1_000_000) * 1_000_000;
    }

    useEffect(() => {
        const type = answers.type ? pricing.type[answers.type] : 0;
        const size = answers.size ? pricing.size[answers.size] : 1;
        const func = answers.functionality
            ? pricing.functionality[answers.functionality]
            : 1;
        const scale = answers.scale ? pricing.scale[answers.scale] : 1;
        const design = answers.design ? pricing.design[answers.design] : 1;
        const speed = answers.speed ? pricing.speed[answers.speed] : 1;

        const dollar = Math.round(type * size * func * scale * design * speed);
        const tomanRaw = dollar * TOMAN_RATE;
        const toman = roundToMillion(tomanRaw);

        setPrice(toman);
    }, [answers]);

    /* ---------- NAVIGATION ---------- */

    const next = (label: string) => {
        setAnimate(false);
        setTimeout(() => {
            setAnswers((prev) => ({
                ...prev,
                [pages[step].key]: label,
            }));
            setStep((s) => s + 1);
            setAnimate(true);
        }, 1000);
    };

    const back = () => {
        if (!step) return;
        setAnimate(false);
        setTimeout(() => {
            setAnswers((prev) => {
                const copy = { ...prev };
                delete copy[pages[step - 1].key];
                return copy;
            });
            setStep((s) => s - 1);
            setAnimate(true);
        }, 1000);
    };

    /* ---------- UI ---------- */

    return (
        <AnimatedContent
            duration={1.2}
            animateOpacity
            className="flex h-full w-full flex-col items-center"
        >
            <div className="mt-20 flex grow flex-col items-center justify-center">
                <Card
                    ref={cardRef}
                    key={step}
                    className="w-[90vw] max-w-96 overflow-hidden rounded-4xl"
                >
                    {step < pages.length ? (
                        <>
                            <CardHeader>
                                <AnimatedContent animateOpacity visible={animate}>
                                    <CardTitle>
                                        <SplitText
                                            splitType="words"
                                            tag="h3"
                                            text={pages[step].title}
                                        />
                                    </CardTitle>
                                    <CardDescription>
                                        <SplitText
                                            splitType="words"
                                            tag="p"
                                            text={pages[step].description}
                                            delay={20}
                                        />
                                    </CardDescription>
                                </AnimatedContent>
                            </CardHeader>

                            {/* OPTIONS */}
                            <CardContent className="grid gap-2">
                                {pages[step].options.map((item, index) => (
                                    <AnimatedContent
                                        visible={animate}
                                        disappearAfter={index * 0.1}
                                        key={item.label}
                                        direction="horizontal"
                                        delay={index * 0.1}
                                        className="grid"
                                        animateOpacity
                                    >
                                        <Button
                                            variant="outline"
                                            className="flex h-auto justify-start gap-4 rounded-full text-right transition-all duration-500"
                                            disabled={!animate}
                                            onClick={() => next(item.label)}
                                        >
                                            <span className="text-primary text-2xl">
                                                {index + 1}
                                            </span>

                                            <div className="flex flex-col gap-1">
                                                <SplitText
                                                    splitType="words"
                                                    textAlign="right"
                                                    tag="span"
                                                    className="font-medium"
                                                    text={item.label}
                                                    delay={50 * index}
                                                />
                                                <SplitText
                                                    splitType="words"
                                                    tag="span"
                                                    className="text-muted-foreground text-xs"
                                                    text={item.description}
                                                    delay={50 * index}
                                                />
                                            </div>
                                        </Button>
                                    </AnimatedContent>
                                ))}
                            </CardContent>

                            {/* FOOTER */}
                            <CardFooter className="grid">
                                {step > 0 && (
                                    <AnimatedContent
                                        reverse
                                        visible={animate}
                                        animateOpacity
                                        className="flex justify-between"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-muted text-xs">
                                                هزینه تخمینی
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="text-primary font-bold">
                                                    {price.toLocaleString()}
                                                </span>
                                                <span className="text-xs">
                                                    تومان
                                                </span>
                                            </span>
                                        </div>
                                        <Button
                                            disabled={!animate}
                                            onClick={back}
                                            className="h-10 rounded-2xl transition-all duration-500"
                                        >
                                            مرحله قبل
                                            <ArrowLeft />
                                        </Button>
                                    </AnimatedContent>
                                )}
                            </CardFooter>
                        </>
                    ) : (
                        <>
                            {/* SUMMARY */}
                            <CardHeader>
                                <AnimatedContent animateOpacity visible={animate}>
                                    <CardTitle>
                                        <SplitText
                                            splitType="words"
                                            tag="h3"
                                            text="جمع بندی"
                                        />
                                    </CardTitle>
                                    <CardDescription>
                                        <SplitText
                                            splitType="words"
                                            tag="p"
                                            text="خلاصه سفارش شما و هزینه تخمینی"
                                        />
                                    </CardDescription>
                                </AnimatedContent>
                            </CardHeader>

                            <CardContent className="grid gap-3">
                                {pages.map((item, i) => (
                                    <AnimatedContent
                                        animateOpacity
                                        key={i}
                                        direction="horizontal"
                                        delay={i * 0.1}
                                    >
                                        <div className="grid text-right">
                                            <span className="text-muted text-xs">
                                                {item.title}
                                            </span>
                                            <span>{answers[item.key]}</span>
                                        </div>
                                    </AnimatedContent>
                                ))}
                            </CardContent>

                            <CardFooter className="mx-auto grid gap-2 text-center">
                                <span className="flex flex-col">
                                    <span className="text-muted text-xs">
                                        هزینه تخمینی
                                    </span>
                                    <span className="text-primary text-2xl font-bold">
                                        {price.toLocaleString()} تومان
                                    </span>
                                </span>

                                <Button className="rounded-2xl">
                                    تکمیل سفارش
                                </Button>
                            </CardFooter>
                        </>
                    )}
                </Card>
            </div>

            {/* PROGRESS */}
            <div className="grid w-72 origin-bottom gap-4 py-12 text-center">
                <Progress value={((step + 1) * 100) / (pages.length + 1)} />
                <p className="text-foreground text-sm">
                    مرحله {step + 1} از {pages.length + 1}
                </p>
            </div>
        </AnimatedContent>
    );
};

export default Orders;
