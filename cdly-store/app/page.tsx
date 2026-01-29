import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import FeatureMarquee from "./components/FeatureMarquee";
import ProductGrid from "./components/ProductGrid";
import CountdownTimer from "./components/CountdownTimer";
import ShopTheLook from "./components/ShopTheLook";
import Archive from "./components/Archive";
import Quote from "./components/Quote";
import Editorial from "./components/Editorial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <div className="relative z-10 bg-white">
        <FeatureMarquee />
        <ProductGrid />
        <CountdownTimer />
        <ShopTheLook />
        <Archive />
        <Quote />
        <Editorial />
        <Footer />
      </div>
    </>
  );
}
