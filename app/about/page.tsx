import { AboutHero } from "./_components/AboutHero";
import { History } from "./_components/History";
import { Values } from "./_components/Values";
import { AboutCTA } from "./_components/AboutCTA";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center pb-24 space-y-8 bg-white">
            <AboutHero />
            <Values />
            <History />
            <AboutCTA />
        </main>
    );
}
