import { BookOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Activity {
    title: string;
    category: string;
    image: string;
    color: string;
    description: string;
    schedule: string;
}

export const activities: Activity[] = [
    {
        title: "Pramuka",
        category: "Kepemimpinan",
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1470&auto=format&fit=crop",
        color: "from-primary to-primary-dark",
        description: "Melatih kemandirian, kedisiplinan, dan jiwa kepemimpinan melalui berbagai kegiatan kepanduan yang seru dan menantang.",
        schedule: "Sabtu, 14:00 - 16:00"
    },
    {
        title: "Seni Hadrah",
        category: "Kesenian Islam",
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1470&auto=format&fit=crop",
        color: "from-primary to-primary-dark",
        description: "Melestarikan kesenian Islam melalui lantunan selawat dan tabuhan rebana yang indah dan harmonis.",
        schedule: "Kamis Malam, 20:00 - 22:00"
    },
    {
        title: "Pencak Silat",
        category: "Bela Diri",
        image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1472&auto=format&fit=crop",
        color: "from-primary to-primary-dark",
        description: "Membangun ketahanan fisik dan mental melalui seni bela diri tradisional Indonesia yang sarat akan nilai luhur.",
        schedule: "Selasa & Jumat, 15:30 - 17:30"
    },
    {
        title: "Kajian Kitab",
        category: "Keagamaan",
        image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1470&auto=format&fit=crop",
        color: "from-primary to-primary-dark",
        description: "Memperdalam pemahaman ilmu agama melalui pembacaan dan diskusi kitab-kitab klasik para ulama.",
        schedule: "Setiap Malam Sabtu"
    },
    {
        title: "Jurnalistik",
        category: "Literasi",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop",
        color: "from-primary to-primary-dark",
        description: "Mengasah kemampuan menulis, meliput berita, dan desain media untuk mengaburkan informasi positif pesantren.",
        schedule: "Senin, 16:00 - 17:30"
    },
    {
        title: "Tahfidz Quran",
        category: "Keagamaan",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1470&auto=format&fit=crop",
        color: "from-primary to-primary-dark",
        description: "Program intensif menghafal Al-Quran dengan metode yang efektif dan pendampingan yang mumpuni.",
        schedule: "Setiap Ba'da Subuh & Maghrib"
    }
];
