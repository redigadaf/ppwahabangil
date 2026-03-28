"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Star, Zap } from "lucide-react";
import Link from "next/link";

export function ProgramsHero() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Smoother parallax effects
    const yBackground = useTransform(scrollY, [0, 500], ["0%", "30%"]);
    const yText = useTransform(scrollY, [0, 300], ["0%", "-30%"]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
    const rotateShape = useTransform(scrollY, [0, 500], [0, 180]);

    return (
        <section ref={targetRef} className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-primary flex items-center justify-center text-white pt-16 mb-10 md:mb-20 pb-20 md:pb-32">

            {/* --- Dynamic Background --- */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 z-0 bg-primary"
            >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/40 via-primary to-primary-dark opacity-90" />

                {/* Organic Shapes / Blobs - Subtle opacity */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[80px]"
                />

                {/* Geometric Floating Elements - Slower animation */}
                {/* Playful Geometric Cluster */}
                <motion.div
                    style={{ y: yBackground }}
                    className="absolute top-[15%] left-[5%] md:left-[10%] opacity-25"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="relative w-32 h-32 sm:w-48 sm:h-48"
                    >
                        {/* Rotating Dashed Ring */}
                        <div className="absolute inset-0 border-[4px] border-dashed border-yellow-300/60 rounded-full" />

                        {/* Orbiting Dot */}
                        <motion.div
                            className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                        />

                        {/* Centered Pulsing Star */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -180, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Star className="w-12 h-12 sm:w-20 sm:h-20 text-yellow-300 fill-yellow-300 drop-shadow-xl" />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </motion.div>

            {/* --- Main Content --- */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 container mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-6"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mb-4 relative inline-block group"
                >
                    <Badge variant="outline" className="relative px-6 py-2.5 border-yellow-200/30 bg-emerald-900/30 text-white backdrop-blur-md rounded-full shadow-2xl text-sm md:text-base font-semibold tracking-wide gap-3 hover:bg-emerald-900/40 transition-all duration-300 flex items-center ring-1 ring-white/10">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                        </span>
                        <span className="bg-gradient-to-r from-yellow-100 to-white bg-clip-text text-transparent">
                            Program Pendidikan Unggulan
                        </span>
                    </Badge>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                    className="relative max-w-4xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-white drop-shadow-xl">
                        Program <br className="sm:hidden" />
                        <span className="relative inline-block text-secondary ml-2 sm:ml-4">
                            Unggulan
                            {/* Simple underline */}
                            <svg className="absolute -bottom-1 sm:-bottom-3 left-0 w-full h-2 sm:h-4 text-white/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 15 Q 50 25 100 15" stroke="currentColor" strokeWidth="6" fill="none" />
                            </svg>
                        </span>
                    </h1>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-xl mx-auto text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed px-4"
                >
                    Mencetak generasi <span className="text-white font-bold underline decoration-secondary decoration-2 underline-offset-4">Rabbani</span> yang unggul dalam Imtaq dan Iptek dengan kurikulum terintegrasi.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
                >
                    <Link href="#program-list" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full bg-secondary hover:bg-yellow-500 text-primary-dark font-bold text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                            Jelajahi Program
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white/30 text-white bg-transparent hover:bg-white hover:border-white hover:text-primary font-bold text-base sm:text-lg px-8 py-6 rounded-full hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        Download Brosur
                    </Button>
                </motion.div>
            </motion.div>

            {/* Bottom Curve - Cheerful Multi-layered Waves */}
            <div className="absolute bottom-0 left-0 w-[101%] overflow-hidden leading-[0] z-20">
                <svg className="relative block w-full h-[80px] sm:h-[120px] md:h-[160px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#ffffff" fillOpacity="0.2" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#ffffff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,234.7C672,245,768,203,864,186.7C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}
