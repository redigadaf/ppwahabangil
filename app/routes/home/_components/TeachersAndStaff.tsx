"use client";

import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
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
        image: "https://ui-avatars.com/api/?name=KH+Ahmad+Fauzan&background=1F7A4C&color=fff&size=256&font-size=0.33&bold=true",
        quote: "Pendidikan adalah amanah untuk mencetak generasi Rabbani yang unggul dalam ilmu dan akhlak."
    },
    {
        name: "Ust. Muhammad Ilham",
        role: "Kepala Madrasah",
        image: "https://ui-avatars.com/api/?name=Muhammad+Ilham&background=1F7A4C&color=fff&size=256&font-size=0.33&bold=true",
    },
    {
        name: "Ust. Halimah Syakira",
        role: "Pengajar Tahfidz",
        image: "https://ui-avatars.com/api/?name=Halimah+Syakira&background=D4A017&color=fff&size=256&font-size=0.33&bold=true",
    },
    {
        name: "Ust. Faisal Ridwan",
        role: "Koordinator Kesiswaan",
        image: "https://ui-avatars.com/api/?name=Faisal+Ridwan&background=1F7A4C&color=fff&size=256&font-size=0.33&bold=true",
    },
    {
        name: "Ust. Siti Aminah",
        role: "Pengajar Bahasa Arab",
        image: "https://ui-avatars.com/api/?name=Siti+Aminah&background=D4A017&color=fff&size=256&font-size=0.33&bold=true",
    },
    {
        name: "Ust. Rahmat Hidayat",
        role: "Pengajar Kitab Kuning",
        image: "https://ui-avatars.com/api/?name=Rahmat+Hidayat&background=1F7A4C&color=fff&size=256&font-size=0.33&bold=true",
    }
];

export function TeachersAndStaff() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });

    const members = staff.map((s, i) => ({
        name: s.name,
        designation: s.role,
        imageSrc: s.image,
        socialLinks: [
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" }
        ]
    }));

    return (
        <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 mx-auto">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg className="h-full w-full" fill="none">
                        <defs>
                            <pattern
                                id="grid"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M20 0L0 0 0 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-text-main"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Header Section */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full mb-6 backdrop-blur-sm border border-primary/20">
                            <span className="text-sm font-semibold text-primary">Tenaga Pendidik</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                            Guru & Asatidz <span className="text-secondary relative inline-block">
                                Terbaik
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-lg text-text-muted font-medium leading-relaxed">
                            Dibimbing oleh tenaga pengajar yang kompeten, berakhlak mulia, dan berdedikasi tinggi dalam mendidik santri.
                        </p>
                    </motion.div>
                </div>

                {/* Team Members Grid */}
                <motion.div
                    className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
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
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group relative flex flex-col items-center justify-end overflow-hidden p-8 text-center transition-all duration-300 ease-in-out hover:scale-[1.02]"
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 0.8
                                    }
                                }
                            }}
                        >
                            {/* Background wave animation */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-primary/10 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            />

                            {/* Member Image */}
                            <div
                                className="relative z-10 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-md bg-bg-soft transition-all duration-500 ease-out group-hover:border-primary group-hover:scale-105"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={member.imageSrc}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                            <h3 className="relative z-10 mt-6 text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="relative z-10 text-sm text-primary font-medium mb-4">
                                {member.designation}
                            </p>

                            {/* Social Links */}
                            <div className="relative z-10 opacity-0 transform translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                <SocialLinks
                                    socials={[
                                        {
                                            id: `twitter-${index}`,
                                            label: "Twitter",
                                            href: "#",
                                            icon: <Twitter className="w-full h-full" />,
                                            image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                                        },
                                        {
                                            id: `instagram-${index}`,
                                            label: "Instagram",
                                            href: "#",
                                            icon: <Instagram className="w-full h-full" />,
                                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                        }
                                    ]}
                                    iconClassName="bg-white text-text-muted hover:bg-primary hover:text-white border border-gray-100 shadow-sm w-10 h-10"
                                    className="justify-center gap-3"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
