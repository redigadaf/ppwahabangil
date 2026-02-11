import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-primary-light/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block font-bold text-2xl tracking-tighter mb-2">
                            <span className="text-white">PP</span>
                            <span className="text-secondary">Wahabangil</span>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            Membangun generasi Islami yang berakhlak mulia, cerdas, dan mandiri dengan standar pendidikan modern.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors group">
                                <Facebook className="w-4 h-4 text-white group-hover:text-white" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors group">
                                <Instagram className="w-4 h-4 text-white group-hover:text-white" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors group">
                                <Youtube className="w-4 h-4 text-white group-hover:text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-secondary relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
                            Tautan Cepat
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li>
                                <Link href="/about" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Program Pendidikan
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Pendaftaran Siswa Baru
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Berita & Artikel
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Galeri Kegiatan
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
                                <Link href="/programs/tahfidz" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Tahfidz Al-Qur'an
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/bahasa" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Pengembangan Bahasa
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/sains" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Sains & Teknologi
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/entrepreneur" className="hover:text-secondary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                                    Entrepreneurship
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
                                <a href="tel:+62343123456" className="hover:text-secondary transition-colors">
                                    (0343) 123-456
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:info@ppwahabangil.sch.id" className="hover:text-secondary transition-colors">
                                    info@ppwahabangil.sch.id
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white">
                    <p>&copy; {currentYear} PP Wahabangil. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-secondary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
