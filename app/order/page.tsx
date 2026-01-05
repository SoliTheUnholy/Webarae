import AnimatedContent from "@/components/AnimatedContent";
import React from "react";

const Orders = () => {
    return (
        <AnimatedContent
            duration={2}
            animateOpacity
            className="flex flex-col items-center justify-center gap-4 w-full h-full"
        >
            <h1 className="text-center text-6xl font-black">بزودی</h1>
        </AnimatedContent>
    );
};

export default Orders;
