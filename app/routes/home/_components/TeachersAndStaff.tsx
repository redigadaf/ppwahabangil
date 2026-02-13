"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { SocialLinks } from "@/components/ui/social-links";

interface StaffMember {
    name: string;
    role: string;
    image: string;
    quote?: string;
    socials?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
}

const staff: StaffMember[] = [
    {
        name: "KH. Ahmad Fauzan",
        role: "Pengasuh Pondok",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1374&auto=format&fit=crop",
        quote: "Pendidikan adalah amanah untuk mencetak generasi Rabbani yang unggul dalam ilmu dan akhlak."
    },
    {
        name: "Ust. Muhammad Ilham",
        role: "Kepala Madrasah",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    },
    {
        name: "Ust. Halimah Syakira",
        role: "Pengajar Tahfidz",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
    },
    {
        name: "Ust. Faisal Ridwan",
        role: "Koordinator Kesiswaan",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
    },
    {
        name: "Ust. Siti Aminah",
        role: "Pengajar Bahasa Arab",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1372&auto=format&fit=crop",
    },
    {
        name: "Ust. Rahmat Hidayat",
        role: "Pengajar Kitab Kuning",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export function TeachersAndStaff() {
    const headerRef = useRef(null);
    const headTeacherRef = useRef(null);
    const gridRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
    const isHeadTeacherInView = useInView(headTeacherRef, { once: false, margin: "-100px" });
    const isGridInView = useInView(gridRef, { once: false, margin: "-100px" });

    const headTeacher = staff[0];
    const otherStaff = staff.slice(1);

    return (
        <section className="w-full py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bg-soft/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-soft/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full mb-6 backdrop-blur-sm border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Prestasi Santri</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                            Guru & Asatidz
                        </h2>
                        <p className="text-lg text-text-muted leading-relaxed">
                            Dibimbing oleh tenaga pengajar yang kompeten, berakhlak mulia, dan berdedikasi tinggi dalam mendidik santri.
                        </p>
                    </motion.div>
                </div>

                {/* Head Teacher Section - Spotlight */}
                <motion.div
                    ref={headTeacherRef}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={isHeadTeacherInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
                    whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-20 flex justify-center"
                >
                    <div className="relative group w-full max-w-4xl">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[2.5rem] blur opacity-20 group-hover:opacity-50 transition duration-300 ease-out"></div>

                        <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border-soft flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="relative shrink-0">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-inner">
                                    <Avatar className="w-full h-full border-4 border-white shadow-lg">
                                        <AvatarImage src={headTeacher.image} alt={headTeacher.name} className="object-cover" />
                                        <AvatarFallback className="text-4xl bg-primary text-white font-bold">
                                            {headTeacher.name.substring(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                                    <Badge className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-base shadow-lg border-2 border-white">
                                        {headTeacher.role}
                                    </Badge>
                                </div>
                            </div>

                            <div className="text-center md:text-left flex-1 space-y-6">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-2">
                                        {headTeacher.name}
                                    </h3>
                                    <p className="text-primary font-medium text-lg">Pimpinan Pondok Pesantren</p>
                                </div>

                                <div className="relative p-6 bg-bg-soft/50 rounded-2xl border border-primary/5">
                                    <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20 rotate-180" />
                                    <p className="text-text-muted text-lg italic leading-relaxed relative z-10 px-6">
                                        "{headTeacher.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                                    <SocialLinks
                                        socials={[
                                            {
                                                id: "linkedin",
                                                label: "LinkedIn",
                                                href: "#",
                                                icon: <Linkedin className="w-full h-full" />,
                                                image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                            },
                                            {
                                                id: "twitter",
                                                label: "Twitter",
                                                href: "#",
                                                icon: <Twitter className="w-full h-full" />,
                                                image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                                            },
                                            {
                                                id: "instagram",
                                                label: "Instagram",
                                                href: "#",
                                                icon: <Instagram className="w-full h-full" />,
                                                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                            }
                                        ]}
                                        iconClassName="bg-gray-50 text-text-muted hover:bg-primary hover:text-white border border-gray-100 shadow-sm"
                                        className="justify-center md:justify-start pt-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Staff Grid */}
                <motion.div
                    ref={gridRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGridInView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-8"
                >
                    {otherStaff.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg border border-border-soft hover:shadow-2xl hover:border-primary/30 transition-all duration-200 ease-out w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.4rem)]"
                        >
                            <div className="flex items-center gap-5 mb-6">
                                <div className="relative">
                                    <Avatar className="w-20 h-20 border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-200 ease-out">
                                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                                        <AvatarFallback className="bg-secondary/10 text-secondary font-bold">
                                            {member.name.substring(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                                        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-main group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-text-muted font-medium">{member.role}</p>
                                </div>
                            </div>

                            <div className="h-1 w-full bg-gradient-to-r from-bg-soft via-secondary-soft to-bg-soft rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="flex justify-between items-center text-sm text-text-muted">
                                <span>Lihat Profil</span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
