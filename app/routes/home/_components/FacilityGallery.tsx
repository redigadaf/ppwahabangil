
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const facilities = [
    {
        title: "Masjid Jami'",
        category: "Ibadah",
        image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1470&auto=format&fit=crop",
        description: "Pusat kegiatan ibadah dan kajian kitab kuning santri."
    },
    {
        title: "Gedung Sekolah Modern",
        category: "Pendidikan",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop",
        description: "Ruang kelas nyaman berbasis multimedia dan AC."
    },
    {
        title: "Laboratorium Sains",
        category: "Akademik",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop",
        description: "Fasilitas praktikum fisika, biologi, dan kimia yang lengkap."
    },
    {
        title: "Perpustakaan Digital",
        category: "Literasi",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop",
        description: "Ribuan koleksi buku fisik dan digital untuk menunjang wawasan."
    },
    {
        title: "Asrama Santri",
        category: "Tempat Tinggal",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop",
        description: "Hunian asri dan bersih dengan pengawasan pembina 24 jam."
    },
    {
        title: "Lapangan Olahraga",
        category: "Ekstrakurikuler",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        description: "Area futsal, basket, dan voli untuk menjaga kebugaran santri."
    },
];

export function FacilityGallery() {
    return (
        <section className="py-24 bg-[#E8F3EC]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Fasilitas Unggulan
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Lingkungan belajar yang kondusif didukung fasilitas modern untuk memaksimalkan potensi santri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <div
                                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${facility.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <Badge variant="outline" className="mb-3 border-secondary text-secondary-foreground bg-secondary/10">
                                    {facility.category}
                                </Badge>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {facility.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {facility.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
