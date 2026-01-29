export default function InMotionBanner() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center border-y border-black overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 bg-gray-900">
                <div
                    className="w-full h-full bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU')",
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                <h2
                    className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase"
                    style={{
                        color: "rgba(255, 255, 255, 0.1)",
                        WebkitTextStroke: "1px white",
                    }}
                >
                    In Motion
                </h2>
                <button className="bg-[#004aad] text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] border border-[#004aad] hover:bg-transparent hover:text-white transition-all duration-300">
                    Shop The Scene
                </button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white z-10">
                <span className="material-symbols-outlined text-3xl cursor-pointer hover:text-[#004aad]">
                    play_circle
                </span>
                <div className="w-32 h-px bg-white/50">
                    <div className="w-1/3 h-full bg-[#004aad]" />
                </div>
                <span className="text-xs font-[family-name:var(--font-mono)]">
                    00:14 / 01:30
                </span>
            </div>
        </section>
    );
}
