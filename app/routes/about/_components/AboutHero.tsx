"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)", scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 10, mass: 0.5 }
    }
};

export function AboutHero() {
    const { scrollY } = useScroll();

    const yBackground = useTransform(scrollY, [0, 500], ["0%", "50%"]);
    const yText = useTransform(scrollY, [0, 300], ["0%", "-50%"]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
    const rotateShape = useTransform(scrollY, [0, 500], [0, 360]);
    const yShape1 = useTransform(scrollY, [0, 500], ["0%", "-30%"]);
    const yShape2 = useTransform(scrollY, [0, 500], ["0%", "-60%"]);

    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary px-4">

            {/* 1. Dynamic Background with Parallax */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light/40 via-primary to-primary-dark"
            />

            {/* 2. Abstract Geometric Shapes - Cheerful & Modern */}
            <motion.div
                style={{ y: yShape1 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-96 h-96 opacity-10"
            >
                <div className="absolute inset-0 border-[40px] border-secondary rounded-full border-dashed" />
            </motion.div>

            <motion.div style={{ y: yShape1 }} className="absolute top-1/3 right-[10%]">
                <motion.div
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        rotate: 360,
                    }}
                    transition={{
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-64 h-64 bg-secondary/30 rounded-full blur-[80px] mix-blend-screen"
                />
            </motion.div>

            <motion.div style={{ y: yShape2 }} className="absolute bottom-0 left-[15%]">
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-80 h-80 bg-white/20 rounded-full blur-[100px] mix-blend-overlay"
                />
            </motion.div>

            {/* Pattern Overlay - Grey Lines */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 opacity-[0.08]"
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='a' width='20' height='20' patternTransform='scale(2)' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' stroke='%23e5e7eb' stroke-linecap='square' d='M10-6V6m0 8v12m16-16H14m-8 0H-6'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                    }}
                />
            </motion.div>

            {/* 3. Main Content with Parallax */}
            <motion.div
                className="container relative z-10"
                style={{ y: yText, opacity: opacityText }}
            >
                <motion.div
                    className="flex flex-col items-center text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div
                        variants={itemVariants}
                        className="mb-8 relative inline-block group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >


                        <Badge variant="outline" className="relative px-6 py-2.5 border-yellow-200/30 bg-emerald-900/30 text-white backdrop-blur-md rounded-full shadow-2xl text-sm md:text-base font-semibold tracking-wide gap-3 hover:bg-emerald-900/40 transition-all duration-300 flex items-center ring-1 ring-white/10">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                            </span>
                            <span className="bg-gradient-to-r from-yellow-100 to-white bg-clip-text text-transparent">
                                Tentang Pondok Pesantren KHA. Wahid Hasyim Bangil
                            </span>
                        </Badge>

                        {/* Floating Star Decoration */}
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 3, repeatDelay: 1 }}
                            className="absolute -top-3 -right-3 text-secondary"
                        >
                            <Star className="w-6 h-6 fill-yellow-400 text-yellow-500 drop-shadow-md" />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-lg leading-[1.1]"
                    >
                        Berilmu & <br className="hidden md:block" />
                        <span className="relative inline-block text-secondary">
                            Berkarakter
                            {/* Doodle Underline */}
                            <svg className="absolute -bottom-3 left-0 w-full h-4 text-white/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 7.00005C29.6231 2.37397 101.992 -3.42593 197.999 3.00009" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto mb-16 text-lg md:text-2xl text-white/90 leading-relaxed font-medium"
                    >
                        Bukan sekadar Pondok Pesantren, tapi
                        <span className="relative inline-block mx-2 group">
                            <span className="absolute inset-0 bg-yellow-400 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></span>
                            <span className="relative font-bold text-primary-dark px-3 py-0.5 z-10 block transform group-hover:scale-105 transition-transform">rumah</span>
                        </span>
                        bagi <span className="font-bold text-white decoration-2 decoration-secondary/30 underline-offset-4">generasi cerdas</span> yang menjunjung tinggi <span className="font-serif italic font-bold text-yellow-100">nilai Islami</span>.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Bottom Wave - Smoother */}
            <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
}
