import { Trophy, Medal, Star, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
    {
        title: "Juara Umum MQK Nasional",
        year: "2023",
        level: "Tingkat Nasional",
        description: "Meraih juara umum pada Musabaqah Qiraatil Kutub tingkat nasional di Jambi.",
        icon: Trophy,
    },
    {
        title: "Best Pesantren Based School",
        year: "2022",
        level: "Penghargaan Khusus",
        description: "Penghargaan sebagai sekolah berbasis pesantren terbaik dalam implementasi kurikulum merdeka.",
        icon: Crown,
    },
    {
        title: "30+ Hafidz per Tahun",
        year: "Setiap Tahun",
        level: "Program Tahfidz",
        description: "Konsisten mencetak lebih dari 30 santri penghafal Al-Qur'an 30 juz setiap tahunnya.",
        icon: Star,
    },
    {
        title: "Juara 1 Olimpiade Sains",
        year: "2024",
        level: "Tingkat Provinsi",
        description: "Medali emas pada Olimpiade Sains Nasional (OSN) bidang Matematika tingkat provinsi.",
        icon: Medal,
    }
];

export function Achievements() {
    return (
        <section className="py-24 bg-[#FAF1D8]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-2 bg-yellow-400/20 rounded-full mb-4">
                        <Trophy className="w-6 h-6 text-yellow-600 mr-2" />
                        <span className="text-yellow-700 font-semibold tracking-wide uppercase text-sm">Prestasi Santri</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                        Bukti Nyata <span className="text-yellow-600 relative inline-block">
                            Keunggulan
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg text-primary/80 font-medium">
                        Dedikasi kami dalam mencetak generasi unggul yang berprestasi di kancah nasional maupun internasional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <Card
                            key={index}
                            className="group relative bg-white/50 backdrop-blur-sm border-2 border-yellow-400/20 hover:bg-white hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>

                            <CardContent className="pt-14 pb-6 px-6">
                                <div className="flex items-center justify-between mb-2">
                                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-600 hover:bg-yellow-100 border-yellow-200">
                                        {item.year}
                                    </Badge>
                                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-wider">
                                        {item.level}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
