"use client";
import React from "react";
import { User } from "lucide-react";
import LiquidButton from "../glass-button/glass-button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
    const router = useRouter();
    return (
        <LiquidButton
            onClick={() => {
                router.push("/login");
            }}
        >
            <User className="h-4 w-4 stroke-3" />
            <span className="sr-only">login</span>
        </LiquidButton>
    );
};

export default LoginButton;
