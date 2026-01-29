export default function Editorial() {
    return (
        <section className="w-full bg-[#144bb8] text-white py-24 px-6 reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <span className="block text-white/60 text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                        Editorial • Volume 04
                    </span>
                    <blockquote className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
                        &quot;Fashion is the armor to survive the reality of everyday life.&quot;
                    </blockquote>
                    <p className="text-white/80 font-[family-name:var(--font-mono)] text-sm uppercase">
                        — Bill Cunningham
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                    <a
                        className="inline-flex items-center justify-center h-14 px-10 border border-white text-white text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-[--primary] rounded-none"
                        href="/journal"
                    >
                        Read the Story
                    </a>
                </div>
            </div>
        </section>
    );
}
