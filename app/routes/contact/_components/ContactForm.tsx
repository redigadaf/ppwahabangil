"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, MessageSquare, Smile, Sparkles } from "lucide-react";

export function ContactForm() {
    return (
        <section className="relative w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
            {/* Playful Background Orbs */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-secondary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0" />

            {/* Pattern Overlay mapping back to the honeycomb aesthetic faintly */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='c' width='29' height='50.115' patternTransform='scale(2)' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' stroke='%232b2b31' stroke-width='1' d='M14.498 16.858 0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23c)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

                    {/* Left Info Section */}
                    <div className="lg:col-span-2 space-y-6 md:space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -40, rotate: -5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 10 }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-text-main leading-[1.15] mb-4">
                                Yuk, Tinggalkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary relative inline-block">
                                    Pesan!
                                    <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-secondary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium">
                                Tim kami yang ramah siap membaca seluruh pesan, saran, maupun permohonan bantuanmu seputar Pendaftaran. Kami usahakan segera membalasnya!
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 4 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120, damping: 12, mass: 1 }}
                            className="hidden lg:block relative"
                        >
                            <Card className="p-6 bg-primary-dark text-white rounded-[2rem] border-0 shadow-2xl overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 md:top-6 md:right-5">
                                    <motion.div animate={{ rotate: 360, scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                                        <svg viewBox="0 0 100 100" className="w-7 h-7 text-yellow-300 opacity-80 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]">
                                            <path fill="currentColor" d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                                        </svg>
                                    </motion.div>
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-yellow-100 flex items-center">Cepat & Sigap!</h4>
                                <p className="text-white/80 text-sm font-medium leading-relaxed">
                                    Pesan yang masuk pada jam kerja rata-rata akan langsung dibalas oleh panitia melalui Email dalam estimasi waktu kurang dari <span className="font-bold text-yellow-300 underline decoration-yellow-500/50 underline-offset-2">1 Jam Kerja</span>.
                                </p>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Right Form Card Section */}
                    <motion.div
                        className="lg:col-span-3 h-full"
                        initial={{ opacity: 0, scale: 0.85, x: 40, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.9, delay: 0.25, type: "spring", stiffness: 100, damping: 12, mass: 0.8 }}
                    >
                        <Card className="p-6 sm:p-8 md:p-10 border-2 border-border-soft shadow-2xl shadow-primary/5 bg-white rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden h-full group">
                            {/* Decorative background form blob */}
                            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-bg-soft rounded-bl-[100px] md:rounded-bl-[150px] pointer-events-none group-hover:bg-secondary-soft transition-colors duration-700" />

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <motion.div
                                    className="p-3 bg-primary/10 rounded-xl"
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                >
                                    <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} />
                                </motion.div>
                                <h3 className="text-2xl md:text-3xl font-black text-text-main tracking-tight">Formulir Pesan</h3>
                            </div>

                            <form className="space-y-5 md:space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2 group/input">
                                        <label htmlFor="name" className="text-sm font-extrabold text-text-main ml-2 flex items-center gap-1">
                                            Nama Lengkap <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-5 py-3.5 md:py-4 bg-gray-50 border-2 border-border-soft rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold text-text-main placeholder:text-gray-400 placeholder:font-medium hover:border-border"
                                                placeholder="Cth. Ahmad Santoso"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2 group/input">
                                        <label htmlFor="email" className="text-sm font-extrabold text-text-main ml-2 flex items-center gap-1">
                                            Email Aktif <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-5 py-3.5 md:py-4 bg-gray-50 border-2 border-border-soft rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold text-text-main placeholder:text-gray-400 placeholder:font-medium hover:border-border"
                                                placeholder="alamat@email.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="space-y-2 group/input">
                                    <label htmlFor="subject" className="text-sm font-extrabold text-text-main ml-2 flex items-center gap-1">
                                        Subjek <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-5 py-3.5 md:py-4 bg-gray-50 border-2 border-border-soft rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold text-text-main placeholder:text-gray-400 placeholder:font-medium hover:border-border"
                                            placeholder="Tanya tentang pendaftaran..."
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2 group/input">
                                    <label htmlFor="message" className="text-sm font-extrabold text-text-main ml-2 flex items-center gap-1">
                                        Pesan <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-5 py-3.5 md:py-4 bg-gray-50 border-2 border-border-soft rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold text-text-main placeholder:text-gray-400 placeholder:font-medium hover:border-border resize-none"
                                            placeholder="Tulis pesan lengkapmu di sini dengan bahasa yang baik dan sopan..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                                    <Button
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-black text-base md:text-lg h-14 md:h-16 rounded-[1.25rem] shadow-[0_10px_30px_-10px_rgba(31,122,76,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(31,122,76,0.8)] border-2 border-primary-light/50 transition-all group overflow-hidden relative"
                                        type="submit"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Kirim Pesan Sekarang
                                            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>
                                        {/* Button Hover Flash */}
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    </Button>
                                </motion.div>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
