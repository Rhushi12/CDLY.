import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InnovationHero from "../components/innovation/InnovationHero";
import TechnologyGrid from "../components/innovation/TechnologyGrid";
import MaterialsLibrary from "../components/innovation/MaterialsLibrary";

export default function InnovationPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <InnovationHero />
                <TechnologyGrid />
                <MaterialsLibrary />
            </main>

            <Footer />
        </div>
    );
}
