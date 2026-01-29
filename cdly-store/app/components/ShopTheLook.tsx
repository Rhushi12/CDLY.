const lookProducts = [
    {
        name: "Cashmere Turtleneck",
        category: "Knitwear",
        price: "$320",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
    },
    {
        name: "Wide Leg Wool Trousers",
        category: "Bottoms",
        price: "$450",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
    },
    {
        name: "Leather Oxford Shoes",
        category: "Footwear",
        price: "$580",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
    },
];

export default function ShopTheLook() {
    return (
        <section className="w-full bg-white py-32 reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-0 relative">
                    <div className="w-full lg:w-3/5 h-[800px] overflow-hidden relative border border-gray-200">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU')",
                            }}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group rounded-none">
                            <div className="w-2 h-2 bg-[--klein-blue] rounded-none" />
                        </div>
                    </div>
                    <div className="w-full lg:w-[460px] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-white border border-black p-8 md:p-10 shadow-sm z-20">
                        <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#111318]">
                                Shop The Look
                            </h3>
                            <span className="material-symbols-outlined text-[--klein-blue] text-xl">
                                arrow_outward
                            </span>
                        </div>
                        <div className="flex flex-col gap-8">
                            {lookProducts.map((product, index) => (
                                <a key={index} className="group flex items-center gap-6" href="#">
                                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                                        <img
                                            alt={product.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                            src={product.imageUrl}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#111318] group-hover:text-[--klein-blue] transition-colors">
                                            {product.name}
                                        </h4>
                                        <p className="text-[10px] text-gray-500 font-[family-name:var(--font-mono)] uppercase mt-1">
                                            {product.category}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                                            {product.price}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                            <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-400">
                                Total Look Price
                            </span>
                            <span className="text-lg font-bold text-[#111318]">$1,350</span>
                        </div>
                        <button className="w-full mt-8 bg-[#111318] text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[--klein-blue] transition-colors rounded-none">
                            Add All To Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
