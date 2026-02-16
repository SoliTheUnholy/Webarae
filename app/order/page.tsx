"use client";
import AnimatedContent from "@/components/AnimatedContent";
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
import React, { useEffect, useState } from "react";

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

const Orders = () => {
    const TOMAN_RATE = 100000;
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [price, setPrice] = useState(0);
    const [answers, setAnswers] = useState<QuoteAnswers>({});

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

    return (
        <AnimatedContent
            duration={2}
            animateOpacity
            className=" flex h-full w-full flex-col items-center"
        >
            <div className="flex grow mt-20 flex-col items-center justify-center">
                <Card
                    key={1}
                    className="w-[90vw] max-w-96 justify-self-center rounded-4xl"
                >
                    {step < 6 ? (
                        <>
                            <CardHeader>
                                <CardTitle>{pages[step].title}</CardTitle>
                                <CardDescription>
                                    {pages[step].description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="grid gap-2">
                                {pages[step].options.map((item, index) => (
                                    <AnimatedContent
                                        direction="horizontal"
                                        key={Math.random()}
                                        className="grid"
                                    >
                                        <Button
                                            variant="outline"
                                            className="flex h-auto justify-start gap-4 rounded-xl text-right"
                                            onClick={() => {
                                                setAnswers({
                                                    ...answers,
                                                    [pages[step].key]:
                                                        item.label,
                                                });
                                                setStep(step + 1);
                                            }}
                                        >
                                            <span className="text-primary text-2xl">
                                                {index + 1}
                                            </span>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-medium">
                                                    {item.label}
                                                </span>
                                                <span className="text-muted-foreground text-xs">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </Button>
                                    </AnimatedContent>
                                ))}
                            </CardContent>

                            <CardFooter className="grid">
                                {step ? (
                                    <AnimatedContent className="flex justify-between">
                                        <span className="flex flex-col">
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
                                        </span>
                                        <Button
                                            onClick={() => {
                                                if (step) {
                                                    setStep(step - 1);
                                                }
                                            }}
                                            className="h-10 rounded-xl"
                                        >
                                            مرحله قبل
                                            <ArrowLeft />
                                        </Button>
                                    </AnimatedContent>
                                ) : (
                                    ""
                                )}
                            </CardFooter>
                        </>
                    ) : (
                        <>
                            <CardHeader>
                                <CardTitle>جمع بندی</CardTitle>
                                <CardDescription>
                                    خلاصه ای سفارش شما و هزینه تخمینی
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                {pages.map((item, index) => (
                                    <AnimatedContent direction="horizontal" key={index} className="grid">
                                        <span className="text-muted text-xs">
                                            {item.title}
                                        </span>
                                        <span>{answers[item.key]}</span>
                                    </AnimatedContent>
                                ))}
                            </CardContent>

                            <CardFooter className="mx-auto grid gap-2 text-center">
                                <span className="flex flex-col">
                                    <span className="text-muted text-xs">
                                        هزینه تخمینی
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="text-primary text-2xl font-bold">
                                            {price.toLocaleString()}
                                        </span>
                                        <span className="text-xs">تومان</span>
                                    </span>
                                </span>{" "}
                                <Button className="rounded-xl">
                                    تکمیل سفارش
                                </Button>
                            </CardFooter>
                        </>
                    )}
                </Card>
            </div>
            <div className="end-0 grid w-72 origin-bottom gap-4 py-12 text-center transition-all duration-300 ease-in-out">
                <Progress value={((step + 1) * 100) / 7} />
                <p className="text-foreground text-sm">مرحله {step + 1} از 7</p>
            </div>
        </AnimatedContent>
    );
};

export default Orders;
