import React from "react";
import { Button } from "../ui/button";
import { User } from "lucide-react";

const LoginButton = () => {
    return (
        <Button variant={"ghost"} className="flex">
            <User className="h-4 w-4 stroke-3" />
            <span className="-mt-[6px]">ورود</span>
        </Button>
    );
};

export default LoginButton;
