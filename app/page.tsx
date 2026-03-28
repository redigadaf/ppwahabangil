import { HeroVideo } from "../components/home/HeroVideo";
import { Founders } from "../components/home/Founders";
import { VisionMission } from "../components/home/VisionMission";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { FacilityGallery } from "../components/home/FacilityGallery";
import { Extracurriculars } from "../components/home/Extracurriculars";
import { Achievements } from "../components/home/Achievements";
import { TeachersAndStaff } from "../components/home/TeachersAndStaff";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* Hero Section */}
            <HeroVideo />

            {/* Founders Section */}
            <Founders />

            {/* Vision & Mission Section */}
            <VisionMission />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Facilities Gallery Section */}
            <FacilityGallery />

            {/* Extracurriculars Section */}
            <Extracurriculars />

            {/* Achievements Section */}
            <Achievements />

            {/* Teachers and Staff Section */}
            <TeachersAndStaff />
        </main>
    );
}
