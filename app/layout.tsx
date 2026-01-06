import type { Metadata } from "next";
import "./globals.css";
import View from "@/components/transitions/view";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Viewport } from "next";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    interactiveWidget: "resizes-content",
    viewportFit: "contain",
};
export const metadata: Metadata = {
    title: "Webarae",
    description: "Web development",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html dir="rtl" lang="en" suppressHydrationWarning>
            <body className={`bg-background antialiased`}>
                <ThemeProvider attribute="class" themes={["dark", "light"]}>
                    <View>{children}</View>
                </ThemeProvider>
            </body>
        </html>
    );
}
