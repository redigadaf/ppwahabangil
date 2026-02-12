
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Heart, Lightbulb, Target, Sparkles } from "lucide-react";

const missions = [
    {
        text: "Menyelenggarakan pendidikan Islam yang integratif dan holistik.",
    },
    {
        text: "Membentuk karakter santri yang berakhlakul karimah dan berbudi pekerti luhur.",
    },
    {
        text: "Mengembangkan potensi akademik dan non-akademik santri secara optimal.",
    },
    {
        text: "Mewujudkan lulusan yang siap berkontribusi bagi kemajuan umat dan bangsa.",
    }
];

export function VisionMission() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                type: "spring" as const,
                damping: 15
            }
        }
    };

    return (
        <section ref={containerRef} className="py-16 relative overflow-hidden bg-gradient-to-br from-[#E8F3EC] to-white">
            {/* Islamic Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F7A4C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Decorative Blobs */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            />

            <div className="container mx-auto px-8 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Vision Section (Sticky on Desktop) */}
                    <div className="lg:sticky space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-primary/10 text-primary font-bold text-xs mb-4">
                                Visi Kami
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] mb-4 pt-6">
                                Mencetak Generasi <span className="text-primary italic">Qur'ani</span> & Berwawasan <span className="text-secondary italic">Global</span>
                            </h2>
                            <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-lg">
                                Kami berkomitmen memadukan nilai-nilai luhur pesantren dengan kemajuan teknologi modern untuk masa depan yang lebih cerah.
                            </p>
                        </motion.div>
                    </div>

                    {/* Mission Section (Vertical List) */}
                    <div className="flex flex-col gap-6 relative">
                        {/* Card Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-primary/10 text-primary font-bold text-xs mb-2">
                                Misi Kami
                            </span>
                        </motion.div>

                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                        >
                            {missions.map((mission, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                                    className="group relative z-0 hover:z-10"
                                >
                                    <div className="bg-white p-6 rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 flex items-center gap-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 relative overflow-hidden h-full">

                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Background Number */}
                                        <div className="absolute -right-8 -bottom-12 text-[9rem] font-black text-primary/5 group-hover:text-primary/10 transition-all duration-500 ease-out select-none pointer-events-none translate-y-10 group-hover:translate-y-0 rotate-12">
                                            {index + 1}
                                        </div>

                                        <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shrink-0 text-white font-bold text-2xl relative z-10">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed text-sm md:text-base relative z-10 group-hover:text-primary-dark transition-colors duration-300">
                                            {mission.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
