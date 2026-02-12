"use client";

import { motion } from "framer-motion";
import React, { cloneElement } from "react";
import { BookOpen, MoonStar, Laptop, Users, Award, Globe, Sparkles, CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Academic Excellence",
        description: "Kurikulum komprehensif yang mengintegrasikan standar nasional dengan wawasan global.",
        icon: <BookOpen className="w-6 h-6 text-white" />,
        highlight: "Terakreditasi A",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        textColor: "text-primary",
        gradient: "to-primary/20"
    },
    {
        title: "Islamic Values",
        description: "Berakar kuat pada ajaran Al-Qur'an dan Sunnah, menumbuhkan karakter moral mulia.",
        icon: <MoonStar className="w-6 h-6 text-white" />,
        highlight: "Tahfidz Program",
        color: "bg-secondary",
        lightColor: "bg-secondary/10",
        textColor: "text-secondary",
        gradient: "to-secondary/20"
    },
    {
        title: "Modern Facilities",
        description: "Laboratorium, perpustakaan, dan fasilitas olahraga modern untuk mendukung pengembangan siswa.",
        icon: <Laptop className="w-6 h-6 text-white" />,
        highlight: "Smart Classroom",
        color: "bg-primary-light",
        lightColor: "bg-primary-light/10",
        textColor: "text-primary-light",
        gradient: "to-primary-light/20"
    },
    {
        title: "Character Building",
        description: "Program pembinaan kepemimpinan dan kemandirian melalui kegiatan ekstrakurikuler.",
        icon: <Users className="w-6 h-6 text-white" />,
        highlight: "Leadership Camp",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        textColor: "text-primary",
        gradient: "to-primary/20"
    },
    {
        title: "Prestasi Teruji",
        description: "Rekam jejak prestasi akademik dan non-akademik di tingkat nasional dan internasional.",
        icon: <Award className="w-6 h-6 text-white" />,
        highlight: "Juara Nasional",
        color: "bg-secondary",
        lightColor: "bg-secondary/10",
        textColor: "text-secondary",
        gradient: "to-secondary/20"
    },
    {
        title: "Global Network",
        description: "Jaringan alumni dan kerjasama internasional yang luas untuk masa depan siswa.",
        icon: <Globe className="w-6 h-6 text-white" />,
        highlight: "Alumni Tersebar",
        color: "bg-primary-light",
        lightColor: "bg-primary-light/10",
        textColor: "text-primary-light",
        gradient: "to-primary-light/20"
    },
];

const hoverBgMap: { [key: string]: string } = {
    "bg-primary": "group-hover:bg-primary",
    "bg-secondary": "group-hover:bg-secondary",
    "bg-primary-light": "group-hover:bg-primary-light",
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring" as const,
            damping: 12
        }
    }
};

export function WhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[#FAFAFA] -z-20" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-bold mb-4 border border-primary/10">
                            Keunggulan Kami
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
                            Mengapa Memilih <span className="text-primary italic">Kami?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Kami menyediakan pendidikan holistik yang menyeimbangkan nilai-nilai Islam tradisional dengan standar
                            akademik modern untuk mencetak generasi unggul.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="h-full bg-white rounded-[1.5rem] p-6 shadow-lg shadow-gray-100/50 border border-gray-100 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 relative overflow-hidden">
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-transparent ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Icon */}
                                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                                    {/* Create a clone of the icon with smaller size */}
                                    {cloneElement(feature.icon as React.ReactElement<{ className?: string }>, {
                                        className: "w-5 h-5 text-white"
                                    })}
                                </div>

                                <div className="space-y-3 relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${feature.lightColor} ${feature.textColor} ${hoverBgMap[feature.color]} group-hover:text-white text-[10px] font-bold uppercase tracking-wider transform transition-transform group-hover:scale-105 origin-left transition-colors duration-300`}>
                                        <CheckCircle2 className="w-3 h-3" />
                                        {feature.highlight}
                                    </div>
                                </div>

                                {/* Decorative circle */}
                                <div className={`absolute -right-6 -bottom-6 w-24 h-24 ${feature.lightColor} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />

                                {/* Large transparent icon on hover */}
                                <div className={`absolute -right-8 -bottom-8 text-6xl opacity-0 group-hover:opacity-10 transition-all duration-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 ${feature.textColor}`}>
                                    {cloneElement(feature.icon as React.ReactElement<{ className?: string }>, {
                                        className: "w-32 h-32"
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
