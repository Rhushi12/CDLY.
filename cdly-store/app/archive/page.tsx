import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArchiveHeader from "../components/archive/ArchiveHeader";
import SeasonNav from "../components/archive/SeasonNav";
import CollectionGrid from "../components/archive/CollectionGrid";
import RunwayArchives from "../components/archive/RunwayArchives";
import PrintedMaterials from "../components/archive/PrintedMaterials";

export default function ArchivePage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <ArchiveHeader />
                <SeasonNav />
                <CollectionGrid />
                <RunwayArchives />
                <PrintedMaterials />
            </main>

            <Footer />
        </div>
    );
}
