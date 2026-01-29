import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LookbookHero from "../components/lookbook/LookbookHero";
import GalleryGrid from "../components/lookbook/GalleryGrid";
import MoodCarousel from "../components/lookbook/MoodCarousel";
import InMotionBanner from "../components/lookbook/InMotionBanner";
import ProductIndex from "../components/lookbook/ProductIndex";

export default function LookbookPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <LookbookHero />

            {/* Main Content (overlays the fixed hero) */}
            <div className="relative z-10 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <GalleryGrid />
                <MoodCarousel />
                <InMotionBanner />
                <ProductIndex />
            </div>

            <Footer />
        </div>
    );
}
