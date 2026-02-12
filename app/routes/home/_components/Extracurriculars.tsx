"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

interface Activity {
    title: string;
    category: string;
    image: string;
    color: string;
}

const activities: Activity[] = [
    {
        title: "Pramuka",
        category: "Kepemimpinan",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        color: "from-emerald-500 to-teal-600"
    },
    {
        title: "Seni Hadrah",
        category: "Kesenian Islam",
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1470&auto=format&fit=crop",
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "Pencak Silat",
        category: "Bela Diri",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1472&auto=format&fit=crop",
        color: "from-orange-500 to-red-600"
    },
    {
        title: "Kajian Kitab",
        category: "Keagamaan",
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1470&auto=format&fit=crop",
        color: "from-purple-500 to-pink-600"
    },
    {
        title: "Jurnalistik",
        category: "Literasi",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop",
        color: "from-cyan-500 to-blue-600"
    },
    {
        title: "Tahfidz Quran",
        category: "Keagamaan",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1470&auto=format&fit=crop",
        color: "from-green-500 to-emerald-600"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6
        }
    }
};

export function Extracurriculars() {
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
    const isGridInView = useInView(gridRef, { once: false, margin: "-100px" });

    return (
        <section className="py-24 relative ">
            {/* Decorative Elements - More vibrant */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 mb-6 shadow-sm"
                        >
                            <span className="text-sm font-bold text-primary">Kegiatan Seru & Bermanfaat</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent mb-4">
                            Ekstrakurikuler
                        </h2>
                        <p className="text-lg text-text-muted">
                            Wadah pengembangan bakat dan karakter santri melalui beragam kegiatan positif yang menyenangkan.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all duration-300 group border-2 border-primary-light"
                        >
                            <Link href="/ekstrakurikuler" className="flex items-center gap-2">
                                Lihat Semua Kegiatan
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGridInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative overflow-hidden rounded-3xl bg-white cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
                        >
                            {/* Colorful border on hover */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${activity.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                            {/* Card content */}
                            <div className="relative h-full rounded-3xl overflow-hidden bg-white">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                    style={{ backgroundImage: `url(${activity.image})` }}
                                />

                                {/* Gradient Overlay - Lighter so image is visible */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-primary/60 group-hover:via-primary/30 transition-all duration-500`} />

                                {/* Content */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                    {/* Top corner sparkle */}
                                    <div className="flex justify-end" />

                                    {/* Bottom content */}
                                    <div>
                                        <Badge
                                            className={`inline-block mb-2 w-fit bg-gradient-to-r ${activity.color} border-2 border-white/80 text-white font-bold shadow-xl px-3 py-1 text-xs group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            {activity.category}
                                        </Badge>

                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 drop-shadow-2xl">
                                            {activity.title}
                                        </h3>

                                        <div className="h-0 group-hover:h-9 overflow-hidden transition-all duration-300">
                                            <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 w-fit border border-white/40">
                                                Selengkapnya
                                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                                    style={{ transform: "skewX(-20deg)" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
