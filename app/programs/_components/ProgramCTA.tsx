"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRegistration } from "@/components/context/RegistrationContext";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export function ProgramCTA() {
    const { openModal } = useRegistration();

    return (
        <section className="py-4 relative overflow-hidden text-center text-white">
            {/* Dynamic Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0B7A5D] to-primary-dark z-0" />

            {/* Cheerful Animated Background Patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* 1. Large Spinning Dashed Circle (Right Top) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[30%] -right-[15%] w-[600px] h-[600px] opacity-[0.15]"
                >
                    <div className="w-full h-full border-[4px] border-dashed border-secondary rounded-full" />
                </motion.div>

                {/* 2. Large Spinning Solid Circle (Left Bottom) */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[40%] -left-[10%] w-[600px] h-[600px] opacity-[0.03]"
                >
                    <div className="w-full h-full border-[30px] border-white rounded-full" />
                </motion.div>

                {/* 3. Floating Colorful Blob (Left Top) */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[5%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
                />

                {/* 4. Floating Colorful Blob (Right Bottom) */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-white/5 rounded-full blur-3xl"
                />

                {/* 5. Floating Elements (Sparkles & Shapes) */}
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, 45, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-[15%] w-6 h-6 border-2 border-white/20 rotate-45"
                />

                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 left-[10%] w-4 h-4 bg-secondary/30 rounded-full"
                />

                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-32 right-[25%] w-10 h-10 text-white/10"
                >
                    <div className="w-full h-full rounded-full border border-white/20" />
                </motion.div>

                {/* 6. Random Small Dots */}
                <div className="absolute top-[15%] right-[30%] w-2 h-2 bg-white/20 rounded-full" />
                <div className="absolute bottom-[20%] left-[30%] w-3 h-3 bg-secondary/20 rounded-full" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" style={{ backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-10 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white drop-shadow-2xl">
                            Siap Menjadi Bagian dari <br />
                            <span className="relative inline-block mt-3 px-4 py-1">
                                <span className="relative z-10 text-secondary drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
                                    Keluarga Besar
                                </span>
                                <motion.span
                                    animate={{
                                        rotate: [0, 10, 0, 10, 0],
                                        scale: [1, 1.1, 1, 1.1, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    className="inline-block origin-bottom-left ml-2 text-secondary"
                                >
                                    ?
                                </motion.span>

                                {/* Soft Glow Backdrop */}
                                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10 scale-110" />

                                {/* Decorative Underline */}
                                <motion.svg
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                                    viewBox="0 0 300 12"
                                    className="absolute -bottom-2 left-0 w-full h-3 text-secondary"
                                    fill="none"
                                >
                                    <path d="M5 8c50-5 100-5 290 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </motion.svg>
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
                        Bergabunglah bersama kami untuk mewujudkan generasi Rabbani yang unggul, berakhlak mulia, dan berwawasan global.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
                        <motion.button
                            onClick={openModal}
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="group relative px-8 py-4 bg-secondary text-white/90 font-black rounded-full text-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)] transition-shadow duration-200 flex items-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-white/50 cursor-pointer"
                        >
                            <span className="relative z-10">Daftar Sekarang</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform stroke-[3px]" />
                        </motion.button>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.8 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-bold rounded-full text-lg transition-all flex items-center gap-3 hover:bg-white/20 hover:border-white cursor-pointer"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Hubungi Kami</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Curve to Blend with Footer */}
            <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] text-primary-dark fill-current" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
}
