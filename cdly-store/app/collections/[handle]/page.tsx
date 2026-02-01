import Navbar from "../../components/Navbar";
import AnnouncementBar from "../../components/AnnouncementBar";
import CollectionDetailHeader from "../../components/collection/CollectionDetailHeader";
import FilterSidebar from "../../components/collection/FilterSidebar";
import DetailProductCard from "../../components/collection/DetailProductCard";
import Footer from "../../components/Footer";

// Sample collection data - would come from API in production
const collectionData: Record<string, { title: string[]; subtitle: string }> = {
    "autumn-winter": { title: ["Autumn /", "Winter"], subtitle: "Collection 2024" },
    "spring-summer": { title: ["Spring /", "Summer"], subtitle: "Collection 2024" },
    "outerwear": { title: ["Outer", "wear"], subtitle: "Essential Layers" },
    "tailoring": { title: ["Tailor", "ing"], subtitle: "Refined Forms" },
    "accessories": { title: ["Accessor", "ies"], subtitle: "The Details" },
    "footwear": { title: ["Foot", "wear"], subtitle: "Foundation" },
};

const products = [
    { name: "Wool Trench", category: "Outerwear", price: "$850", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo", isArchive: false, offset: false, slug: "wool-trench" },
    { name: "Structured Blazer", category: "Tailoring", price: "$520", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798", isArchive: false, offset: true, slug: "structured-blazer" },
    { name: "Pleated Trouser", category: "Bottoms", price: "$340", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM", isArchive: false, offset: false, slug: "pleated-trouser" },
    { name: "Chelsea Boot", category: "Footwear", price: "$480", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw", isArchive: false, offset: false, slug: "chelsea-boot" },
    { name: "Silk Scarf", category: "Accessories", price: "$120", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM", isArchive: false, offset: true, slug: "silk-scarf" },
    { name: "Oversized Shirt", category: "Tops", price: "$290", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw", isArchive: false, offset: false, slug: "oversized-shirt" },
    { name: "Archive Coat", category: "Archive", price: "$1,200", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798", isArchive: true, offset: false, slug: "archive-coat" },
    { name: "Vint. Bomber", category: "Archive", price: "$950", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo", isArchive: true, offset: true, slug: "vint-bomber" },
    { name: "Wool Trousers", category: "Archive", price: "$420", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU", isArchive: true, offset: false, slug: "wool-trousers" },
];

interface PageProps {
    params: Promise<{ handle: string }>;
}

export default async function CollectionDetailPage({ params }: PageProps) {
    const { handle } = await params;
    const collection = collectionData[handle] || { title: ["All", "Products"], subtitle: "Browse Collection" };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <AnnouncementBar />
            <CollectionDetailHeader title={collection.title} subtitle={collection.subtitle} />

            <main className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 lg:gap-24 relative">
                <FilterSidebar />

                <div className="flex-1 min-h-screen">
                    {/* Sort Bar */}
                    <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-4 reveal-on-scroll">
                        <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-500">
                            Showing {products.length} of 24 items
                        </span>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-[#004aad] text-[#111318]">
                                Sort By: Featured
                            </span>
                            <span className="material-symbols-outlined text-sm text-[#111318]">expand_more</span>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
                        {products.map((product, index) => (
                            <DetailProductCard
                                key={index}
                                name={product.name}
                                category={product.category}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                isArchive={product.isArchive}
                                offset={product.offset}
                                slug={product.slug}
                            />
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-32 flex justify-center w-full border-t border-gray-100 pt-16 reveal-on-scroll">
                        <button className="px-16 py-5 border border-black text-[10px] font-bold uppercase tracking-[0.25em] text-[#111318] hover:bg-[#004aad] hover:text-white hover:border-[#004aad] transition-colors">
                            Load More
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Generate static params for common collection handles
export function generateStaticParams() {
    return [
        { handle: "autumn-winter" },
        { handle: "spring-summer" },
        { handle: "outerwear" },
        { handle: "tailoring" },
        { handle: "accessories" },
        { handle: "footwear" },
    ];
}
