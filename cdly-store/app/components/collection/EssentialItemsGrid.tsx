import CollectionProductCard from "./CollectionProductCard";

const products = [
    {
        name: "Wool Trench",
        category: "Outerwear",
        price: "$850",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        isNew: true,
    },
    {
        name: "Pleated Trouser",
        category: "Bottoms",
        price: "$340",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        isNew: false,
    },
    {
        name: "Poplin Shirt",
        category: "Tops",
        price: "$290",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        isNew: false,
    },
    {
        name: "Derby Shoe",
        category: "Footwear",
        price: "$580",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        isNew: false,
    },
    {
        name: "Cashmere Knit",
        category: "Knitwear",
        price: "$420",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        isNew: false,
    },
    {
        name: "Wide Trouser",
        category: "Bottoms",
        price: "$450",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        isNew: true,
    },
    {
        name: "Archive Parka",
        category: "Archive",
        price: "$1,200",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        isNew: false,
    },
    {
        name: "Summer Shirt",
        category: "Tops",
        price: "$220",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        isNew: false,
    },
];

export default function EssentialItemsGrid() {
    return (
        <section className="max-w-[1440px] mx-auto px-6 py-[100px] bg-white reveal-on-scroll">
            <div className="flex justify-between items-end mb-12 border-b border-black pb-4">
                <h3 className="text-2xl font-bold tracking-tight uppercase text-[#111318]">
                    Essential Items
                </h3>
                <span className="font-[family-name:var(--font-mono)] text-xs text-gray-500 uppercase">
                    FW/24 Collection
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black">
                {products.map((product, index) => (
                    <CollectionProductCard
                        key={index}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        isNew={product.isNew}
                    />
                ))}
            </div>
            <div className="mt-16 text-center">
                <a
                    className="inline-block border border-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#111318] hover:bg-[#004aad] hover:text-white hover:border-[#004aad] transition-all"
                    href="#"
                >
                    Load More
                </a>
            </div>
        </section>
    );
}
