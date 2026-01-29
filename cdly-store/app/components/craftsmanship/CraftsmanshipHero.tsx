export default function CraftsmanshipHero() {
    return (
        <section className="w-full min-h-screen border-b border-black grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="h-[50vh] lg:h-full lg:border-r border-black relative overflow-hidden bg-gray-100">
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale contrast-125 scale-110"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU')",
                    }}
                />
                <div className="absolute bottom-6 left-6 bg-white border border-black px-3 py-1 z-10">
                    <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#111318]">
                        Fig 0.1 — Raw Material
                    </span>
                </div>
            </div>

            {/* Right: Typography */}
            <div className="min-h-[50vh] lg:h-full flex flex-col justify-center px-6 lg:px-20 bg-white relative py-12 lg:py-0">
                <div className="absolute top-12 left-6 lg:left-20">
                    <span className="bg-[#004aad] text-white px-3 py-1 font-[family-name:var(--font-mono)] text-xs font-bold tracking-widest uppercase">
                        Pillar 01
                    </span>
                </div>
                <h1 className="text-[15vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase text-[#111318] break-words mt-12 lg:mt-0">
                    CRAFTS
                    <br />
                    MAN
                    <br />
                    SHIP
                </h1>
                <div className="mt-12 max-w-md">
                    <p className="font-[family-name:var(--font-mono)] text-sm leading-relaxed uppercase text-gray-500">
                        The pursuit of perfection through the discipline of hand and eye.
                        Where tradition meets modern engineering.
                    </p>
                </div>
            </div>
        </section>
    );
}
