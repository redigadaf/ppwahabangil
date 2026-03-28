import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/section/navbar/Navbar";
import { Footer } from "@/components/section/Footer";
import { RegistrationProvider } from "@/components/context/RegistrationContext";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PP Wahabangil | Modern Islamic Education",
  description: "Membangun generasi Islami yang berakhlak mulia, cerdas, dan mandiri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans text-text-main bg-white`}
      >
        <RegistrationProvider>
          <Navbar />
          {children}
          <RegistrationModal />
          <Footer />
        </RegistrationProvider>
      </body>
    </html>
  );
}
