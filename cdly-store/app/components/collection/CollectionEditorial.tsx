export default function CollectionEditorial() {
    return (
        <section className="w-full bg-[#004aad] text-white py-32 px-6 reveal-on-scroll border-t border-black">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="md:w-3/5">
                    <span className="block text-white/80 text-sm font-bold tracking-[0.2em] mb-6 uppercase">
                        New Editorial
                    </span>
                    <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8 uppercase">
                        The Architecture<br />of Silence
                    </h2>
                    <p className="text-white/90 font-[family-name:var(--font-body)] text-xl max-w-xl leading-relaxed">
                        Exploring the intersection of brutalist forms and soft tailoring. A study in reduction, form, and the absence of noise.
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                    <a
                        className="inline-flex items-center justify-center h-20 px-16 bg-transparent border border-white text-white text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#004aad] rounded-none"
                        href="#"
                    >
                        View Editorial
                    </a>
                </div>
            </div>
        </section>
    );
}
