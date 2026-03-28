"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { activities, Activity } from "@/lib/data/extracurriculars";
import { ActivityCard } from "./extracurriculars/ActivityCard";
import { ActivityModal } from "./extracurriculars/ActivityModal";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export function Extracurriculars() {
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
    const isGridInView = useInView(gridRef, { once: false, margin: "-100px" });

    // Handle body scroll lock
    useEffect(() => {
        if (selectedActivity) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedActivity]);

    return (
        <section className="w-full px-4 py-24 relative ">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-50" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/20 mb-6 shadow-sm"
                        >
                            <Zap className="w-4 h-4 text-secondary fill-secondary" />
                            <span className="text-sm font-bold text-primary">Kegiatan Seru & Bermanfaat</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-6 font-sans">
                            Bidang <span className="text-primary italic">Ekstrakurikuler</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
                            Wadah pengembangan bakat dan karakter santri melalui beragam kegiatan positif yang menyenangkan dan mendidik.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGridInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {activities.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            activity={activity}
                            isLarge={index === 0 || index === 5}
                            onClick={() => setSelectedActivity(activity)}
                        />
                    ))}
                </motion.div>
            </div>

            <ActivityModal
                activity={selectedActivity}
                onClose={() => setSelectedActivity(null)}
            />
        </section>
    );
}
