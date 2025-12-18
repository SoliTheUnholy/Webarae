import React from "react";
import LiquidButton from "../glass-button/glass-button";
import { Terminal } from "lucide-react";

const Logo = () => {
    return (
        <LiquidButton className="w-30 gap-2">
            <span className="font-bold font-mono">وبآرای</span>
            <Terminal className="" />
        </LiquidButton>
    );
};

export default Logo;
