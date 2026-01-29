export default function InnovationHero() {
    return (
        <section className="flex flex-col lg:flex-row w-full min-h-[90vh] border-b border-black">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-black relative overflow-hidden group">
                <img
                    alt="Macro Fabric Texture"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq4_fqJyhv5LPwwHimiLB0TI89gAKvHWvpEUezxCt-bqXbNTB28-kiF65BML1_51zl0cmY40IOqvEbTgINsz27lFVk8lErtZ8iRjc-niXof9xlxrR2fFYVoS-MtwRPXBLjhSovh30C3B-NF7gxdtu4boU5H-NnkOhY3TOt5iiB5VX0XxzCkXcUCLl4DD-e1O3a_RQaCfapW9kcr8kphiY6lzl8oOLX6dXiRyryd2NPDQ4XJro9k9goe281foJtaOLM_WB2dxxpM0M"
                />
                <div className="absolute bottom-6 left-6 text-white/60 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest z-10">
                    Fig 1.1 — Micro-Weave Density
                </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-24 bg-white relative">
                <div className="absolute top-6 right-6 font-[family-name:var(--font-mono)] text-xs text-[#004aad] uppercase tracking-widest animate-pulse">
                    ● Live Lab Feed
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[#004aad] text-xs uppercase tracking-widest mb-6 border-l-2 border-[#004aad] pl-3">
                    Research &amp; Development
                </span>
                <h1 className="text-7xl md:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter mb-10 text-[#111318]">
                    FUTURE
                    <br />
                    OF FORM
                </h1>
                <p className="font-[family-name:var(--font-mono)] text-sm md:text-base max-w-md leading-relaxed text-gray-600 mb-12">
                    Pioneering the intersection of algorithmic design and textile
                    engineering. Our laboratory focuses on molecular-level material
                    restructuring to create garments that adapt, endure, and protect.
                </p>
                <div className="grid grid-cols-2 gap-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest border-t border-gray-200 pt-8">
                    <div>
                        <span className="block text-gray-400 mb-1">Status</span>
                        <span className="text-[#111318] font-bold">Experimental</span>
                    </div>
                    <div>
                        <span className="block text-gray-400 mb-1">Lab ID</span>
                        <span className="text-[#004aad] font-bold">#A-0992</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
