import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-primary-light/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-3 font-bold text-2xl tracking-tighter mb-2 hover:opacity-80 hover:scale-105 transition-all duration-300">
                            <Image
                                src="/logo.svg"
                                alt="PP Wahabangil Logo"
                                width={40}
                                height={40}
                                className="w-20 h-20"
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-white">PP</span>
                                <span className="text-secondary">Waha Bangil</span>
                            </div>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            Membangun generasi Islami yang berakhlak mulia, cerdas, dan mandiri dengan standar pendidikan modern.
                        </p>
                        <SocialLinks
                            socials={[
                                {
                                    id: "facebook",
                                    label: "Facebook",
                                    href: "#",
                                    icon: <Facebook className="w-full h-full" />,
                                    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                                },
                                {
                                    id: "instagram",
                                    label: "Instagram",
                                    href: "#",
                                    icon: <Instagram className="w-full h-full" />,
                                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                },
                                {
                                    id: "youtube",
                                    label: "Youtube",
                                    href: "#",
                                    icon: <Youtube className="w-full h-full" />,
                                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                                },
                            ]}
                            className="pt-4"
                            iconClassName="hover:bg-secondary"
                        />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
                            Tautan Cepat
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Tentang Kami
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Program Pendidikan
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Pendaftaran Siswa Baru
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Berita & Artikel
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Galeri Kegiatan
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
                            Program Unggulan
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Tahfidz Al-Qur'an
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Pengembangan Bahasa
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Sains & Teknologi
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2 group relative">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    <span className="relative">
                                        Entrepreneurship
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span>
                                    Jl. Pesantren No. 123, Kel. Kauman,
                                    <br />Kec. Bangil, Kab. Pasuruan,
                                    <br />Jawa Timur 67153
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <a href="tel:+62343123456" className="hover:text-secondary hover:scale-105 transition-all duration-300 relative group inline-block">
                                    (0343) 123-456
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:info@ppwahabangil.sch.id" className="hover:text-secondary hover:scale-105 transition-all duration-300 relative group inline-block">
                                    info@ppwahabangil.sch.id
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 mt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-white text-sm">&copy; {currentYear} PP Waha Bangil. All rights reserved.</p>
                    <div className="flex items-center gap-6 text-white text-sm">
                        <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 relative group">
                            Privacy Policy
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 relative group">
                            Terms of Service
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="#" className="hover:text-secondary hover:scale-105 transition-all duration-300 relative group">
                            Sitemap
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
