"use client";

import { ContactHero } from "./_components/ContactHero";
import { ContactInfo } from "./_components/ContactInfo";
import { ContactForm } from "./_components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </main>
    );
}
