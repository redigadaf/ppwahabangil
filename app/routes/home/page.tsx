import { HeroVideo } from "./_components/HeroVideo";
import { Founders } from "./_components/Founders";
import { VisionMission } from "./_components/VisionMission";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { FacilityGallery } from "./_components/FacilityGallery";
import { Extracurriculars } from "./_components/Extracurriculars";
import { Achievements } from "./_components/Achievements";
import { TeachersAndStaff } from "./_components/TeachersAndStaff";

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
