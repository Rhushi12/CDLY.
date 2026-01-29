"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import VariantPicker from "../../components/product/VariantPicker";
import ATCButton from "../../components/product/ATCButton";
import ProductDetails from "../../components/product/ProductDetails";
import RelatedProducts from "../../components/product/RelatedProducts";
import Footer from "../../components/Footer";

// Mock product data - would come from API/Shopify in production
const mockProducts: Record<string, {
    title: string[];
    price: string;
    description: string;
    breadcrumbs: string[];
    images: string[];
    sizes: string[];
    details: { label: string; value: string }[];
    careInstructions: string;
    inStock: boolean;
}> = {
    "wool-trench-coat": {
        title: ["Wool", "Trench", "Coat"],
        price: "$850.00",
        description: "A rigorous study in form and function. This double-breasted trench is constructed from heavyweight Italian virgin wool with a felted finish. Features architectural lapels, dropped shoulders, and a minimalist belted waist. Unlined to reveal the precision of the interior construction.",
        breadcrumbs: ["Shop", "Outerwear", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"],
        sizes: ["S", "M", "L"],
        details: [
            { label: "Composition", value: "100% Virgin Wool" },
            { label: "Origin", value: "Made in Italy" },
            { label: "Fit", value: "Oversized / Relaxed" },
            { label: "Reference", value: "TC-004-BLK" },
        ],
        careInstructions: "This garment is constructed from natural fibers that require gentle handling. To maintain the integrity of the fabric and the sharpness of the silhouette, professional dry cleaning is mandatory. Do not wash, bleach, or tumble dry.",
        inStock: true,
    },
    "structured-blazer": {
        title: ["Structured", "Blazer"],
        price: "$650.00",
        description: "A meticulously tailored blazer with precise shoulder construction and clean lines. Crafted from premium Italian wool, this piece exemplifies our commitment to architectural silhouettes.",
        breadcrumbs: ["Shop", "Tailoring", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798"],
        sizes: ["XS", "S", "M", "L", "XL"],
        details: [
            { label: "Composition", value: "95% Wool, 5% Cashmere" },
            { label: "Origin", value: "Made in Italy" },
            { label: "Fit", value: "Slim / Tailored" },
            { label: "Reference", value: "BL-012-BLK" },
        ],
        careInstructions: "Dry clean only. Store on a proper suit hanger to maintain shoulder shape.",
        inStock: true,
    },
};

const relatedProducts = [
    { name: "Structured Blazer", category: "Tailoring", price: "$650", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798", href: "/products/structured-blazer" },
    { name: "Pleated Trousers", category: "Bottoms", price: "$420", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw", href: "#" },
    { name: "Cashmere Turtleneck", category: "Knitwear", price: "$590", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM", href: "#" },
    { name: "Leather Derby", category: "Footwear", price: "$780", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw", href: "#" },
    { name: "Utility Shirt", category: "Tops", price: "$320", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo", href: "#" },
];

interface PageProps {
    params: Promise<{ handle: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
    const [selectedSize, setSelectedSize] = useState("");
    const [handle, setHandle] = useState<string | null>(null);

    // Unwrap params (Next.js 15 async params)
    if (handle === null) {
        params.then((p) => setHandle(p.handle));
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <span className="text-gray-400">Loading...</span>
            </div>
        );
    }

    const product = mockProducts[handle] || mockProducts["wool-trench-coat"];

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }
        console.log(`Adding ${product.title.join(" ")} in size ${selectedSize} to cart`);
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Main Product Section */}
            <main className="w-full flex flex-col lg:flex-row border-b border-gray-200 bg-white">
                <ProductGallery images={product.images} productName={product.title.join(" ")} />

                <div className="w-full lg:w-2/5 relative">
                    <div className="lg:sticky lg:top-16 p-8 md:p-12 lg:p-16 flex flex-col h-auto lg:h-[calc(100vh-4rem)] overflow-y-auto">
                        <ProductInfo
                            breadcrumbs={product.breadcrumbs}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />

                        <VariantPicker
                            sizes={product.sizes}
                            selectedSize={selectedSize}
                            onSizeChange={setSelectedSize}
                        />

                        <ATCButton onAddToCart={handleAddToCart} inStock={product.inStock} />

                        {/* Stock Status */}
                        <div className="mt-6 flex items-center gap-2 text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-500">
                            <span className={`w-2 h-2 ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                            {product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}
                        </div>
                    </div>
                </div>
            </main>

            <ProductDetails
                details={product.details}
                careInstructions={product.careInstructions}
            />

            <RelatedProducts products={relatedProducts} />

            <Footer />
        </div>
    );
}
