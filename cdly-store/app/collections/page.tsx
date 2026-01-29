import Navbar from "../components/Navbar";
import CollectionHeader from "../components/collection/CollectionHeader";
import CategoryNav from "../components/collection/CategoryNav";
import CategoryGrid from "../components/collection/CategoryGrid";
import EssentialItemsGrid from "../components/collection/EssentialItemsGrid";
import CuratedLooks from "../components/collection/CuratedLooks";
import StatsSection from "../components/collection/StatsSection";
import CollectionEditorial from "../components/collection/CollectionEditorial";
import Footer from "../components/Footer";

export default function CollectionsPage() {
    return (
        <>
            <Navbar />
            <CollectionHeader />
            <CategoryNav />
            <div className="relative z-10 bg-white">
                <CategoryGrid />
                <EssentialItemsGrid />
                <CuratedLooks />
                <StatsSection />
                <CollectionEditorial />
                <Footer />
            </div>
        </>
    );
}
