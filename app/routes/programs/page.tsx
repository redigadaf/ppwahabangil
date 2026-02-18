import { ProgramsHero } from "./_components/ProgramsHero";
import { ProgramList } from "./_components/ProgramList";
import { ProgramCTA } from "./_components/ProgramCTA";

export default function ProgramsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProgramsHero />
            <ProgramList />
            <ProgramCTA />
        </main>
    );
}
