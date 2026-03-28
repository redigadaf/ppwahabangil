"use client";

import { motion, Variants } from "framer-motion";
import { UserPlus, FileText, GraduationCap, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
    {
        id: "01",
        title: "Pendaftaran Online",
        description: "Isi formulir biodata diri secara lengkap melalui website resmi kami.",
        icon: UserPlus,
    },
    {
        id: "02",
        title: "Verifikasi Berkas",
        description: "Unggah dokumen pendukung untuk diverifikasi oleh panitia PSB.",
        icon: FileText,
    },
    {
        id: "03",
        title: "Ujian Seleksi",
        description: "Ikuti tes akademik & wawancara sesuai jadwal yang ditentukan.",
        icon: GraduationCap,
    },
    {
        id: "04",
        title: "Daftar Ulang",
        description: "Lakukan pembayaran daftar ulang & resmi menjadi santri baru.",
        icon: CheckCircle,
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            mass: 0.8
        }
    }
};

export function AdmissionSteps() {
    return (
        <section id="admission-steps" className="py-24 relative overflow-hidden bg-white scroll-mt-20">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Badge variant="secondary" className="px-5 py-1.5 mb-5 text-primary bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors text-sm font-medium tracking-wide">
                            Proses Mudah
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                            Alur <span className="text-primary relative">
                                Pendaftaran
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
                        Kami merancang proses pendaftaran yang simpel, cepat, dan transparan untuk calon santri baru. Mari bergabung bersama kami!
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Desktop Connector Line Animation */}
                    <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] -z-10 bg-gray-100/50">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="h-full border-t-2 border-dashed border-gray-300"
                        />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                                className="relative group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-colors duration-300"
                            >
                                {/* Step Header with Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/5 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transform group-hover:-rotate-6 transition-all duration-300">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        {/* Connector Dot (Desktop) */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: 0.3 + (index * 0.1), type: "spring", stiffness: 200 }}
                                            className="hidden lg:block absolute top-1/2 -left-8 w-3 h-3 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-colors z-10"
                                        />
                                    </div>
                                    <span className="text-4xl font-black text-primary/0 group-hover:text-primary/20 transition-colors select-none font-sans">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Hover Line visual */}
                                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom CTA Hint */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm">
                        Butuh bantuan? <a href="#" className="font-bold text-primary hover:text-primary-dark transition-colors">Hubungi Admin</a> kami sekarang.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
