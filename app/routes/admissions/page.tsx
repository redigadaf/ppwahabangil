import { AdmissionsHero } from "./_components/AdmissionsHero";
import { AdmissionSteps } from "./_components/AdmissionSteps";
import { AdmissionRequirements } from "./_components/AdmissionRequirements";
import { AdmissionCTA } from "./_components/AdmissionCTA";

export default function AdmissionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <AdmissionsHero />
            <AdmissionSteps />
            <AdmissionRequirements />
            <AdmissionCTA />
        </main>
    );
}
