import React from "react";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import GlassButton from "../glass-button/glass-button";

const LoginButton = () => {
    return (
        <Link href={"./login"}>
            <GlassButton  className="flex">
                <User className="h-4 w-4 stroke-3" />
                <span className="-mt-[6px]">ورود</span>
            </GlassButton>
        </Link>
    );
};

export default LoginButton;
