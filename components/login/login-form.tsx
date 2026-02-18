"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader, Terminal } from "lucide-react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import AnimatedContent from "../AnimatedContent";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import SplitText from "@/components/SplitText";

const formSchema = z.object({
    phone: z
        .string()
        .regex(
            new RegExp(/^(\+98|98|0)?9\d{9}$/),
            "شماره را به درستی وارد نمایید.",
        ),
    otp: z.string().min(6, "رمز یکبار مصرف را وارد کنید."),
});

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
            otp: "",
        },
    });

    function SendCode() {
        setLoading(true);
        form.setFocus("otp");
        form.trigger("phone").then(() => {
            if (!form.getFieldState("phone").error) {
                //otp send api call here + if success
                setLoading(false);
                setTimeRemaining(initialTime);
                setOtp(true);
            }
            setLoading(false);
        });
    }
    function Submit() {
        setLoading(true);
        form.trigger("otp").then(() => {
            if (!form.getFieldState("otp").error) {
                router.push("./");
                //otp check api call here + if success
                setLoading(false);
            }
            setLoading(false);
        });
    }
    const initialTime = 30;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [resend, setResend] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === -1) {
                    return -1;
                } else if (prevTime === 0) {
                    setResend(true);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);
    }, []);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    useEffect(() => {
        if (otp) {
            const abortController = new AbortController();

            if ("OTPCredential" in window) {
                const ac = new AbortController();
                navigator.credentials
                    .get({
                        otp: { transport: ["sms"] },
                        signal: ac.signal,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .then((otp: any) => {
                        if (otp && otp.code) {
                            form.setValue("otp", otp.code);
                            Submit();
                        }
                    })
                    .catch((err) => {
                        console.log("Error reading OTP:", err);
                    });

                return () => {
                    ac.abort();
                };
            }

            return () => {
                abortController.abort();
            };
        }
    }, [otp]);
    return (
        <AnimatedContent
            duration={2}
            animateOpacity
            className="grid h-full items-center justify-center"
        >
            <Card className="w-[90vw] max-w-96 gap-2 rounded-4xl">
                <CardHeader key={otp.toString()} >
                    <CardTitle>
                        <SplitText
                            splitType="words"
                            ease={"power3.out"}
                            delay={100}
                            duration={1}
                            rootMargin="0"
                            textAlign="right"
                            tag="span"
                            text={otp ? "رمز" : "شماره تماس"}
                        />
                    </CardTitle>
                    <CardDescription>
                        <SplitText
                            splitType="words"
                            ease={"power3.out"}
                            delay={100}
                            duration={1}
                            rootMargin="0"
                            textAlign="right"
                            tag="span"
                            text={
                                otp
                                    ? "رمز پیامک شده را وارد نمایید."
                                    : "شماره تماس خود را وارد نمایید."
                            }
                        />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className={`relative grid`}>
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem
                                        className={`transition-all duration-500 ${otp && "h-0 translate-y-1/2 scale-y-0 opacity-0"}`}
                                    >
                                        <FormMessage className="mx-auto" />
                                        <FormControl
                                            onChange={(e) => {
                                                if (
                                                    form
                                                        .getValues("phone")
                                                        .match(
                                                            new RegExp(
                                                                /^(\+98|0)?9\d{9}$/,
                                                            ),
                                                        )
                                                ) {
                                                    SendCode();
                                                }
                                            }}
                                        >
                                            <Input
                                                autoFocus
                                                type="number"
                                                inputMode="numeric"
                                                className="h-10 rounded-2xl text-center placeholder:text-center"
                                                placeholder="09xxxx1234"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem
                                        className={`transition-all duration-500 ${!otp && "h-0 translate-y-1/2 scale-y-0 opacity-0"}`}
                                    >
                                        <FormMessage className="mx-auto" />
                                        <FormControl
                                            onChange={(e) => {
                                                if (
                                                    form.getValues().otp
                                                        .length === 6
                                                ) {
                                                    Submit();
                                                }
                                            }}
                                        >
                                            <InputOTP
                                                autoFocus
                                                inputMode="numeric"
                                                maxLength={6}
                                                {...field}
                                            >
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                    <Button
                                                        size={"lg"}
                                                        style={{
                                                            pointerEvents:
                                                                "auto",
                                                        }}
                                                        disabled={!resend}
                                                        variant={"ghost"}
                                                        className="z-20 grow cursor-pointer rounded-2xl rounded-l-none border border-l-0"
                                                        onClick={() => {
                                                            form.setValue(
                                                                "otp",
                                                                "",
                                                            );
                                                            setTimeRemaining(
                                                                -1,
                                                            );
                                                            setResend(false);
                                                            try {
                                                                fetch(
                                                                    "https:///api/Sign/SendPhoneNumber",
                                                                    {
                                                                        method: "POST",
                                                                        headers:
                                                                            {
                                                                                "Content-Type":
                                                                                    "application/json",
                                                                            },
                                                                        body: JSON.stringify(
                                                                            {
                                                                                PhoneNumber:
                                                                                    form.getValues(
                                                                                        "phone",
                                                                                    ),
                                                                            },
                                                                        ),
                                                                    },
                                                                ).then(
                                                                    async (
                                                                        response,
                                                                    ) => {
                                                                        if (
                                                                            response.ok
                                                                        ) {
                                                                            setTimeRemaining(
                                                                                initialTime,
                                                                            );
                                                                        } else {
                                                                            setResend(
                                                                                true,
                                                                            );
                                                                        }
                                                                    },
                                                                );
                                                            } catch (error) {
                                                                setResend(true);
                                                                console.error(
                                                                    "Error submitting data:",
                                                                    error,
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        <span className="w-12 flex items-center justify-center">
                                                            {timeRemaining !=
                                                                0 &&
                                                            timeRemaining !=
                                                                -1 ? (
                                                                minutes +
                                                                ":" +
                                                                (seconds <= 9
                                                                    ? "0" +
                                                                      seconds
                                                                    : seconds)
                                                            ) : !resend ? (
                                                                <>
                                                                    <Loader className="text-muted-foreground animate-spin" />
                                                                </>
                                                            ) : (
                                                                "ارسال مجدد"
                                                            )}
                                                        </span>
                                                    </Button>
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <Button
                        size={"lg"}
                        className="grow rounded-2xl font-semibold"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!otp) {
                                SendCode();
                            } else {
                                Submit();
                            }
                        }}
                    >
                        {loading ? (
                            <>
                                <Loader className="text-muted-foreground mx-2 animate-spin" />
                                منتظر بمانید
                            </>
                        ) : !otp ? (
                            "ارسال کد تایید"
                        ) : (
                            "ثبت نام"
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </AnimatedContent>
    );
};

export default LoginForm;
