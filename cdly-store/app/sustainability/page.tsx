import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SustainabilityHero from "../components/sustainability/SustainabilityHero";
import MaterialsList from "../components/sustainability/MaterialsList";
import ProcessGrid from "../components/sustainability/ProcessGrid";
import TransparencyStats from "../components/sustainability/TransparencyStats";

export default function SustainabilityPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <SustainabilityHero />
                <MaterialsList />
                <ProcessGrid />
                <TransparencyStats />
            </main>

            <Footer />
        </div>
    );
}
