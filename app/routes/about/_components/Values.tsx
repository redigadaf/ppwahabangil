"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Lightbulb, Users } from "lucide-react";

const values = [
    {
        title: "Akhlak Mulia",
        description: "Membangun karakter dengan adab dan sopan santun yang islami terbaik.",
        icon: Heart,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        delay: 0
    },
    {
        title: "Kecerdasan",
        description: "Mengembangkan potensi akademik dan intelektual tanpa batas.",
        icon: Lightbulb,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
        delay: 0.1
    },
    {
        title: "Kemandirian",
        description: "Melatih santri untuk mandiri dan bertanggung jawab atas diri sendiri.",
        icon: BookOpen,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        delay: 0.2
    },
    {
        title: "Kepedulian",
        description: "Bersosial dan peduli terhadap lingkungan serta sesama manusia.",
        icon: Users,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
        delay: 0.3
    },
];

export function Values() {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] opacity-60" />
                <div className="absolute top-[40%] -right-[5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } } }}>
                            <Badge variant="secondary" className="mb-6 px-5 py-2 text-primary-dark bg-yellow-100/80 hover:bg-yellow-200 text-sm font-bold rounded-full border border-yellow-200 shadow-sm">
                                Nilai Utama Kami
                            </Badge>
                        </motion.div>

                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            className="text-4xl md:text-6xl font-black mb-6 text-primary-dark tracking-tight leading-tight relative inline-block"
                        >
                            Pilar Keunggulan <span className="relative text-primary inline-block">Santri
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-400 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-lg md:text-xl text-text-muted leading-relaxed font-medium"
                        >
                            Fondasi yang kami bangun untuk mencetak generasi yang tidak hanya <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-lg border border-primary/20 font-bold mx-1">pintar</span>, tapi juga <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-lg border border-secondary/20 font-bold mx-1">benar</span>.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            transition={{
                                duration: 0.6,
                                delay: item.delay,
                                type: "spring",
                                stiffness: 200,
                                damping: 12
                            }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="h-full"
                        >
                            <Card className={`h-full border-[1.5px] ${item.borderColor} hover:border-primary/20 bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2rem] overflow-hidden group`}>
                                <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                                    <motion.div
                                        className={`p-5 rounded-3xl mb-6 ${item.bgColor} relative`}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <item.icon className={`w-10 h-10 ${item.color}`} />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
