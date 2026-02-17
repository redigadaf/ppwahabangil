"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Quote, CheckCircle2, History as HistoryIcon, ArrowUpRight, Rocket } from "lucide-react";
import Image from "next/image";

import { Timeline } from "@/components/ui/timeline";

export function History() {
    const timelineData = [
        {
            title: "Tahun 2010",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-primary/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                    {/* Decorative background blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="p-4 bg-secondary/10 rounded-2xl text-secondary shadow-sm group-hover:scale-105 transition-transform duration-300">
                            <Calendar className="w-7 h-7" />
                        </div>
                        <div>
                            <span className="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest">Tonggak Sejarah</span>
                            <h3 className="text-2xl font-black text-primary-dark leading-none mt-1">
                                Awal Mula Berdiri
                            </h3>
                        </div>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-6 font-medium relative z-10">
                        Berawal dari sebuah musholla sederhana dengan semangat gotong royong, para pendiri meletakkan batu pertama sebagai simbol komitmen untuk pendidikan umat. Visi kami saat itu sederhana: menjadikan pendidikan agama yang terjangkau namun berkualitas.
                    </p>
                    <div className="relative w-full h-56 bg-secondary/5 rounded-3xl overflow-hidden border border-secondary/10 group-hover:shadow-md transition-shadow">
                        <div className="absolute inset-0 bg-primary/5 opacity-20 z-10"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1000"
                            alt="Arsip Foto Musholla 2010"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                </motion.div>
            ),
        },
        {
            title: "Masa Kini",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-[2.5rem] shadow-xl shadow-primary/20 relative overflow-hidden group border-2 border-primary-light/20 hover:-translate-y-1 transition-transform duration-300"
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl text-white shadow-inner group-hover:rotate-6 transition-transform duration-300">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-xs md:text-sm font-bold text-primary-light uppercase tracking-widest">Transformasi</span>
                                <h3 className="text-2xl font-black text-white leading-none mt-1">
                                    Pusat Modern
                                </h3>
                            </div>
                        </div>
                        <p className="text-white/90 leading-relaxed mb-8 font-medium">
                            Kini, PP Waha Bangil telah bertransformasi dengan fasilitas lengkap: asrama yang nyaman, laboratorium sains & bahasa, serta integrasi teknologi dalam pembelajaran.
                        </p>
                        <ul className="grid grid-cols-1 gap-3">
                            {[
                                "Kurikulum Terpadu",
                                "Ekstrakurikuler Berprestasi",
                                "Jaringan Alumni Luas"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/5 hover:bg-white/20 transition-colors cursor-default">
                                    <div className="bg-secondary rounded-full p-1 flex-shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-dark" />
                                    </div>
                                    <span className="font-bold text-sm tracking-wide">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ),
        },
    ];

    return (
        <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary-soft/20 text-text-main">
            <div className="container relative z-10 px-4 md:px-6 mx-auto">

                {/* 1. Header with Badge - "Cheerful" */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="max-w-4xl mx-auto text-center mb-12 relative"
                >
                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                        className="inline-block"
                    >
                        <Badge variant="outline" className="mb-6 text-secondary bg-yellow-50 border-yellow-200 px-4 py-1.5 gap-2 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm">
                            <HistoryIcon className="w-4 h-4" />
                            Jejak Langkah Kami
                        </Badge>
                    </motion.div>

                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                        className="text-4xl md:text-6xl font-black text-primary-dark mb-6 tracking-tight leading-tight"
                    >
                        Dari <span className="text-primary relative inline-block px-2">
                            Masa Lalu
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
                        </span> <br className="hidden md:block" />
                        Menuju <span className="text-secondary relative inline-block px-2">
                            Masa Depan
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/40 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } } }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        Dimulai dari sebuah visi sederhana, kini kami terus berkembang untuk mencetak generasi pemimpin yang <span className="text-primary bg-primary/5 px-2 py-0.5 rounded-lg border border-primary/10 font-bold">adil</span> dan <span className="text-secondary bg-secondary/5 px-2 py-0.5 rounded-lg border border-secondary/10 font-bold">beradab</span>.
                    </motion.p>
                </motion.div>

                {/* 2. Timeline Component */}
                <div className="w-full">
                    <Timeline data={timelineData} />
                </div>

                {/* 3. Quote Section - "Cheerful" Break */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-20 md:mt-32 max-w-4xl mx-auto relative z-10"
                >
                    <div className="relative bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-14 text-center overflow-hidden group hover:bg-white/60 transition-all duration-500 hover:shadow-2xl">
                        {/* Decorative huge quote icons */}
                        <Quote className="absolute top-10 left-10 w-24 h-24 text-primary/5 -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />
                        <Quote className="absolute bottom-10 right-10 w-24 h-24 text-secondary/5 rotate-12 scale-x-[-1] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />

                        <div className="relative z-10">
                            <p className="text-2xl md:text-4xl font-serif text-primary-dark italic leading-relaxed drop-shadow-sm mb-10">
                                "Pendidikan adalah menanam benih masa depan. Kami merawatnya dengan ilmu, menyiramnya dengan akhlak."
                            </p>

                            <div className="flex flex-col items-center justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-full p-1 mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                                        <Image
                                            src="/assets/ustadz.png"
                                            alt="KH. Pendiri Pesantren"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <span className="font-black text-xl text-primary-dark tracking-tight">KH. Abdul Wahab</span>
                                <span className="text-sm font-bold text-secondary/80 uppercase tracking-widest mt-1 bg-secondary/10 px-3 py-1 rounded-full">Pendiri & Pengasuh</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
