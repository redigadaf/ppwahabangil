"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdmissionCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0B7A5D] to-primary-dark z-0" />

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border-[50px] border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] border-[30px] border-secondary/10 rounded-full"
                />

                {/* Floating particles */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[15%] w-4 h-4 rounded-full bg-secondary"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[30%] right-[20%] w-6 h-6 rounded-full bg-white"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 150, damping: 15 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-tight leading-tight"
                    >
                        Siap Memulai <br className="hidden md:block" /> <span className="text-secondary">Perjalananmu?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 150, damping: 15 }}
                        className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-semibold max-w-2xl"
                    >
                        Jangan lewatkan kesempatan untuk bergabung dengan lingkungan pendidikan yang islami dan modern. Kuota terbatas!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            className="bg-secondary text-primary-dark hover:bg-yellow-400 font-extrabold px-8 py-7 rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto border-2 border-secondary hover:border-yellow-400 group"
                        >
                            Daftar Online Sekarang
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary font-extrabold px-8 py-7 rounded-2xl text-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group backdrop-blur-sm"
                        >
                            <Phone className="mr-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Hubungi Panitia
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
