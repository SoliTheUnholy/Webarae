import Silk from "@/components/silk/silk";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div className="fixed h-screen w-screen">
                <Silk
                    speed={5}
                    scale={1}
                    color="#461901"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className="absolute">
                <div className="grid min-h-screen w-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
                    <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
                        <span className="text-4xl font-bold">Contact</span>
                        <ol className="list-inside list-decimal text-center font-mono text-sm/6 sm:text-left">
                            <li className="mb-2 tracking-[-.01em]">
                                Get started by editing{" "}
                                <code className="rounded bg-black/[.05] px-1 py-0.5 font-mono font-semibold dark:bg-white/[.06]">
                                    app/page.tsx
                                </code>
                                .
                            </li>
                            <li className="tracking-[-.01em]">
                                Save and see your changes instantly.
                            </li>
                        </ol>
                        <div className="flex flex-col items-center gap-4 sm:flex-row">
                            <a
                                className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
                                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="dark:invert"
                                    src="/vercel.svg"
                                    alt="Vercel logomark"
                                    width={20}
                                    height={20}
                                />
                                Deploy now
                            </a>
                            <a
                                className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read our docs
                            </a>
                        </div>
                    </main>
                    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
                        <Link
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="/"
                        >
                            <Image
                                aria-hidden
                                src="/file.svg"
                                alt="File icon"
                                width={16}
                                height={16}
                            />
                            Home
                        </Link>
                        <Link
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="/about"
                        >
                            <Image
                                aria-hidden
                                src="/window.svg"
                                alt="Window icon"
                                width={16}
                                height={16}
                            />
                            About
                        </Link>
                        <Link
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="/contact"
                        >
                            <Image
                                aria-hidden
                                src="/globe.svg"
                                alt="Globe icon"
                                width={16}
                                height={16}
                            />
                            Contact
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
}
