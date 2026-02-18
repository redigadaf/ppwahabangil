"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, School, Star, Globe, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const programs = [
    {
        title: "Pendidikan Formal",
        description: "Membentuk cendekiawan muslim yang intelektual melalui kurikulum terintegrasi.",
        items: ["MTs. KHA. Wahid Hasyim", "MA. KHA. Wahid Hasyim"],
        icon: <School className="w-8 h-8 text-primary" />,
    },
    {
        title: "Madrasah Diniyah",
        description: "Pendalaman ilmu agama Islam melalui pengajian kitab kuning secara intensif.",
        items: ["Ula (Tingkat Dasar)", "Wustho (Tingkat Menengah)", "Ulya (Tingkat Atas)"],
        icon: <BookOpen className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Tahfidz Al-Qur'an",
        description: "Program unggulan menghafal Al-Qur'an dengan metode mutqin dan bersanad.",
        items: ["Bin Nadzor (Membaca)", "Bil Ghoib (Menghafal)", "Tafsir Al-Qur'an"],
        icon: <Star className="w-8 h-8 text-primary" />,
    },
    {
        title: "Pengembangan Diri",
        description: "Menyiapkan santri siap pakai dengan berbagai skill dan kemampuan bahasa.",
        items: ["Bahasa Arab & Inggris", "Public Speaking", "Entrepreneurship"],
        icon: <Globe className="w-8 h-8 text-secondary" />,
    }
];

function ProgramCard({ program, index }: { program: typeof programs[0], index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, y }}
            className="group relative bg-white rounded-[2.5rem] border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
            {/* Cheerful Background Shapes - Affected by Scroll Opacity */}
            <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent rounded-bl-[100%] group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute top-12 right-12 w-20 h-20 border-4 border-gray-50 rounded-full group-hover:border-primary/20 group-hover:rotate-45 transition-all duration-700" />
            </motion.div>

            <div className="relative p-8 h-full flex flex-col z-10">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 group-hover:shadow-md">
                            {program.icon}
                        </div>
                        {/* Playful Dot Accent */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary border-2 border-white rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 delay-75" />
                    </div>
                </div>

                {/* Title & Desc */}
                <div className="mb-8 space-y-3 relative">
                    <h3 className="text-2xl text-black group-hover:text-primary transition-colors duration-300 tracking-tight">
                        {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base font-semibold">
                        {program.description}
                    </p>
                </div>

                {/* List Items */}
                <div className="mt-auto space-y-3 relative z-10">
                    {program.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-secondary group-hover:scale-150 transition-all duration-300" />
                            <span className="text-muted-foreground font-semibold text-sm group-hover:text-black group-hover:translate-x-1 transition-all duration-300">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Big Playful Number at Bottom Right */}
                <div className="absolute -bottom-4 -right-4 text-9xl font-black text-gray-50/80 select-none -z-0 text-primary/0 group-hover:text-primary/20 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-all duration-700 rotate-12 group-hover:rotate-0">
                    0{index + 1}
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700 delay-100" />
            </div>
        </motion.div>
    );
}

export function ProgramList() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white relative z-20">
            <div className="container mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Badge variant="secondary" className="px-5 py-1.5 mb-5 text-primary bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors text-sm font-medium tracking-wide">
                            Kurikulum Terpadu
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                            Jenjang <span className="text-primary relative">
                                Pendidikan
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium"
                    >
                        Program pendidikan komprehensif untuk mencetak generasi Rabbani yang unggul dalam IPTEK dan IMTAQ.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <ProgramCard key={index} program={program} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
