import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

interface StaffMember {
    name: string;
    role: string;
    image: string;
    quote?: string;
}

const staff: StaffMember[] = [
    {
        name: "KH. Ahmad Fauzan",
        role: "Pengasuh Pondok",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af86f?q=80&w=1374&auto=format&fit=crop",
        quote: "Pendidikan adalah amanah untuk mencetak generasi Rabbani."
    },
    {
        name: "Ust. Muhammad Ilham",
        role: "Kepala Madrasah",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    },
    {
        name: "Ust. Halimah Syakira",
        role: "Pengajar Tahfidz",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
    },
    {
        name: "Ust. Faisal Ridwan",
        role: "Koordinator Kesiswaan",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
    },
    {
        name: "Ust. Siti Aminah",
        role: "Pengajar Bahasa Arab",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1372&auto=format&fit=crop",
    },
    {
        name: "Ust. Rahmat Hidayat",
        role: "Pengajar Kitab Kuning",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    }
];

export function TeachersAndStaff() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Guru & Asatidz
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Dibimbing oleh tenaga pengajar yang kompeten, berakhlak mulia, dan berdedikasi tinggi dalam mendidik santri.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staff.map((member, index) => (
                        <Card
                            key={index}
                            className="group flex flex-col items-center text-center bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                        >
                            <CardContent className="p-8 flex flex-col items-center">
                                <div className="relative mb-6">
                                    <Avatar className="w-32 h-32 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                                        <AvatarImage
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <AvatarFallback className="text-2xl bg-primary text-white">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute bottom-0 right-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                                    {member.name}
                                </h3>
                                <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                                    {member.role}
                                </Badge>

                                {member.quote && (
                                    <div className="relative mt-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <Quote className="w-4 h-4 text-primary/40 absolute top-2 left-2 transform -scale-x-100" />
                                        <p className="text-sm text-gray-600 italic px-2">
                                            "{member.quote}"
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
