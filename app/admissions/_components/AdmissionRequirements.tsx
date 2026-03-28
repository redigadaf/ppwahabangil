"use client";

import { motion } from "framer-motion";
import { Check, Wallet, FileText, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const requirements = [
    "Mengisi Formulir Pendaftaran",
    "Pas Foto 3x4 (4 Lembar)",
    "Fotocopy Akta Kelahiran",
    "Fotocopy Kartu Keluarga",
    "Fotocopy Ijazah Terakhir (Legalisir)",
    "Fotocopy SKHUN (Legalisir)",
    "Surat Keterangan Sehat Dokter",
    "Bebas Narkoba"
];

const fees = [
    { name: "Pendaftaran", price: "Rp 250.000" },
    { name: "Seragam Putra", price: "Rp 850.000" },
    { name: "Seragam Putri", price: "Rp 950.000" },
    { name: "SPP Bulanan", price: "Rp 650.000" },
    { name: "Uang Gedung", price: "Rp 5.000.000" },
    { name: "Sewa Lemari", price: "Rp 300.000" }
];

export function AdmissionRequirements() {
    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            {/* Playful Floating Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-[30px] border-primary/5 rounded-full border-dashed"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Match ProgramList */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Badge variant="secondary" className="px-5 py-1.5 mb-5 text-secondary bg-secondary/10 border-secondary/20 hover:bg-secondary/20 transition-colors text-sm font-medium tracking-wide">
                            Info Penting
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Syarat & <span className="text-secondary relative">
                                Biaya
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
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
                        Persiapkan berkas dari sekarang. Kami berusaha memberikan pendidikan terbaik dengan biaya yang transparan dan terjangkau.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">

                    {/* Requirements Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative group h-full"
                    >
                        {/* Glow Blob */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-primary/10 relative z-10 h-full overflow-hidden flex flex-col">
                            {/* Accent shape */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-700" />

                            <div className="flex items-center gap-5 mb-10">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                    Berkas Persyaratan
                                </h3>
                            </div>

                            <ul className="space-y-5 relative z-10 flex-grow">
                                {requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-4 group/item">
                                        <motion.span
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5 group-hover/item:bg-secondary transition-colors duration-300"
                                        >
                                            <Check className="w-4 h-4 text-secondary group-hover/item:text-white transition-colors" />
                                        </motion.span>
                                        <span className="text-gray-700 font-medium text-lg group-hover/item:text-gray-900 transition-colors pt-0.5">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Fees Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                        className="relative group h-full"
                    >
                        {/* Glow Blob */}
                        <div className="absolute -inset-2 bg-gradient-to-l from-primary/20 to-secondary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-secondary/10 relative z-10 h-full overflow-hidden flex flex-col">
                            {/* Accent shape */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-700" />

                            <div className="flex items-center gap-5 mb-10">
                                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <Wallet className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                    Biaya Pendaftaran
                                </h3>
                            </div>

                            <ul className="space-y-4 relative z-10 flex-grow">
                                {fees.map((fee, index) => (
                                    <li key={index} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0 group/item">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-gray-200 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300" />
                                            <span className="text-gray-600 font-medium text-lg leading-none group-hover/item:text-gray-900 transition-colors">{fee.name}</span>
                                        </div>
                                        <span className="text-gray-900 font-black text-lg bg-gray-50 px-4 py-1.5 rounded-lg group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors shadow-sm">{fee.price}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-4 text-sm text-gray-500 italic bg-gray-50/50 p-5 rounded-2xl border border-gray-50">
                                <p className="leading-relaxed">Biaya di atas merupakan estimasi awal. Segala bentuk perubahan akan diinformasikan sesuai dengan kebijakan terbaru dari pengurus yayasan.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

