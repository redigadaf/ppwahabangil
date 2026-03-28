"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)", scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12, mass: 0.4 }
    }
};

export function ContactHero() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const yBackground = useTransform(scrollY, [0, 500], ["0%", "30%"]);
    const yText = useTransform(scrollY, [0, 300], ["0%", "-15%"]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0.2]);
    const yShape1 = useTransform(scrollY, [0, 500], ["0%", "-40%"]);
    const yShape2 = useTransform(scrollY, [0, 500], ["0%", "-20%"]);

    return (
        <section ref={targetRef} className="relative w-full min-h-[80vh] lg:h-screen overflow-hidden bg-primary flex items-center justify-center px-4 pt-20 pb-16 lg:pt-0 lg:pb-16">
            {/* Playful Animated Background Elements with Parallax */}
            <motion.div style={{ y: yBackground }} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Subtle base gradient and noise texture */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light/40 via-primary to-primary-dark" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />

                {/* Glowing Orbs */}
                <div className="absolute top-0 -right-20 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-secondary/15 rounded-full blur-[80px] md:blur-[100px]" />
                <div className="absolute bottom-0 -left-20 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-emerald-400/10 rounded-full blur-[80px] md:blur-[100px]" />
                <div className="absolute top-1/3 left-1/4 w-[15rem] h-[15rem] bg-yellow-400/10 rounded-full blur-[60px]" />

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' width='29' height='50.115' patternTransform='scale(2)' patternUnits='userSpaceOnUse'%3E%3Crect width='100%25' height='100%25' fill='%232b2b31'/%3E%3Cpath fill='none' stroke='%23ecc94b' d='M14.498 16.858 0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' fill='url(%23a)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* Floating Parallax Shapes */}

                {/* Shape 1: Dashed Circle Right */}
                <motion.div style={{ y: yShape1 }} className="absolute top-1/4 right-[5%] md:right-[15%] opacity-30">
                    <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="relative w-24 h-24 md:w-40 md:h-40 border-[3px] md:border-[4px] border-dashed border-white/20 rounded-full"
                    />
                </motion.div>

                {/* Shape 2: Rounded Square Left */}
                <motion.div style={{ y: yShape2 }} className="absolute bottom-1/3 left-[8%] md:left-[12%] opacity-40">
                    <motion.div
                        animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 90, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-secondary/30 backdrop-blur-sm"
                    />
                </motion.div>

                {/* Shape 3: Triangle/Polygon Top Left */}
                <motion.div style={{ y: yShape1 }} className="absolute top-[15%] left-[10%] opacity-20 hidden md:block">
                    <motion.div
                        animate={{ rotate: [0, -180, -360], scale: [1, 1.2, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-[3px] border-yellow-200/50"
                        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    />
                </motion.div>

                {/* Shape 4: Small Dotted Ring Bottom Right */}
                <motion.div style={{ y: yShape2 }} className="absolute bottom-[20%] right-[20%] opacity-30">
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 md:w-28 md:h-28 border-[4px] border-dotted border-white/30 rounded-full"
                    />
                </motion.div>

                {/* Shape 5: Floating Mini Dots (Cluster) */}
                <motion.div style={{ y: yBackground }} className="absolute top-[40%] right-[8%] opacity-50 hidden lg:flex gap-2">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10 * i, 0], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                            className="w-3 h-3 bg-yellow-300/40 rounded-full"
                        />
                    ))}
                </motion.div>

                {/* Shape 6: Zigzag Line Center Bottom */}
                <motion.div style={{ y: yShape1 }} className="absolute bottom-[10%] left-1/2 -translate-x-1/2 opacity-20 max-w-xs md:max-w-sm w-full px-10">
                    <motion.svg
                        animate={{ x: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        viewBox="0 0 100 20" className="w-full h-6 md:h-8 text-white stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M0 10 L 20 0 L 40 20 L 60 0 L 80 20 L 100 10" />
                    </motion.svg>
                </motion.div>

            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full h-full flex flex-col items-center justify-center">
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-3xl mx-auto flex flex-col items-center justify-center pt-8 sm:pt-0"
                >

                    {/* Main Heading Container */}
                    <motion.div variants={itemVariants} className="relative inline-block mb-4 md:mb-6 w-full max-w-[90vw] md:max-w-none">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-xl flex flex-col sm:flex-row items-center justify-center sm:gap-3 flex-wrap">
                            <motion.span
                                animate={{ rotate: [0, -2, 2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Mari
                            </motion.span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary via-yellow-200 to-yellow-400 relative inline-block mx-1 md:mx-2 mt-2 sm:mt-0 drop-shadow-sm">
                                Terhubung!
                                <svg className="absolute w-full h-3 sm:h-4 -bottom-1 sm:-bottom-2 left-0 text-secondary/60 -z-10 drop-shadow-md" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="0">
                                        <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" fill="freeze" />
                                    </path>
                                </svg>
                            </span>
                        </h1>

                    </motion.div>

                    {/* Subtitle Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-medium leading-relaxed max-w-sm sm:max-w-xl md:max-w-2xl mx-auto drop-shadow-sm px-2 sm:px-4 md:px-0 mb-6 md:mb-8"
                    >
                        Punya pertanyaan seputar program pendidikan, fasilitas, atau jalur <span className="font-bold text-yellow-200 underline decoration-yellow-400/50 decoration-2 underline-offset-4">Pendaftaran</span>? Jangan ragu, tim kami yang ramah siap membantumu! ✨
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="#contact-form">
                            <Button size="lg" className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 bg-gradient-to-r from-secondary to-yellow-400 hover:from-yellow-400 hover:to-secondary text-primary-dark font-extrabold text-sm md:text-base lg:text-lg rounded-full shadow-[0_10px_30px_-10px_rgba(250,204,21,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(250,204,21,0.7)] border-2 border-yellow-200/50 transition-all duration-300 group cursor-pointer">
                                Kirim Pesan Sekarang
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <HeartHandshake className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </motion.div>
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Formatted SVG Wave replacing standard vector line */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[60px] md:h-[90px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
}
