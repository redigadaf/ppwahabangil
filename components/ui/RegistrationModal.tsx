"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRegistration } from "@/components/context/RegistrationContext";
import { X, SendHorizontal, Check, User, Phone, MapPin, BookOpen } from "lucide-react";

export function RegistrationModal() {
    const { isOpen, closeModal } = useRegistration();
    const modalRef = useRef<HTMLDivElement>(null);
    const [selectedProgram, setSelectedProgram] = useState<string>("");
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const programs = [
        { id: "mts", label: "MTs (Putri)", icon: BookOpen },
        { id: "ma", label: "MA (Putri)", icon: BookOpen },
        { id: "tahfidz", label: "Tahfidz Quran (Putri)", icon: BookOpen },
        { id: "madin", label: "Madrasah Diniyah (Putri)", icon: BookOpen }
    ];

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);


    const inputClasses = "w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 placeholder:text-text-muted/60 backdrop-blur-sm";
    const labelClasses = "block text-sm font-bold text-text-main/80 mb-2 ml-1";
    const iconClasses = "absolute right-4 top-[48px] text-zinc-400 w-5 h-5 group-focus-within:text-primary transition-colors";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
                    >
                        {/* Left Side: Decorative & Info */}
                        <div className="hidden md:flex md:w-[42%] bg-linear-to-br from-primary via-primary to-primary-dark relative overflow-hidden p-8 flex-col justify-between text-white border-r border-black/5">
                            {/* Geometric decorations */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -ml-24 -mb-24" />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/20 backdrop-blur-sm w-fit p-3 rounded-2xl mb-6 shadow-xl border border-white/20"
                                >
                                    <BookOpen className="w-8 h-8 text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-black mb-4 leading-tight text-white/95">
                                    Mulai Langkah <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-yellow-200 relative">Terbaik</span> Anda
                                </h2>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    Bergabunglah dengan keluarga besar Pondok Pesantren Waha Bangil dan raih masa depan gemilang dengan pendidikan Islami modern.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                                        <Check className="w-5 h-5 text-secondary" />
                                    </div>
                                    <span className="text-sm font-medium">Kurikulum Terpadu</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                                        <Check className="w-5 h-5 text-secondary" />
                                    </div>
                                    <span className="text-sm font-medium">Fasilitas Lengkap</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                                        <Check className="w-5 h-5 text-secondary" />
                                    </div>
                                    <span className="text-sm font-medium">Pengajar Ahli</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 p-6 md:p-10 bg-white/50 backdrop-blur-xl relative overflow-y-auto">
                            {/* Close Button Mobile/Global */}
                            <button
                                onClick={closeModal}
                                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 transition-colors text-zinc-400 hover:text-primary cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-zinc-900 mb-1">Formulir Pendaftaran</h3>
                                <p className="text-zinc-500 text-sm">Lengkapi data diri calon santri berikut ini.</p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                {/* Full Name */}
                                <div className="relative group">
                                    <label className={labelClasses}>Nama Lengkap Calon Santri</label>
                                    <input type="text" placeholder="Masukkan nama lengkap..." className={inputClasses} />
                                    <User className={iconClasses} />
                                </div>

                                {/* Phone Number */}
                                <div className="relative group">
                                    <label className={labelClasses}>Nomor WhatsApp Orang Tua/Wali</label>
                                    <input type="tel" placeholder="Contoh: 081234567890" className={inputClasses} />
                                    <Phone className={iconClasses} />
                                </div>

                                {/* Level/Grade Select */}
                                <div className="relative group">
                                    <label className={labelClasses}>Program Pilihan</label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsSelectOpen(!isSelectOpen)}
                                            className={`${inputClasses} flex items-center justify-between text-left cursor-pointer transition-all duration-300 ${isSelectOpen ? 'ring-2 ring-primary/30 border-primary' : ''}`}
                                        >
                                            <span className={selectedProgram ? "text-text-main" : "text-text-muted/60"}>
                                                {selectedProgram ? programs.find(p => p.id === selectedProgram)?.label : "Pilih Program..."}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <div className="h-4 w-px bg-black/10 mx-1" />
                                                <motion.div
                                                    animate={{ rotate: isSelectOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <BookOpen className={`w-5 h-5 transition-colors ${isSelectOpen ? 'text-primary' : 'text-zinc-400'}`} />
                                                </motion.div>
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isSelectOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute z-10 w-full mt-2 bg-white/90 backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl overflow-hidden"
                                                >
                                                    <div className="p-1.5 space-y-1">
                                                        {programs.map((program) => (
                                                            <button
                                                                key={program.id}
                                                                type="button"
                                                                onClick={() => {
                                                                    setSelectedProgram(program.id);
                                                                    setIsSelectOpen(false);
                                                                }}
                                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group/item ${selectedProgram === program.id ? 'bg-primary text-white shadow-lg' : 'hover:bg-primary/5 text-text-main/80 hover:text-primary'}`}
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${selectedProgram === program.id ? 'bg-white/20' : 'bg-primary/5 group-hover/item:bg-primary/10'}`}>
                                                                        <program.icon className={`w-4 h-4 ${selectedProgram === program.id ? 'text-white' : 'text-primary'}`} />
                                                                    </div>
                                                                    <span className="font-semibold text-sm">{program.label}</span>
                                                                </div>
                                                                {selectedProgram === program.id && (
                                                                    <Check className="w-4 h-4 text-white" />
                                                                )}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="relative group">
                                    <label className={labelClasses}>Alamat Asal (Kota/Kabupaten)</label>
                                    <input type="text" placeholder="Masukkan kota asli..." className={inputClasses} />
                                    <MapPin className={iconClasses} />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-3 mt-4 group"
                                >
                                    <span>Kirim Pendaftaran</span>
                                    <SendHorizontal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                <p className="text-center text-[10px] md:text-xs text-zinc-400 mt-4 leading-relaxed">
                                    Data Anda aman & terenkripsi. Panitia akan segera menghubungi Anda melalui WhatsApp untuk proses verifikasi.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
