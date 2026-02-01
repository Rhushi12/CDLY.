import Link from "next/link";

export default function Hero() {
    return (
        <section className="sticky top-16 z-0 w-full h-[calc(100vh-4rem)] min-h-[600px] flex items-center border-b border-gray-200 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU')",
                    }}
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex justify-end items-center h-full">
                <div className="max-w-xl p-8 md:p-12 bg-black/10 backdrop-blur-sm border border-white/10">
                    <span className="block text-white text-xs font-bold tracking-[0.2em] mb-4 uppercase drop-shadow-md">
                        New Arrivals
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white drop-shadow-lg">
                        AUTUMN
                        <br />
                        COLLECTION
                    </h1>
                    <p className="text-white text-sm md:text-base max-w-md mb-10 leading-relaxed font-[family-name:var(--font-body)] drop-shadow-md">
                        Discover the new monochromatic aesthetic for the upcoming season.
                        Sharp lines, premium wools, and an uncompromising dedication to
                        form.
                    </p>
                    <Link
                        className="inline-flex items-center justify-center h-12 px-8 bg-[--primary] hover:bg-[--primary]/90 text-white text-sm font-bold uppercase tracking-widest transition-all w-fit group shadow-lg rounded-none"
                        href="/lookbook"
                    >
                        Explore Lookbook
                        <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

