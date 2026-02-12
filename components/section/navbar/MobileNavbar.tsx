"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, Rocket, BookOpen, User, Phone, Globe, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#", icon: <User className="w-5 h-5" /> },
    { name: "Programs", href: "#", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Admissions", href: "#", icon: <Globe className="w-5 h-5" /> },
    { name: "Contact", href: "#", icon: <Phone className="w-5 h-5" /> },
];

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="md:hidden fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <Image
                        src="/logo.svg"
                        alt="PP Wahabangil Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <div className="flex items-center gap-1">
                        <span className="text-primary">PP</span>
                        <span className="text-secondary">Wahabangil</span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-3 py-3 px-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-secondary">{link.icon}</span>
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                            <Button className="w-full bg-primary hover:bg-primary-dark text-white" asChild>
                                <Link href="/portal">Portal Siswa</Link>
                            </Button>
                            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white" asChild>
                                <Link href="/register">Daftar Sekarang</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
