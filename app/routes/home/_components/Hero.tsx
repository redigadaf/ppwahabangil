import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary-dark text-white">
            {/* Background Image Placeholder - Replace with actual image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')",
                    /* Fallback gradient if image fails to load or while loading */
                    backgroundColor: "#0D5C3F"
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/50 to-primary-dark/90" />

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center select-none">
                <div className="space-y-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-sm">
                        PP Wahabangil
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                        Membangun Karakter Islami, <br className="hidden sm:block" />
                        <span className="text-secondary font-medium">Mencerdaskan Generasi Bangsa</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
                        <Button
                            asChild
                            size="lg"
                            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <Link href="#">Jelajahi Program Kami</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white px-8 py-6 text-lg backdrop-blur-sm transition-all"
                        >
                            <Link href="#">Tentang Kami</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
