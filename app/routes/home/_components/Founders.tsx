import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const founders = [
    {
        name: "K.H. Abdul Wahab",
        role: "Pendiri",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop", // Placeholder
        description: "Ulama kharismatik yang mendedikasikan hidupnya untuk pendidikan umat.",
    },
    {
        name: "Nyai Hj. Fatimah",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop", // Placeholder
        description: "Sosok ibu yang penuh kasih, pembimbing santriwati dengan keteladanan.",
    }
];

export function Founders() {
    return (
        <section className="py-24 bg-white border-b border-border-soft">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-tight mb-4">
                        Para Pendiri
                    </h2>
                    <p className="text-lg text-text-muted">
                        Mengenal sosok-sosok mulia yang telah meletakkan batu pertama perjuangan pendidikan di PP Wahabangil.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <Card
                            key={index}
                            className="bg-white border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group overflow-hidden"
                            style={{ borderColor: "#D9E5DD" }}
                        >
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="mb-6 relative">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                                        <div
                                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                                            style={{ backgroundImage: `url(${founder.image})`, backgroundColor: "#D9E5DD" }}
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        {founder.role}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">
                                    {founder.name}
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    {founder.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
