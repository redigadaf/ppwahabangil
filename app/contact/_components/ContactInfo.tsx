"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Alamat Kami",
        details: "Jl. Pendidikan No. 123, Bangil\nPasuruan, Jawa Timur 67153",
        color: "text-primary-light",
        bgColor: "bg-primary-light/10",
        borderColor: "border-primary-light/20",
        hoverBorder: "group-hover:border-primary-light/50",
        shadowColor: "hover:shadow-primary-light/20",
        gradient: "from-primary-light/5 via-primary-light/5 to-transparent",
    },
    {
        icon: Phone,
        title: "Telepon & WA",
        details: "+62 812-3456-7890 (Admin)\n+62 898-7654-3210 (Humas)",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
        hoverBorder: "group-hover:border-secondary/50",
        shadowColor: "hover:shadow-secondary/20",
        gradient: "from-secondary/10 via-secondary/5 to-transparent",
    },
    {
        icon: Mail,
        title: "Email Resmi",
        details: "info@ppwahabangil.sch.id\npsb@ppwahabangil.sch.id",
        color: "text-primary-light",
        bgColor: "bg-primary-light/10",
        borderColor: "border-primary-light/20",
        hoverBorder: "group-hover:border-primary-light/50",
        shadowColor: "hover:shadow-primary-light/20",
        gradient: "from-primary-light/10 via-primary-light/5 to-transparent",
    },
    {
        icon: Clock,
        title: "Jam Operasional",
        details: "Senin - Sabtu: 07:00 - 15:00\nMinggu: Libur (Tutup)",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
        hoverBorder: "group-hover:border-secondary/50",
        shadowColor: "hover:shadow-secondary/20",
        gradient: "from-secondary/10 via-secondary/5 to-transparent",
    }
];

export function ContactInfo() {
    return (
        <section className="relative z-20 w-full bg-white container mx-auto px-4 sm:px-6 py-16 lg:py-24 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, y: 60, rotate: -4 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15 * index,
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            mass: 0.8
                        }}
                        className="h-full"
                    >
                        <Card className={`h-full p-6 sm:p-8 flex flex-col items-center text-center border-2 border-dashed ${info.borderColor} ${info.hoverBorder} shadow-xl shadow-gray-200/50 ${info.shadowColor} hover:-translate-y-3 bg-white rounded-[2.5rem] group overflow-hidden relative transition-all duration-300`}>

                            {/* Playful Gradient Background that expands on hover */}
                            <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-bl ${info.gradient} group-hover:scale-[3] transition-transform duration-700 ease-in-out rounded-full z-0 opacity-50 group-hover:opacity-100`} />

                            <div className="relative z-10 w-full flex flex-col items-center">
                                {/* Bouncy Icon Container */}
                                <motion.div
                                    className={`p-5 rounded-[1.5rem] ${info.bgColor} ${info.color} mb-6 ring-4 ring-white shadow-sm transition-all duration-300 relative`}
                                    whileHover={{ y: -8, rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <info.icon className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />

                                    {/* Cute decorative dots that appear on hover */}
                                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-current opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 ${info.color}`} />
                                </motion.div>

                                {/* Text Content */}
                                <h3 className="text-xl md:text-2xl font-black text-text-main mb-3 tracking-tight group-hover:text-primary-dark transition-colors duration-300">
                                    {info.title}
                                </h3>
                                <p className="text-sm md:text-base font-semibold text-text-muted whitespace-pre-line leading-relaxed group-hover:text-text-main transition-colors duration-300">
                                    {info.details}
                                </p>
                            </div>

                            {/* Bottom Indicator Bar */}
                            <div className={`absolute bottom-0 left-[15%] w-[70%] h-1.5 rounded-t-full scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out bg-current ${info.color}`} />
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
