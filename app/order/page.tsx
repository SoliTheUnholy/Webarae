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
type Page = {
    key: Key;
    title: string;
    description: string;
    options: NonNullable<any>[];
};
export const pages: Page[] = [
    {
        key: "type",
        title: "چه نوع سایتی نیاز دارید؟",
        description: "نوع پروژه پایه قیمت و تکنولوژی را مشخص می‌کند.",
        options: [
            "لندینگ پیج",
            "سایت شرکتی",
            "فروشگاه آنلاین",
            "سیستم رزرو",
            "وب‌اپلیکیشن اختصاصی",
        ],
    },
    {
        key: "size",
        title: "اندازه پروژه چقدر است؟",
        description: "تعداد صفحات و گستردگی ساختار سایت.",
        options: ["کوچک", "متوسط", "بزرگ"],
    },
    {
        key: "functionality",
        title: "سطح امکانات موردنیاز چیست؟",
        description: "پیچیدگی فنی و قابلیت‌های تعاملی سایت.",
        options: ["پایه", "تعاملی", "پیشرفته"],
    },
    {
        key: "scale",
        title: "مقیاس کاربران یا محصولات؟",
        description: "حجم داده و ترافیک تاثیر مستقیم روی هزینه دارد.",
        options: ["ندارد", "کم", "درحال رشد", "زیاد"],
    },
    {
        key: "design",
        title: "وضعیت طراحی و محتوا؟",
        description: "میزان کار طراحی رابط کاربری و تولید محتوا.",
        options: [
            "قالب آماده + محتوا دارم",
            "طراحی اختصاصی + محتوا دارم",
            "طراحی و محتوا می‌خواهم",
        ],
    },
    {
        key: "speed",
        title: "زمان تحویل موردنظر؟",
        description: "فشار زمانی ضریب قیمت را افزایش می‌دهد.",
        options: ["منعطف", "عادی", "سریع", "فوری"],
    },
];
const Orders = () => {
    const TOMAN_RATE = 20000;
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [price, setPrice] = useState(0);
    const [answers, setAnswers] = useState<QuoteAnswers>({});

    const pricing = {
        type: {
            "لندینگ پیج": 150,
            "سایت شرکتی": 400,
            "فروشگاه آنلاین": 900,
            "سیستم رزرو": 1200,
            "وب‌اپلیکیشن اختصاصی": 2000,
        },
        size: { کوچک: 1, متوسط: 1.6, بزرگ: 2.4 },
        functionality: { پایه: 1, تعاملی: 1.8, پیشرفته: 3 },
        scale: { ندارد: 1, کم: 1.2, "درحال رشد": 1.6, زیاد: 2.2 },
        design: {
            "قالب آماده + محتوا دارم": 1,
            "طراحی اختصاصی + محتوا دارم": 1.5,
            "طراحی و محتوا می‌خواهم": 2.2,
        },
        speed: { منعطف: 1, عادی: 1.2, سریع: 1.5, فوری: 2 },
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
    }, [step]);
    return (
        <AnimatedContent
            duration={2}
            animateOpacity
            className="flex h-full w-full flex-col items-center justify-center"
        >
            <Card className="w-[90vw] max-w-96 rounded-4xl">
                {step < 6 ? (
                    <>
                        <CardHeader>
                            <CardTitle>{pages[step].title}</CardTitle>
                            <CardDescription>
                                {pages[step].description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-2">
                            {pages[step].options.map((item, index) => {
                                return (
                                    <Button
                                        variant={"outline"}
                                        className="rounded-full"
                                        onClick={() => {
                                            setAnswers({
                                                ...answers,
                                                [pages[step].key]: item,
                                            });
                                            setStep(step + 1);
                                        }}
                                        key={index}
                                    >
                                        {item}
                                    </Button>
                                );
                            })}
                        </CardContent>
                        <CardFooter className="mx-auto text-center">
                            هزینه تخمینی : {price.toLocaleString()} تومان
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
                            {pages.map((item, index) => {
                                return (
                                    <div key={index} className="grid">
                                        <span className="text-muted text-xs">
                                            {item.title}
                                        </span>
                                        <span>{answers[item.key]}</span>
                                    </div>
                                );
                            })}
                        </CardContent>
                        <CardFooter className="mx-auto grid gap-2 text-center">
                            هزینه تخمینی : {price.toLocaleString()} تومان
                            <Button className="rounded-full">
                                تکمیل سفارش
                            </Button>
                        </CardFooter>
                    </>
                )}
            </Card>
            <div
                className={`grid w-72 origin-bottom gap-4 justify-self-end py-12 text-center transition-all duration-300 ease-in-out`}
            >
                <Progress value={((step + 1) * 100) / 7} />
                <p className="text-foreground text-sm">
                    مرحله{" "}
                    {step === 0
                        ? "اول"
                        : step === 1
                          ? "دوم"
                          : step === 2
                            ? "سوم"
                            : step === 3
                              ? "چهارم"
                              : step === 4
                                ? "پنجم"
                                : step === 5
                                  ? "ششم"
                                  : "هفتم"}
                </p>
            </div>
        </AnimatedContent>
    );
};

export default Orders;
