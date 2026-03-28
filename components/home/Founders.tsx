"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
    {
        name: "K.H. Abdul Wahab",
        role: "Pendiri",
        image: "https://ui-avatars.com/api/?name=KH+Abdul+Wahab&background=1F7A4C&color=fff&size=256&font-size=0.33&bold=true",
        description: "Ulama kharismatik yang mendedikasikan hidupnya untuk pendidikan umat.",
        theme: "green"
    },
    {
        name: "Nyai Hj. Fatimah",
        role: "Co-Founder",
        image: "https://ui-avatars.com/api/?name=Nyai+Hj+Fatimah&background=D4A017&color=fff&size=256&font-size=0.33&bold=true",
        description: "Sosok ibu yang penuh kasih, pembimbing santriwati dengan keteladanan.",
        theme: "yellow"
    }
];

export function Founders() {
    return (
        <section className="w-full py-10 relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-4">
                <div className="relative text-center max-w-3xl mx-auto mb-10 z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.div variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { type: "spring", stiffness: 200 } } }}>
                            <span className="inline-block px-5 py-2 rounded-full bg-white text-primary-dark text-sm font-bold uppercase tracking-wider mb-6 border-2 border-primary/10 shadow-sm">
                                Tokoh Inspiratif
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight relative inline-block"
                        >
                            Para <span className="relative inline-block text-primary">
                                Pendiri
                                <svg className="absolute w-full h-4 -bottom-2 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto font-medium"
                        >
                            Mengenal sosok-sosok mulia yang telah meletakkan batu pertama perjuangan pendidikan di PP Wahabangil.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {founders.map((founder, index) => {
                        const isGreen = founder.theme === "green";
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="w-full max-w-sm group"
                            >
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 transition-all duration-300 hover:shadow-2xl">

                                    {/* Cheerful Header Bg */}
                                    <div className={`h-36 w-full relative overflow-hidden ${isGreen ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                                        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-40 -translate-y-10 translate-x-10 ${isGreen ? 'bg-primary' : 'bg-secondary'}`} />
                                        <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full blur-xl opacity-30 translate-y-10 -translate-x-5 ${isGreen ? 'bg-secondary' : 'bg-primary'}`} />
                                    </div>

                                    {/* Profile Image with Playful Border */}
                                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                                        <div className={`relative p-1.5 rounded-full bg-white shadow-lg`}>
                                            <div className={`w-36 h-36 rounded-full overflow-hidden border-4 ${isGreen ? 'border-primary/20 group-hover:border-primary' : 'border-secondary/20 group-hover:border-secondary'} transition-colors duration-300 relative`}>
                                                <Image
                                                    src={founder.image}
                                                    alt={founder.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-24 pb-8 px-8 text-center">
                                        <h3 className="text-2xl font-black text-gray-800 mb-1">
                                            {founder.name}
                                        </h3>
                                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${isGreen ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                                            {founder.role}
                                        </div>
                                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                                            {founder.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
