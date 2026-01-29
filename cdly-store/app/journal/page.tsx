import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JournalHero from "../components/journal/JournalHero";
import ChapterOrigins from "../components/journal/ChapterOrigins";
import ChapterProcess from "../components/journal/ChapterProcess";
import ChapterVision from "../components/journal/ChapterVision";

export default function JournalPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full bg-white relative z-10">
                <JournalHero />
                <ChapterOrigins />
                <ChapterProcess />
                <ChapterVision />
            </main>

            <Footer />
        </div>
    );
}
