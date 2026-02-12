"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Church, GraduationCap, FlaskConical, BookOpen, Home, Dumbbell, Sparkles } from "lucide-react";

const facilities = [
    {
        title: "Masjid Jami'",
        category: "Ibadah",
        image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1470&auto=format&fit=crop",
        description: "Pusat kegiatan ibadah dan kajian kitab kuning santri.",
        icon: Church,
    },
    {
        title: "Gedung Sekolah Modern",
        category: "Pendidikan",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop",
        description: "Ruang kelas nyaman berbasis multimedia dan AC.",
        icon: GraduationCap,
    },
    {
        title: "Laboratorium Sains",
        category: "Akademik",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop",
        description: "Fasilitas praktikum fisika, biologi, dan kimia yang lengkap.",
        icon: FlaskConical,
    },
    {
        title: "Perpustakaan Digital",
        category: "Literasi",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop",
        description: "Ribuan koleksi buku fisik dan digital untuk menunjang wawasan.",
        icon: BookOpen,
    },
    {
        title: "Asrama Santri",
        category: "Tempat Tinggal",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop",
        description: "Hunian asri dan bersih dengan pengawasan pembina 24 jam.",
        icon: Home,
    },
    {
        title: "Lapangan Olahraga",
        category: "Ekstrakurikuler",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        description: "Area futsal, basket, dan voli untuk menjaga kebugaran santri.",
        icon: Dumbbell,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export function FacilityGallery() {
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
    const isGridInView = useInView(gridRef, { once: false, margin: "-100px" });

    return (
        <section className="py-24 bg-bg-soft relative overflow-hidden">
            {/* Decorative Elements - Subtle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
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
                        <span className="text-sm font-semibold text-primary">Fasilitas Terbaik</span>
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
                        className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4"
                    >
                        Fasilitas Unggulan
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
                        Lingkungan belajar yang kondusif didukung fasilitas modern untuk memaksimalkan potensi santri.
                    </motion.p>
                </div>

                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGridInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/3] w-full overflow-hidden relative">
                                    <div
                                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${facility.image})` }}
                                    />
                                    {/* Subtle Gradient Overlay - Image tetap terlihat */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Category Badge on Image */}
                                    <div className="absolute top-4 left-4">
                                        <Badge
                                            className="border-2 border-white text-white bg-primary/90 backdrop-blur-md font-semibold shadow-xl px-3 py-1"
                                        >
                                            {facility.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                                            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                                            {facility.title}
                                        </h3>
                                    </div>

                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {facility.description}
                                    </p>

                                    {/* Decorative accent line */}
                                    <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                </div>

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                                    style={{ transform: "skewX(-20deg)" }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
