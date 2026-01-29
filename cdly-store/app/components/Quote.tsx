export default function Quote() {
    return (
        <section className="w-full border-t border-gray-200 bg-white reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-10 md:p-24 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center min-h-[500px]">
                    <span className="material-symbols-outlined text-4xl mb-8 text-[#111318]">
                        format_quote
                    </span>
                    <blockquote className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-[#111318]">
                        &quot;Eliminate the unnecessary so that the necessary may speak.&quot;
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="h-px w-12 bg-black" />
                        <cite className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 not-italic">
                            Design Principle No. 1
                        </cite>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center min-h-[500px]">
                    <span className="block text-gray-400 text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                        Our Philosophy
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-[#111318]">
                        The Discipline of Reduction
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-[family-name:var(--font-body)] leading-relaxed mb-12">
                        In a world of noise, we choose silence. Our design process is one of
                        relentless subtraction, removing every superfluous detail until only
                        the pure form remains. We believe that true luxury lies not in
                        ornamentation, but in the precision of the cut, the integrity of the
                        material, and the clarity of the silhouette. We don&apos;t just make
                        clothes; we engineer a quiet confidence for those who wear them.
                    </p>
                    <div className="grid grid-cols-2 gap-12 border-t border-gray-100 pt-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-bold font-[family-name:var(--font-display)] text-[#111318]">
                                100%
                            </span>
                            <span className="text-xs font-[family-name:var(--font-mono)] uppercase text-gray-400 tracking-wider">
                                Natural Fibers
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-bold font-[family-name:var(--font-display)] text-[#111318]">
                                Zero
                            </span>
                            <span className="text-xs font-[family-name:var(--font-mono)] uppercase text-gray-400 tracking-wider">
                                Synthetic Blends
                            </span>
                        </div>
                    </div>
                    <div className="mt-12">
                        <a
                            className="inline-block text-sm font-bold uppercase tracking-widest border-b border-black pb-1 text-[#111318] hover:text-gray-500 hover:border-gray-500 transition-colors"
                            href="#"
                        >
                            Read The Manifesto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
