import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import PhilosophySection from "../components/about/PhilosophySection";
import PillarsSection from "../components/about/PillarsSection";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <AboutHero />
                <PhilosophySection />
                <PillarsSection />
            </main>

            <Footer />
        </div>
    );
}
