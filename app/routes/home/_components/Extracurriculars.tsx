import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Activity {
    title: string;
    category: string;
    image: string;
    className?: string;
}

const activities: Activity[] = [
    {
        title: "Pramuka",
        category: "Kepemimpinan",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", // Scout/camping vibe
        className: "md:col-span-2 md:row-span-2"
    },
    {
        title: "Seni Hadrah",
        category: "Kesenian Islam",
        image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1470&auto=format&fit=crop", // Group performance/traditional
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Pencak Silat",
        category: "Bela Diri",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1472&auto=format&fit=crop", // Martial arts
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Kajian Kitab",
        category: "Keagamaan",
        image: "https://images.unsplash.com/photo-1584819762145-81fa6c39f041?q=80&w=1470&auto=format&fit=crop", // Study
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Jurnalistik",
        category: "Literasi",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop", // Writing/news
        className: "md:col-span-1 md:row-span-1"
    }
];

export function Extracurriculars() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                            Ekstrakurikuler
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Wadah pengembangan bakat dan karakter santri melalui beragam kegiatan positif yang menyenangkan.
                        </p>
                    </div>
                    <div>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            <Link href="/ekstrakurikuler">
                                Lihat Semua Kegiatan
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer",
                                activity.className
                            )}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${activity.image})` }}
                            />

                            {/* Overlay - Initially transparent, green on hover */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/80 transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-100">
                                <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-black/30 rounded-full w-fit backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                                    {activity.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {activity.title}
                                </h3>
                                <div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300 ease-out">
                                    <p className="text-white/90 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        Selengkapnya &rarr;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
