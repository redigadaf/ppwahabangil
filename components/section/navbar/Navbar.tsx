"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Rocket, BookOpen, User, Phone, Globe } from "lucide-react";
import { MobileNavbar } from "./MobileNavbar";

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/", icon: <Rocket className="w-4 h-4 mr-2" /> },
        { name: "About", href: "#", icon: <User className="w-4 h-4 mr-2" /> },
        { name: "Programs", href: "#", icon: <BookOpen className="w-4 h-4 mr-2" /> },
        { name: "Admissions", href: "#", icon: <Globe className="w-4 h-4 mr-2" /> },
        { name: "Contact", href: "#", icon: <Phone className="w-4 h-4 mr-2" /> },
    ];

    return (
        <>
            {/* Mobile Navbar (Visible on Mobile Only) */}
            <MobileNavbar />

            {/* Desktop Navbar (Hidden on Mobile) */}
            <nav
                className={cn(
                    "hidden md:block fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2",
                    scrolled
                        ? "top-4 w-[95%] sm:w-[96%] rounded-xl bg-white/90 backdrop-blur-md shadow-xl border border-white/20 py-2"
                        : "top-0 w-full bg-transparent py-4 border-b border-transparent"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.svg"
                            alt="PP Wahabangil Logo"
                            width={50}
                            height={50}
                            className="w-12 h-12"
                        />
                        <div className="flex items-center gap-1">
                            <span className={cn("text-primary transition-colors duration-300", !scrolled && "text-white")}>PP</span>
                            <span className="text-secondary transition-colors duration-300">Waha Bangil</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 flex items-center relative group",
                                        scrolled
                                            ? isActive
                                                ? "text-primary"
                                                : "text-text-main hover:text-primary"
                                            : isActive
                                                ? "text-secondary"
                                                : "text-white hover:text-secondary"
                                    )}
                                >
                                    {link.name}
                                    {/* Hover Underline Animation */}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                                        isActive ? "w-full" : "w-0 group-hover:w-full",
                                        scrolled ? "bg-primary" : "bg-secondary"
                                    )} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            className={cn(
                                "transition-colors duration-300 font-medium",
                                scrolled
                                    ? "text-primary hover:text-primary-dark hover:bg-primary/10"
                                    : "text-white hover:text-secondary hover:bg-white/10"
                            )}
                            size="sm"
                        >
                            Portal Siswa
                        </Button>
                        <Button
                            className={cn(
                                "shadow-lg hover:shadow-xl transition-all duration-300 font-bold",
                                scrolled
                                    ? "bg-primary hover:bg-primary-dark text-white"
                                    : "bg-secondary hover:bg-secondary/90 text-white"
                            )}
                            size="sm"
                        >
                            Daftar Sekarang
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    );
}

