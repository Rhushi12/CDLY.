import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewArrivalsHero from "../components/new-arrivals/NewArrivalsHero";
import FilterSidebar from "../components/new-arrivals/FilterSidebar";
import NewArrivalsGrid from "../components/new-arrivals/NewArrivalsGrid";
import StyledByCarousel from "../components/new-arrivals/StyledByCarousel";

export default function NewArrivalsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <NewArrivalsHero />

                {/* Main Content: Sidebar + Grid */}
                <div className="max-w-[1440px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 lg:gap-24">
                    <FilterSidebar />
                    <NewArrivalsGrid />
                </div>

                <StyledByCarousel />
            </main>

            <Footer />
        </div>
    );
}
