"use client";

import ProductCard from "./ProductCard";
import SplitText from "./SplitText";

const products = [
    {
        name: "Wool Trench Coat",
        category: "Outerwear",
        price: "$850",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        imageAlt: "Woman wearing long beige wool trench coat standing in minimal setting",
        isNew: true,
        slug: "wool-trench-coat",
    },
    {
        name: "Structured Blazer",
        category: "Tailoring",
        price: "$520",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        imageAlt: "Close up of structured black blazer texture and lapel details",
        isNew: false,
        className: "md:mt-12",
        slug: "structured-blazer",
    },
    {
        name: "Pleated Trousers",
        category: "Bottoms",
        price: "$340",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        imageAlt: "Minimal pleated trousers in charcoal grey on model walking",
        isNew: false,
        slug: "pleated-trousers",
    },
    {
        name: "Leather Chelsea Boot",
        category: "Footwear",
        price: "$480",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        imageAlt: "Black leather chelsea boots on concrete floor",
        isNew: false,
        className: "md:mt-[-3rem] lg:mt-0",
        slug: "leather-chelsea-boot",
    },
    {
        name: "Silk Print Scarf",
        category: "Accessories",
        price: "$120",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM",
        imageAlt: "Silk scarf with abstract black and white print draped on mannequin",
        isNew: false,
        className: "md:mt-12",
        slug: "silk-print-scarf",
    },
    {
        name: "Oversized Shirt",
        category: "Tops",
        price: "$290",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        imageAlt: "Oversized white cotton shirt on hanger against white wall",
        isNew: false,
        slug: "oversized-shirt",
    },
];

export default function ProductGrid() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-20 reveal-on-scroll bg-white">
            <div className="flex justify-between items-end mb-12">
                <SplitText
                    text="Latest Drops"
                    tag="h2"
                    className="text-4xl font-bold tracking-tight uppercase text-[#111318]"
                    splitType="chars"
                    delay={30}
                    duration={0.8}
                    textAlign="left"
                />
                <a
                    className="hidden md:inline-flex items-center text-sm font-bold uppercase tracking-widest border-b border-black pb-1 text-[#111318] hover:text-[--primary] hover:border-[--primary] transition-colors"
                    href="#"
                >
                    View All
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        imageAlt={product.imageAlt}
                        isNew={product.isNew}
                        className={product.className}
                        slug={product.slug}
                    />
                ))}
            </div>
        </section>
    );
}
