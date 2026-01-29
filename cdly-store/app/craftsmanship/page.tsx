import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CraftsmanshipHero from "../components/craftsmanship/CraftsmanshipHero";
import TechnicalGrid from "../components/craftsmanship/TechnicalGrid";
import AtelierGallery from "../components/craftsmanship/AtelierGallery";
import MaterialsSection from "../components/craftsmanship/MaterialsSection";

export default function CraftsmanshipPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <CraftsmanshipHero />
                <TechnicalGrid />
                <AtelierGallery />
                <MaterialsSection />
            </main>

            <Footer />
        </div>
    );
}
