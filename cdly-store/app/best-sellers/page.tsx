import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BestSellersHeader from "../components/best-sellers/BestSellersHeader";
import CategorySidebar from "../components/best-sellers/CategorySidebar";
import RankedProductCard from "../components/best-sellers/RankedProductCard";
import EditorialBanner from "../components/best-sellers/EditorialBanner";
import TrendingReels from "../components/best-sellers/TrendingReels";

const products = [
    {
        rank: 1,
        name: "Wool Trench",
        category: "Heavyweight",
        price: "$850",
        pairWith: "Derby Shoe",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        slug: "wool-trench",
    },
    {
        rank: 2,
        name: "Archive Parka",
        category: "Technical",
        price: "$1,200",
        pairWith: "Cargo Pant",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        slug: "archive-parka",
    },
    {
        rank: 3,
        name: "Pleated Trouser",
        category: "Relaxed Fit",
        price: "$340",
        pairWith: "Oversized Shirt",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        slug: "pleated-trouser",
    },
    {
        rank: 4,
        name: "Derby Shoe",
        category: "Calf Leather",
        price: "$580",
        pairWith: "Wool Socks",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        slug: "derby-shoe",
    },
    {
        rank: 5,
        name: "Cashmere Knit",
        category: "Charcoal",
        price: "$420",
        pairWith: "Silk Scarf",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        slug: "cashmere-knit",
    },
    {
        rank: 6,
        name: "Wide Trouser",
        category: "Virgin Wool",
        price: "$450",
        pairWith: "Fitted Tank",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        slug: "wide-trouser",
    },
    {
        rank: 7,
        name: "Poplin Shirt",
        category: "Oversized",
        price: "$290",
        pairWith: "Raw Denim",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        slug: "poplin-shirt",
    },
    {
        rank: 8,
        name: "Summer Shirt",
        category: "Linen Blend",
        price: "$220",
        pairWith: "Shorts",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        slug: "summer-shirt",
    },
];

export default function BestSellersPage() {
    const firstBatch = products.slice(0, 4);
    const secondBatch = products.slice(4);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <BestSellersHeader />

            <div className="max-w-[1440px] mx-auto w-full px-6 flex-grow">
                <div className="flex flex-col lg:flex-row">
                    <CategorySidebar />

                    <main className="w-full lg:w-4/5 pt-[100px] pb-32">
                        {/* First Product Grid (Rank 1-4) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                            {firstBatch.map((product) => (
                                <RankedProductCard key={product.rank} {...product} />
                            ))}
                        </div>

                        {/* Editorial Banner */}
                        <EditorialBanner />

                        {/* Second Product Grid (Rank 5-8) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                            {secondBatch.map((product) => (
                                <RankedProductCard key={product.rank} {...product} />
                            ))}
                        </div>

                        {/* Trending Reels */}
                        <TrendingReels />

                        {/* Load More */}
                        <div className="mt-24 flex justify-center w-full">
                            <button className="border-2 border-black bg-transparent hover:bg-black hover:text-white transition-colors px-16 py-5 text-sm font-bold uppercase tracking-[0.25em] text-[#111318]">
                                Load More
                            </button>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
