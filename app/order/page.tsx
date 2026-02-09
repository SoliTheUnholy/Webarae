"use client";
import AnimatedContent from "@/components/AnimatedContent";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

const Orders = () => {
    const [step, setStep] = useState(1);
    return (
        <AnimatedContent
            duration={2}
            animateOpacity
            className="flex h-full w-full flex-col items-center justify-center"
        >
            <Card className="w-[90vw] max-w-96 rounded-4xl">
                <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter></CardFooter>
            </Card>
            <div
                className={`grid w-72 origin-bottom gap-4 justify-self-end py-12 text-center transition-all duration-300 ease-in-out`}
            >
                <p className="text-foreground text-sm">
                    مرحله{" "}
                    {step === 1
                        ? "اول"
                        : step === 2
                          ? "دوم"
                          : step === 3
                            ? "سوم"
                            : step === 4
                              ? "چهارم"
                              : step === 5
                                ? "پنجم"
                                : ""}
                </p>
            </div>
        </AnimatedContent>
    );
};

export default Orders;
