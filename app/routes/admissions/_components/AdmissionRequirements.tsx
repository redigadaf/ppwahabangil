"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Requirements */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-4">
                            Persyaratan
                        </h2>
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <ul className="space-y-4">
                                {requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </span>
                                        <span className="text-gray-700 font-medium">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Fees */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">
                            Biaya Pendidikan
                        </h2>
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <ul className="space-y-4">
                                {fees.map((fee, index) => (
                                    <li key={index} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                                        <span className="text-gray-600 font-medium">{fee.name}</span>
                                        <span className="text-gray-900 font-bold">{fee.price}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 italic text-center">
                                *Biaya dapat berubah sewaktu-waktu sesuai kebijakan yayasan.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
