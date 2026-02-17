"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { Trophy, Medal, Star, Crown, Calendar, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Achievement {
    title: string;
    year: string;
    level: string;
    description: string;
    image: string;
    color: string; // Keep for fallback or accents
}

const achievements: Achievement[] = [
    {
        title: "Hanum",
        year: "2023",
        level: "Tingkat Nasional",
        description: "Juara umum pada Musabaqah Qiraatil Kutub tingkat nasional di Jambi.",
        image: "/assets/foto1.jpg", // Student holding book/trophy
        color: "from-yellow-500 to-amber-600"
    },
    {
        title: "Nisa",
        year: "2022",
        level: "Penghargaan Khusus",
        description: "Penghargaan sebagai santri teladan dalam bidang akademik dan akhlak.",
        image: "/assets/foto2.jpg",
        color: "from-purple-500 to-indigo-600"
    },
    {
        title: "Siti",
        year: "Setiap Tahun",
        level: "Program Tahfidz",
        description: "Hafidzah 30 Juz dengan predikat mumtaz.",
        image: "/assets/foto1.jpg",
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "Kartika",
        year: "2024",
        level: "Tingkat Provinsi",
        description: "Peraih medali emas Olimpiade Sains Nasional (OSN) bidang Matematika.",
        image: "/assets/foto2.jpg",
        color: "from-blue-500 to-cyan-600"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

// Simple PaperClip SVG Component
const PaperClip = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M13.234 20.252 21 12.3" />
        <path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
    </svg>
);

export function Achievements() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
    const gridRef = useRef(null);
    const isGridInView = useInView(gridRef, { once: true, margin: "-50px" }); // changed to once: true for smoother UX

    // Background patterns
    const bgPattern = {
        backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
    };

    return (
        <section ref={containerRef} className="w-full px-4 py-20 relative overflow-hidden bg-bg-soft">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply" style={bgPattern}></div>

            <motion.div
                style={{ y: yBackground }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            />

            <div className="container px-4 mx-auto relative z-10">
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={isHeaderInView ? {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        } : {
                            opacity: 0,
                            scale: 0.8,
                            y: -20
                        }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            bounce: 0.4
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 mb-6 shadow-sm"
                    >
                        <span className="text-sm font-semibold text-primary">Prestasi Santri</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? {
                            opacity: 1,
                            y: 0,
                        } : {
                            opacity: 0,
                            y: 30
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            type: "spring",
                            bounce: 0.3
                        }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
                    >
                        Hall of <span className="text-secondary relative inline-block">
                            Fame
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? {
                            opacity: 1,
                            y: 0,
                        } : {
                            opacity: 0,
                            y: 20
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4
                        }}
                        className="text-lg text-text-muted"
                    >
                        Catatan prestasi dan kebanggaan kami dalam mencetak generasi unggul yang berkualitas.
                    </motion.p>
                </div>

                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // Re-trigger on scroll
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full"
                >
                    {achievements.map((item, index) => {
                        // Create a pseudo-random rotation between -3 and 3 degrees based on index
                        const rotation = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
                        const tapeRotation = index % 2 === 0 ? 'rotate-[-4deg]' : 'rotate-[4deg]';

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { y: 50, opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        transition: { type: "spring", stiffness: 100, damping: 12 }
                                    }
                                }}
                                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20, transition: { type: "spring", stiffness: 300 } }} // Bouncy hover
                                className="relative group perspective-1000"
                            >
                                {/* Card Container - Realistic Paper Look */}
                                <div className={`bg-white p-4 pb-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform ${rotation} hover:rotate-0 relative overflow-visible border border-gray-100`}>

                                    {/* Grid Pattern on Card - More subtle */}
                                    <div className="absolute inset-0 opacity-[0.1] pointer-events-none rounded-lg"
                                        style={{
                                            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
                                            backgroundSize: '20px 20px'
                                        }}
                                    />

                                    {/* Top Tape - More realistic */}
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-secondary/30 backdrop-blur-[1px] shadow-sm z-20 ${tapeRotation} mask-image:linear-gradient(to right, transparent 2%, black 5%, black 95%, transparent 98%)`}>
                                        <div className="w-full h-full opacity-30 bg-white/40"></div>
                                    </div>

                                    {/* Header: Number & Name */}
                                    <div className="relative z-10 flex items-start justify-between mb-4 px-1 pt-4">
                                        <h3
                                            className="text-2xl font-bold text-text-main flex-1 leading-tight"
                                            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
                                        >
                                            <span className="text-secondary inline-block mr-1 transform -rotate-12">{index + 1}.</span> {item.title}
                                        </h3>

                                        {/* Paper Clip - Floating off edge */}
                                        <div className="absolute -top-6 -right-2 text-gray-400 transform rotate-45 drop-shadow-md z-30 opacity-80 group-hover:rotate-12 transition-transform duration-300">
                                            <PaperClip className="w-10 h-10" />
                                        </div>
                                    </div>

                                    {/* Image Container - Polariod Style */}
                                    <div className="relative w-full aspect-[4/5] mx-auto mb-4 bg-white p-2 shadow-sm transform transition-transform duration-500 hover:scale-[1.02]">
                                        <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                                style={{
                                                    backgroundImage: `url(${item.image})`,
                                                }}
                                            />
                                            {/* Photo Glare */}
                                            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 opacity-50 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Metadata / Description - Handwritten feel */}
                                    <div className="relative px-2 pt-2">
                                        {/* Badges as "Stamps" */}
                                        <div className="flex flex-wrap gap-2 mb-3 justify-start transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-sm border border-primary/20 shadow-sm">
                                                {item.year}
                                            </span>
                                            <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-sm border border-secondary/20 shadow-sm">
                                                {item.level}
                                            </span>
                                        </div>

                                        <div className="relative">
                                            {/* Line decoration for text */}
                                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
                                                style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 1.5rem, #333 1.5rem, #333 calc(1.5rem + 1px))' }}
                                            />
                                            <p className="text-base text-text-muted leading-[1.55rem] font-medium pl-1" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
