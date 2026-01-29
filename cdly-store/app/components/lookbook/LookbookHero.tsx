export default function LookbookHero() {
    return (
        <>
            {/* Fixed Hero Background */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU')",
                            }}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center h-full text-center">
                        <span className="text-white text-sm font-[family-name:var(--font-mono)] font-bold tracking-[0.3em] mb-6 uppercase">
                            Volume 04 — New York
                        </span>
                        <div className="overflow-hidden">
                            <h1
                                className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter drop-shadow-2xl"
                                style={{
                                    color: "rgba(255, 255, 255, 0.1)",
                                    WebkitTextStroke: "1px white",
                                }}
                            >
                                FALL / WINTER
                                <br />
                                LOOKBOOK
                            </h1>
                        </div>
                        <div className="mt-12">
                            <a
                                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-sm border-b border-white pb-1 hover:text-[#004aad] hover:border-[#004aad] transition-colors"
                                href="#lookbook"
                            >
                                View Collection{" "}
                                <span className="material-symbols-outlined text-lg">
                                    arrow_downward
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Pusher (creates scroll space) */}
            <div className="h-screen w-full pointer-events-none" />
        </>
    );
}
