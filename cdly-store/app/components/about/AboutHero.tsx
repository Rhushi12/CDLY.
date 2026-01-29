export default function AboutHero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden border-b border-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center grayscale contrast-125"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU')",
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Title */}
            <div className="relative z-10 w-full px-6 flex justify-center items-center h-full">
                <h1 className="text-[12vw] md:text-[14vw] font-black leading-none tracking-tighter text-white mix-blend-overlay opacity-90 select-none">
                    MANIFESTO
                </h1>
            </div>
        </section>
    );
}
