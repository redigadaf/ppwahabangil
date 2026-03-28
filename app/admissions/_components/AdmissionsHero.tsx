"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserPlus, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { useRegistration } from "@/components/context/RegistrationContext";

export function AdmissionsHero() {
    const { openModal } = useRegistration();
    const targetRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Smoother parallax effects
    const yBackground = useTransform(scrollY, [0, 500], ["0%", "20%"]);
    const yText = useTransform(scrollY, [0, 300], ["0%", "-15%"]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0.5]);

    return (
        <section ref={targetRef} className="relative w-full min-h-[80vh] lg:h-screen overflow-hidden bg-primary flex items-center justify-center px-4 pt-20 pb-16 lg:pt-0 lg:pb-16">

            {/* --- Dynamic Pattern Background --- */}
            <div className="absolute inset-0 z-0 bg-primary">
                {/* Radial Gradient for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/30 via-primary to-primary-dark/80" />

                {/* Modern Grid Pattern with fade mask */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                    }}
                />

                {/* Animated Shapes */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full border border-white/5 bg-white/[0.02] blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] rounded-full border border-secondary/10 bg-secondary/[0.03] blur-3xl pointer-events-none"
                />
            </div>

            {/* --- Content Grid --- */}
            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        style={{ y: yText, opacity: opacityText }}
                        className="text-left space-y-5 md:space-y-6"
                    >
                        {/* Modern Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                            </span>
                            <span className="text-secondary font-bold tracking-wide text-xs md:text-sm">
                                PSB Online 2026/2027
                            </span>
                            <span className="h-3 w-[1px] bg-white/20 mx-1" />
                            <span className="text-white/80 text-xs md:text-sm font-medium">Buka Sekarang</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                                Raih Masa Depan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200 relative">
                                    Gemilang
                                    <motion.svg
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 1 }}
                                        className="absolute -bottom-2 left-0 w-full h-3 md:h-4 text-secondary/50"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </motion.svg>
                                </span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed font-light"
                        >
                            Bergabunglah dengan ribuan santri berprestasi lainnya. Kami memadukan kurikulum pendidikan modern dengan nilai-nilai keislaman.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-3 md:gap-4"
                        >
                            <Button
                                onClick={openModal}
                                size="lg"
                                className="h-12 px-6 md:px-8 rounded-full bg-secondary hover:bg-yellow-400 text-primary-dark font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                Daftar Sekarang
                                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                            </Button>
                            <Link href="#admission-steps">
                                <Button size="lg" variant="outline" className="h-12 px-6 md:px-8 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white hover:border-white text-white hover:text-primary font-semibold text-base md:text-lg backdrop-blur-sm transition-all duration-300 cursor-pointer">
                                    <BookOpen className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                                    Informasi
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Stats / Trust Markers */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="flex items-center gap-4 md:gap-6 pt-2 md:pt-4 text-white/60 text-xs md:text-sm font-medium"
                        >
                            <div className="flex items-center gap-1.5">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Terakreditasi A</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Asrama Modern</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual Element / Mockup - Pure Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center h-full"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10" />

                        <div className="relative w-[320px] h-[400px]">
                            {/* Main Floating Card - Student Pass Style */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 z-20"
                            >
                                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-6 flex flex-col justify-between overflow-hidden relative">
                                    {/* Decorative Top Shine */}
                                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                                    {/* Header */}
                                    <div className="relative z-10 flex items-start justify-between">
                                        <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md border border-white/10">
                                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-secondary to-yellow-300 flex items-center justify-center">
                                                <Star className="w-5 h-5 text-primary-dark fill-primary-dark/20" />
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Tahun Ajaran</div>
                                            <div className="text-white text-lg font-bold">2026/2027</div>
                                        </div>
                                    </div>

                                    {/* ID Visual */}
                                    <div className="relative z-10 text-center my-8">
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-b from-white/20 to-transparent rounded-full p-1 border border-white/30 backdrop-blur-sm mb-4 relative">
                                            <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                                                <UserPlus className="w-10 h-10 text-white/80" />
                                            </div>
                                            {/* Status Badge */}
                                            <div className="absolute bottom-0 right-0 bg-secondary text-primary-dark text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
                                                AKTIF
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Calon Santri</h3>
                                        <p className="text-white/60 text-sm">Program Unggulan</p>
                                    </div>

                                    {/* Bottom Bar Code Visual */}
                                    {/* Bottom Data Strip */}
                                    <div className="relative z-10 bg-black/25 rounded-xl p-3 flex items-center justify-between border border-white/10 backdrop-blur-sm">
                                        {/* Animated Barcode */}
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex gap-0.5 h-6 items-center">
                                                {[1, 3, 2, 4, 2, 5, 2, 3, 4, 2, 5, 1, 3, 2, 4, 3].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                                        className={`w-[2px] bg-white rounded-full ${h > 3 ? 'h-full' : 'h-1/2'}`}
                                                    />
                                                ))}
                                            </div>
                                            <div className="text-[9px] text-white/50 font-mono tracking-widest">
                                                ID • 2026 • ADM
                                            </div>
                                        </div>

                                        {/* Vertical Divider */}
                                        <div className="h-8 w-[1px] bg-white/10 mx-2" />

                                        {/* Status Info */}
                                        <div className="text-right">
                                            <p className="text-secondary/90 text-[10px] uppercase font-bold tracking-wider mb-0.5">
                                                Priority Access
                                            </p>
                                            <div className="flex items-center justify-end gap-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                                                <p className="text-white text-xs font-medium">Verified</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Element 1 - Book (Right Side) */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-24 -right-24 z-30 bg-white/90 p-3 md:p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/40 flex items-center gap-3 backdrop-blur-md"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div className="text-left hidden md:block">
                                    <div className="text-gray-900 font-bold text-xs">Kurikulum</div>
                                    <div className="text-gray-500 text-[10px]">Terintegrasi</div>
                                </div>
                            </motion.div>

                            {/* Floating Element 2 - Check Shield (Left Side) */}
                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-24 -left-28 z-30 bg-white/90 p-3 md:p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/40 flex items-center gap-3 backdrop-blur-md"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div className="text-left hidden md:block">
                                    <div className="text-gray-900 font-bold text-xs">Akreditasi A</div>
                                    <div className="text-gray-500 text-[10px]">Terjamin</div>
                                </div>
                            </motion.div>

                            {/* Decorative Background Shape */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-[2px] border-dashed border-white/10 rounded-full z-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Curve Wave with better blending */}
            <div className="absolute bottom-[30px] md:bottom-[50px] left-0 w-full overflow-hidden leading-none rotate-180 z-20">
                <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[31px] md:h-[51px] bg-white z-20" />
        </section>
    );
}
