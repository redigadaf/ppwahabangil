
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Lightbulb, Target, Award } from "lucide-react";

const missions = [
    {
        icon: <BookOpen className="w-6 h-6 text-primary" />,
        text: "Menyelenggarakan pendidikan Islam yang integratif dan holistik."
    },
    {
        icon: <Heart className="w-6 h-6 text-primary" />,
        text: "Membentuk karakter santri yang berakhlakul karimah dan berbudi pekerti luhur."
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
        text: "Mengembangkan potensi akademik dan non-akademik santri secara optimal."
    },
    {
        icon: <Target className="w-6 h-6 text-primary" />,
        text: "Mewujudkan lulusan yang siap berkontribusi bagi kemajuan umat dan bangsa."
    }
];

export function VisionMission() {
    return (
        <section className="py-24 bg-[#E8F3EC]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Vision */}
                    <div className="text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                            <Target className="w-4 h-4" /> Visi Kami
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-dark leading-tight">
                            Menjadi Pusat Pendidikan Islam Unggulan yang Mencetak Generasi Qur'ani dan Berwawasan Global
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                            Kami berkomitmen untuk terus berinovasi dalam pendidikan, memadukan tradisi keilmuan Islam dengan kemajuan zaman.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="grid gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 text-primary font-medium text-sm w-fit mb-2">
                            <Award className="w-4 h-4" /> Misi Kami
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {missions.map((mission, index) => (
                                <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#E8F3EC] flex items-center justify-center shrink-0">
                                            {mission.icon}
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">
                                            {mission.text}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
