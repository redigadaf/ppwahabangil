"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

import { useRef } from "react";

export function Hero() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityBackground = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Variants for stagger animation
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Jeda antar elemen
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const badgeVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 15 },
        },
    };

    return (
        <section ref={targetRef} className="relative w-full px-4 py-16 flex flex-col justify-between overflow-hidden bg-white text-text-main">

            {/* --- Background Elements with Parallax --- */}

            {/* Top Green Geometric Background */}
            <motion.div
                style={{ y: yBackground, opacity: opacityBackground }}
                className="absolute top-0 left-0 w-full h-[60vh] bg-primary z-0"
            >
                {/* CSS Pattern Overlay (Grid) */}
                <div className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='a' width='69.141' height='40' patternTransform='scale(2.3)' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='1' d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E")`,
                        maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
                    }}
                />

                {/* Decorative Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-32 -left-32 w-[60vh] h-[60vh] bg-white rounded-full blur-3xl opacity-20 mix-blend-overlay"
                />

                {/* Angled Bottom Edge */}
                <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)" }}></div>
                <div className="absolute bottom-0 right-0 w-[60%] h-[20vh] bg-secondary/10" style={{ clipPath: "polygon(20% 100%, 100% 100%, 100% 0)" }}></div>
            </motion.div>

            {/* --- Main Content --- */}

            <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center justify-center h-full pt-16 md:pt-20">

                {/* 1. Header Area (Badge) */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }} // Re-animate on scroll
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute top-20 right-4 md:top-24 md:right-8 lg:right-4 flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-lg border border-white/20 shadow-lg z-20 hover:bg-white/20 transition-colors"
                >
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-8 h-8 drop-shadow-md" />
                    <div className="text-white text-[10px] md:text-xs font-medium leading-tight text-right drop-shadow-md">
                        <span className="block font-bold">PP Waha Bangil</span>
                        <span className="opacity-90">Program Unggulan</span>
                    </div>
                </motion.div>

                {/* 1b. Accreditation Badge - Top Left (Opposite Logo) */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute top-20 left-4 md:top-24 md:left-8 lg:left-4 flex items-center gap-2 bg-white text-primary px-4 py-1.5 rounded-full shadow-lg z-20 cursor-pointer hover:scale-110 transition-transform border border-gray-100"
                >
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-xs md:text-sm font-bold">Terakreditasi A</span>
                </motion.div>

                {/* 2. Center Image (Focal Point) - Scaled with VH */}
                <motion.div
                    style={{ scale: scaleImage, opacity: opacityContent }} // Parallax Scale Effect
                    className="relative z-10 flex items-center justify-center mb-4 md:mb-6 perspective-1000"
                >
                    <motion.div
                        initial={{ rotateY: 90, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative w-[35vh] h-[35vh] md:w-[45vh] md:h-[45vh] flex items-center justify-center"
                    >
                        {/* Rotating Background Shapes */}
                        <motion.div
                            animate={{ rotate: [12, -12, 12] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[2rem] scale-110 shadow-xl border border-white/30"
                        />
                        <motion.div
                            animate={{ rotate: [-6, 6, -6] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-2 bg-secondary rounded-[1.8rem] shadow-lg"
                        />

                        {/* Main Image Container */}
                        <div className="relative w-full h-full bg-white rounded-[1.8rem] rotate-45 overflow-hidden border-[6px] border-white shadow-2xl group">
                            <div className="absolute inset-0 -rotate-45 scale-[1.35] transition-transform duration-700 group-hover:scale-[1.45]">
                                <Image
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                                    alt="Santri PP Wahabangil"
                                    fill
                                    className="object-cover"
                                    sizes="(max-height: 700px) 300px, 500px"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3. Typography & CTA - Scaled appropriately with Stagger */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }} // Re-trigger when scroll
                    style={{ y: yText, opacity: opacityContent }} // Parallax scroll
                    className="text-center relative z-20 max-w-5xl mx-auto -mt-2 md:-mt-6 px-4 flex flex-col items-center"
                >
                    <motion.div variants={badgeVariants} className="mb-1 md:mb-2">
                        <span className="bg-white/70 text-primary px-4 py-1 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-gray-100 shadow-md inline-flex items-center gap-2 hover:bg-white transition-colors">
                            Pondok Pesantren Modern
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative z-10">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black text-white italic tracking-tighter leading-none pb-2 drop-shadow-xl select-none transition-transform hover:scale-[1.02] duration-300"
                            style={{
                                textShadow: "3px 3px 0 #1F7A4C, 5px 5px 0 #D4A017",
                                WebkitTextStroke: "1.5px #1F7A4C",
                                paintOrder: "stroke fill"
                            }}
                        >
                            WAHA BANGIL
                        </h1>
                        {/* Playful Decorations */}
                        <motion.span
                            animate={{
                                rotate: [0, 10, 0, -10, 0],
                                scale: [1, 1.2, 1],
                                y: [0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-2 -right-4 md:-top-4 md:-right-8 text-3xl md:text-5xl text-secondary z-[-1] inline-block"
                        >
                            ✦
                        </motion.span>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-text-muted text-sm md:text-lg lg:text-xl font-medium max-w-xl mx-auto -mt-1 leading-relaxed"
                    >
                        Membangun Karakter Islami, <span className="relative inline-block px-1 ml-1 group cursor-default">
                            <span className="absolute inset-0 bg-secondary/20 -skew-x-6 rounded-sm transition-transform group-hover:skew-x-0"></span>
                            <span className="relative text-primary-dark font-bold">Mencerdaskan Generasi</span>
                        </span>
                    </motion.p>


                </motion.div>


            </div>


        </section>
    );
}
