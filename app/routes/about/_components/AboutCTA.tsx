"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export function AboutCTA() {
    return (
        <section className="py-12 md:py-24 px-4 md:px-6">
            <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-primary via-primary-dark to-[#0a4a32] rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-20 text-center group">

                {/* Animated Background Blobs - Cheerful Vibe */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[-10%] -right-[10%] w-[50%] h-[50%] bg-primary-light/30 rounded-full blur-[80px]"
                    />
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                        Siap Menjadi Bagian dari <br />
                        <span className="text-secondary inline-block relative">
                            Keluarga Besar Kami?
                            {/* Decorative underline */}
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary/50 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium"
                    >
                        Pendidikan berkualitas dengan nilai-nilai Islami menanti putra-putri Anda. Mari tumbuh, belajar, and berprestasi bersama kami.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                    >
                        <button className="group relative px-8 py-4 bg-secondary text-primary-dark font-bold rounded-full shadow-[0_4px_14px_0_rgba(212,160,23,0.39)] hover:shadow-[0_6px_20px_rgba(212,160,23,0.23)] hover:bg-white hover:text-secondary transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden transform hover:-translate-y-1">
                            <span className="relative z-10">Hubungi Kami</span>
                            <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                        </button>

                        <button className="group px-8 py-4 bg-white/5 text-white font-bold border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 transform hover:-translate-y-1">
                            <span>Lihat Program</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
