"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroVideo() {
    const titles = ["Membangun Karakter Islami", "Mencerdaskan Generasi"];
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Variants for stagger animation
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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
                stiffness: 80,
                damping: 15,
            },
        },
    };

    const badgeVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 20 },
        },
    };

    return (
        <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full scale-[1.02]"
                >
                    <source src="/assets/video/waha.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                {/* Subtle green tint overlay */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container px-4 mx-auto flex flex-col items-center text-center -mt-10 md:-mt-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center max-w-5xl mx-auto w-full"
                >
                    <motion.div variants={badgeVariants} className="mb-4 md:mb-6">
                        <span className="bg-black/30 backdrop-blur-md text-white px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-white/20 shadow-xl inline-flex items-center gap-2 hover:bg-black/50 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#D4A017]" />
                            Pondok Pesantren Modern
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative z-10 w-full mb-0 h-[80px] md:h-[120px] flex items-center justify-center">
                        <h1 className="font-black text-white italic tracking-tighter leading-none select-none w-full max-w-5xl"
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                textShadow: "0.03em 0.03em 0 #1F7A4C, 0.05em 0.05em 0 #D4A017",
                                WebkitTextStroke: "1px #1F7A4C",
                                paintOrder: "stroke fill",
                                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))"
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={titleIndex}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.08 }
                                        },
                                        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                                    }}
                                    className="flex flex-wrap justify-center"
                                >
                                    {titles[titleIndex].split(" ").map((word, wordIndex) => (
                                        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
                                            {word.split("").map((char, charIndex) => (
                                                <motion.span
                                                    key={charIndex}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 30, rotateX: -45 },
                                                        visible: {
                                                            opacity: 1,
                                                            y: 0,
                                                            rotateX: 0,
                                                            transition: { type: "spring", damping: 12, stiffness: 200 }
                                                        }
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-100 text-sm md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto mb-8 mt-4 md:mt-2 leading-relaxed shadow-sm drop-shadow-md"
                    >
                        untuk masa depan yang lebih baik.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-[0_0_20px_rgba(31,122,76,0.6)] hover:shadow-[0_0_30px_rgba(31,122,76,0.9)] transition-all duration-300 flex items-center gap-3 border border-primary-light/30 group backdrop-blur-sm"
                        >
                            <span className="text-sm md:text-lg tracking-wide">Daftar Sekarang</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
