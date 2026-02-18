import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link
            href={"./"}
            className="hover:text-primary px-3 py-2 font-mono text-xl sm:text-2xl font-bold text-nowrap duration-300"
        >
            وب آرای
        </Link>
    );
};

export default Logo;
