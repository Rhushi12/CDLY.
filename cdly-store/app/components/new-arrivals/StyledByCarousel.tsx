const styledOutfits = [
    {
        id: 1,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBLX3KTCSZzNBti_9FFpGe5Xk7NtpncONe0jhbJjZXMOGl5Aq89M_srCcyXMKps7JrvjK3h4nWvQUngUsNi7Zdt61lKC-sdn9E4xrPNZrBR5eOaM7nkKlMJLc4GfKqOyK5gknPxtG0lLdXbx5llfco3vys8r7shbhRNopAWuD_C6uiVjTy6Yr1Xs4hYktwN_uybLqVN3RFIzb1xuXvyopfIk_QAn7NBl8R4cNSt-_nIAu6Qr2kRw-fqnfIUSXR9j8GKVZ91ogQsUkg",
        alt: "Styled Outfit 1",
        product: { name: "Oversized Trench", price: "$1,250" },
        position: { bottom: "25%", right: "25%" },
    },
    {
        id: 2,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCaOPxkYLxYcIHZanEzNbQ6sgqu9ElABKM8Pbesay-Hum9qGY2xsyVoXTOPgD5XQYiMcNpI9OeW28Yq-W70K36j03hKC6lmXIVeSq2ffJeQZV3A1yCdHBKe8FNnmICt7KsJUHwNArHIprdXFTMstm244TLUgnq1ms2dAo7elGwtjNloAjfQUj89FEC8BQ7CLgUlhSDX25be5xbIL5EziriZ8qqwL2IvTHSwwbcgmUx5UzEWjd3VyUmwklVIQxxYWNVTQyCSQI3T0Fg",
        alt: "Styled Outfit 2",
        product: { name: "Wool Blazer", price: "$890" },
        position: { top: "33%", left: "50%" },
    },
    {
        id: 3,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDAKQgaWOs2hOxt4tJUSiKrITunYg5qXTSuFr1FZi9ZvkIbVoNrns8vPQvNldSHSTvW6EnG5OxxxS1opP5B8S-HPTUXK8qu-tUg0aQZ-FT3B-CRabgEa2iI8tmHi1YnK_L0x1jzr8AklrYLgt2chYjH2okMGPjnv-CvVY1cF7CMqlhD_LTVympekdCQYeeVipA4cxSZ3upozjTKnEZ8ilosUPSzAwEULBH3zHtXzv3-xnoqowVNwknwri82e1cqOsMV5kdttqDUOg0",
        alt: "Styled Outfit 3",
        product: { name: "Silk Blouse", price: "$420" },
        position: { bottom: "33%", left: "33%" },
    },
    {
        id: 4,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAYzyL8_9dX9MyOm9lxtDbF0pqxVM9zyvFAHwfif7owRmWAEt7VNykM4O429jzd3sv53MG0NyZfo0NCiYU3GT2nmHgcA7YSofMcrGu4SmoqrCumulQ_S5KyBwlJXHfdDqMxAN9xxjbuXw7ZMQF829Pr1kLKDEcmlc0nEvgxpq_w8deJsmhBmov6uygaMkym_YlKYAL9M_5148089z2bk6JFWjhszahKpUuLCVR2iUalAZvGDtYz-yiGxsYJX12vPNmoEyPjHuP4HBM",
        alt: "Styled Outfit 4",
        product: { name: "Pleated Skirt", price: "$550" },
        position: { top: "50%", right: "33%" },
    },
];

export default function StyledByCarousel() {
    return (
        <section className="py-[120px] border-t border-black overflow-hidden bg-white">
            {/* Header */}
            <div className="max-w-[1440px] mx-auto px-6 mb-16 flex items-baseline justify-between">
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#111318]">
                    Styled By
                </h2>
                <span className="text-[#004aad] font-[family-name:var(--font-mono)] font-bold uppercase tracking-widest text-sm md:text-base">
                    The Edit
                </span>
            </div>

            {/* Carousel */}
            <div className="w-full border-y border-black overflow-x-auto scrollbar-hide">
                <div className="flex w-max">
                    {styledOutfits.map((outfit) => (
                        <div
                            key={outfit.id}
                            className="relative group w-[80vw] md:w-[30vw] aspect-[3/4] border-r border-black flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <img
                                alt={outfit.alt}
                                className="w-full h-full object-cover"
                                src={outfit.image}
                            />
                            {/* Shop Button */}
                            <button
                                className="absolute w-8 h-8 bg-[#004aad] text-white flex items-center justify-center hover:scale-110 transition-transform z-20 shadow-lg"
                                style={outfit.position as React.CSSProperties}
                            >
                                <span className="material-symbols-outlined text-sm font-bold">
                                    add
                                </span>
                            </button>
                            {/* Product Info Tooltip */}
                            <div
                                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white border border-black p-3 z-30 pointer-events-none translate-x-6 translate-y-6"
                                style={outfit.position as React.CSSProperties}
                            >
                                <p className="text-xs font-[family-name:var(--font-mono)] uppercase font-bold whitespace-nowrap text-[#111318]">
                                    {outfit.product.name}
                                </p>
                                <p className="text-[10px] font-[family-name:var(--font-mono)] text-gray-500">
                                    {outfit.product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
