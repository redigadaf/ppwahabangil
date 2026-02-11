
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, MoonStar, Laptop, Users, Award, Globe } from "lucide-react";

const features = [
    {
        title: "Academic Excellence",
        description: "Kurikulum komprehensif yang mengintegrasikan standar nasional dengan wawasan global.",
        icon: <BookOpen className="w-10 h-10 text-primary mb-4" />,
        highlight: "Terakreditasi A"
    },
    {
        title: "Islamic Values",
        description: "Berakar kuat pada ajaran Al-Qur'an dan Sunnah, menumbuhkan karakter moral mulia.",
        icon: <MoonStar className="w-10 h-10 text-primary mb-4" />,
        highlight: "Tahfidz Program"
    },
    {
        title: "Modern Facilities",
        description: "Laboratorium, perpustakaan, dan fasilitas olahraga modern untuk mendukung pengembangan siswa.",
        icon: <Laptop className="w-10 h-10 text-primary mb-4" />,
        highlight: "Smart Classroom"
    },
    {
        title: "Character Building",
        description: "Program pembinaan kepemimpinan dan kemandirian melalui kegiatan ekstrakurikuler.",
        icon: <Users className="w-10 h-10 text-primary mb-4" />,
        highlight: "Leadership Camp"
    },
    {
        title: "Prestasi Teruji",
        description: "Rekam jejak prestasi akademik dan non-akademik di tingkat nasional dan internasional.",
        icon: <Award className="w-10 h-10 text-primary mb-4" />,
        highlight: "Juara Nasional"
    },
    {
        title: "Global Network",
        description: "Jaringan alumni dan kerjasama internasional yang luas untuk masa depan siswa.",
        icon: <Globe className="w-10 h-10 text-primary mb-4" />,
        highlight: "Alumni Tersebar"
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white border-b border-border-soft">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Mengapa Memilih Kami?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Kami menyediakan pendidikan holistik yang menyeimbangkan nilai-nilai Islam tradisional dengan standar
                        akademik modern untuk mencetak generasi unggul.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border border-border-soft hover:border-primary/20 hover:-translate-y-1 bg-white overflow-hidden relative"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                            <CardHeader>
                                <div className="mb-2">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-muted-foreground leading-relaxed mb-4">
                                    {feature.description}
                                </CardDescription>
                                <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
                                    {feature.highlight}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
