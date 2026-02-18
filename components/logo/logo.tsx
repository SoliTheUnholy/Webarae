import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href={"./"} className="font-mono text-2xl font-bold text-nowrap hover:text-primary duration-300">وب آرای</Link>
    );
};

export default Logo;
