"use client";

import Stepper, { Step } from "@/components/Stepper";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
const formSchema = z.object({
    title: z.string().min(2, "").max(32, ""),
    phone: z.string().min(9, "").max(12, ""),
    origin: z.string().min(9, "").max(12, ""),
    destination: z.string().min(9, "").max(12, ""),
    distance: z.string().min(9, "").max(12, ""),
    count: z.string().min(9, "").max(12, ""),
    price: z.string().min(9, "").max(12, ""),
    total: z.string().min(9, "").max(12, ""),
    payment: z.string().min(9, "").max(12, ""),
    check_number: z.string().min(9, "").max(12, ""),
    check_date: z.string().min(9, "").max(12, ""),
    check_bank: z.string().min(9, "").max(12, ""),
});
export function MixerForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            phone: "",
            origin: "",
            destination: "",
            distance: "",
            count: "",
            price: "",
            total: "",
            payment: "",
            check_number: "",
            check_date: "",
            check_bank: "",
        },
    });
    function onSubmit(data: z.infer<typeof formSchema>) {
        // toast("You submitted the following values:", {
        //     description: (
        //         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
        //             <code>{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        //     position: "bottom-right",
        //     classNames: {
        //         content: "flex flex-col gap-2",
        //     },
        //     style: {
        //         "--border-radius": "calc(var(--radius)  + 4px)",
        //     } as React.CSSProperties,
        // });
    }

    return (
        <form
            className="absolute flex h-screen w-full items-center justify-center"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <Stepper
                className="w-10/12 max-w-96"
                initialStep={1}
                onStepChange={(step) => {
                    console.log(step);
                }}
                onFinalStepCompleted={() => console.log("All steps completed!")}
                backButtonText="مرحله قبل"
                nextButtonText="مرحله بعد"
            >
                <Step>
                    <FieldGroup>
                        <Controller
                            name="title"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-title">
                                        نام کارخانه/شرکت
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-input-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="وبارای"
                                        autoComplete="title"
                                    />
                                    <FieldDescription>
                                        نام شرکت یا شخص
                                    </FieldDescription>
                                    {/* {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )} */}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </Step>
                <Step>
                    <FieldGroup>
                        <Controller
                            name="origin"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-origin">
                                        مبدا بارگیری
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-input-origin"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="شیراز، شهرک صنعتی"
                                        autoComplete="origin"
                                    />
                                    <FieldDescription>
                                        مبدا انجام بارگیری
                                    </FieldDescription>
                                    {/* {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )} */}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </Step>
                <Step>
                    <FieldGroup>
                        <Controller
                            name="count"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-count">
                                        تعداد سرویس
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        type="number"
                                        inputMode="numeric"
                                        id="form-rhf-input-count"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="12"
                                        autoComplete="count"
                                    />
                                    <FieldDescription>
                                        تعداد سرویس مورد نیاز
                                    </FieldDescription>
                                    {/* {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )} */}
                                </Field>
                            )}
                        />
                        <Controller
                            name="price"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-price">
                                        کرایه
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        type="number"
                                        inputMode="numeric"
                                        id="form-rhf-input-price"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="12"
                                        autoComplete="price"
                                    />
                                    <FieldDescription>
                                        کرایه هر سرویس
                                    </FieldDescription>
                                    {/* {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )} */}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </Step>

                <Step>
                    <FieldGroup>
                        <Controller
                            name="payment"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-payment">
                                        نحوه پرداخت
                                    </FieldLabel>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="form-rhf-select-language"
                                            aria-invalid={fieldState.invalid}
                                            className="min-w-[120px]"
                                        >
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent position="item-aligned">
                                            <SelectItem value="auto">
                                                چک
                                            </SelectItem>
                                            <SelectItem value="en">
                                                نقد
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FieldDescription>
                                        نحوه پرداخت
                                    </FieldDescription>
                                    {/* {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )} */}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </Step>
            </Stepper>
        </form>
    );
}
