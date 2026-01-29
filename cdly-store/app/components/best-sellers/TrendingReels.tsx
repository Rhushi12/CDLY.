const reels = [
    {
        id: 1,
        title: "BTS: Campaign",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
    },
    {
        id: 2,
        title: "Styling: Pleats",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
    },
    {
        id: 3,
        title: "Material Focus",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
    },
    {
        id: 4,
        title: "Runway Walk",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
    },
];

export default function TrendingReels() {
    return (
        <div className="mt-32 mb-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-black pb-4">
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#111318]">
                    Trending Reels
                </h2>
                <a
                    className="text-xs font-bold uppercase tracking-widest hover:text-[#004aad] transition-colors flex items-center gap-1 text-[#111318]"
                    href="#"
                >
                    View All{" "}
                    <span className="material-symbols-outlined text-sm">
                        arrow_forward
                    </span>
                </a>
            </div>

            {/* Reels Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {reels.map((reel) => (
                    <div
                        key={reel.id}
                        className="aspect-[9/16] bg-gray-100 relative group cursor-pointer overflow-hidden border border-black"
                    >
                        <img
                            alt={reel.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            src={reel.image}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        {/* Play Icon */}
                        <div className="absolute top-3 right-3 text-white">
                            <span className="material-symbols-outlined drop-shadow-md">
                                play_circle
                            </span>
                        </div>
                        {/* Title */}
                        <div className="absolute bottom-3 left-3">
                            <p className="text-white text-[10px] font-bold uppercase tracking-widest drop-shadow-md">
                                {reel.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
