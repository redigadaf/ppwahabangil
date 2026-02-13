"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { Trophy, Medal, Star, Crown, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Achievement {
    title: string;
    year: string;
    level: string;
    description: string;
    icon: any;
    image: string;
    color: string;
}

const achievements: Achievement[] = [
    {
        title: "Juara Umum MQK Nasional",
        year: "2023",
        level: "Tingkat Nasional",
        description: "Meraih juara umum pada Musabaqah Qiraatil Kutub tingkat nasional di Jambi.",
        icon: Trophy,
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop", // Student holding trophy
        color: "from-yellow-500 to-amber-600"
    },
    {
        title: "Best Pesantren Based School",
        year: "2022",
        level: "Penghargaan Khusus",
        description: "Penghargaan sebagai sekolah berbasis pesantren terbaik dalam implementasi kurikulum merdeka.",
        icon: Crown,
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", // Graduation/Certificate
        color: "from-purple-500 to-indigo-600"
    },
    {
        title: "30+ Hafidz per Tahun",
        year: "Setiap Tahun",
        level: "Program Tahfidz",
        description: "Konsisten mencetak lebih dari 30 santri penghafal Al-Qur'an 30 juz setiap tahunnya.",
        icon: Star,
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop", // Group of students
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "Juara 1 Olimpiade Sains",
        year: "2024",
        level: "Tingkat Provinsi",
        description: "Medali emas pada Olimpiade Sains Nasional (OSN) bidang Matematika tingkat provinsi.",
        icon: Medal,
        image: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=2070&auto=format&fit=crop", // Receiving award
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export function Achievements() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
    const isGridInView = useInView(gridRef, { once: false, margin: "-100px" });

    return (
        <section ref={containerRef} className="w-full px-4 py-16 relative overflow-hidden bg-gradient-to-br from-[#E8F3EC] to-white">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F7A4C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <motion.div
                style={{ y: yBackground }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Header Section */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full mb-6 backdrop-blur-sm border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Prestasi Santri</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                            Bukti Nyata <span className="text-yellow-600 relative inline-block">
                                Keunggulan
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                            Dedikasi kami dalam mencetak generasi unggul yang berprestasi di kancah nasional maupun internasional, membuktikan kualitas pendidikan kami.
                        </p>
                    </motion.div>
                </div>

                {/* Achievements Grid */}
                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGridInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Colorful Overlay on Hover - Using Theme Colors */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`} />

                            {/* Floating Icon Badge */}
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-lg transform group-hover:rotate-12 transition-all duration-300">
                                <item.icon className="w-6 h-6 text-secondary" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {/* Year & Level Badges */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {item.year}
                                        </Badge>
                                        <Badge variant="outline" className="text-white border-white/40 bg-black/20 backdrop-blur-sm">
                                            {item.level}
                                        </Badge>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-secondary-soft transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Description (Hidden by default, shown on hover/focus) */}
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p className="text-sm text-gray-200 mt-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Border Glow Effect */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-secondary/50 rounded-3xl transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA or Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isGridInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-primary/60 text-sm font-medium">
                        <Award className="w-4 h-4" />
                        <span>Dan masih banyak prestasi lainnya</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
