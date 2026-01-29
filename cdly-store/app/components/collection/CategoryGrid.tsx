const categoryCards = [
    {
        title: ["Outer", "wear"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU",
        href: "/collections/outerwear",
    },
    {
        title: ["Tailor", "ing"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        href: "/collections/tailoring",
    },
    {
        title: ["Accessor", "ies"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM",
        href: "/collections/accessories",
    },
    {
        title: ["Foot", "wear"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        href: "/collections/footwear",
    },
];

export default function CategoryGrid() {
    return (
        <section className="border-b border-black">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {categoryCards.map((card, index) => (
                        <a
                            key={index}
                            className={`group relative block aspect-[4/5] md:aspect-square overflow-hidden ${index === 0 ? "border-b md:border-b-0 md:border-r border-black" : ""
                                }${index === 1 ? "border-b border-black" : ""}${index === 2 ? "md:border-r border-b md:border-b-0 border-black" : ""
                                }`}
                            href={card.href}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${card.imageUrl}')` }}
                            />
                            <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/30 transition-colors duration-300 mix-blend-multiply" />
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-md leading-none">
                                    {card.title[0]}<br />{card.title[1]}
                                </h2>
                                <div className="w-0 group-hover:w-full h-1 bg-white mt-4 transition-all duration-500" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
