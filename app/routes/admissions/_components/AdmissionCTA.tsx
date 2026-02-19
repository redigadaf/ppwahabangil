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
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
                        Siap Memulai Perjalananmu?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
                        Jangan lewatkan kesempatan untuk bergabung dengan lingkungan pendidikan yang islami dan modern. Kuota terbatas!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Button
                            size="lg"
                            className="bg-secondary text-white hover:bg-yellow-500 font-bold px-8 py-7 rounded-full text-lg shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                        >
                            Daftar Online Sekarang
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary font-bold px-8 py-7 rounded-full text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Hubungi Panitia
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
