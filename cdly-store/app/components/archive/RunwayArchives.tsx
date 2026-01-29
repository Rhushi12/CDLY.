export default function RunwayArchives() {
    return (
        <section className="py-40 md:py-48 bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Video Section */}
                    <div className="relative bg-black h-[600px] md:h-auto overflow-hidden group">
                        <img
                            alt="Runway Footage"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s] ease-out mix-blend-screen"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYd7qGmV-jsh8uifBtrYwgYlPVNfiM8PatAa_xppBIq8hxTCvl-9LfGG2GlxQ_QN3nWZ1QeHIAUN59prYt10KvigcaARvsxktusuBxRQ8V9WDv9ES__I1eyrNo1WVbvcmT8B4FPRjy3MfUbyory9w0zhCrGVQ38fYGlWNdwcIvsbaUi_VggVY2hECW9WIrIww8xQdayKsLClJgpDljdIZQfCUESHRfujOlxF9X2wOxZLQalDg5xCN5nMx5L27OMJbuShJYWxsGb84"
                        />
                        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-10">
                            <div className="flex justify-between items-start">
                                <span className="bg-red-600 w-3 h-3 animate-pulse" />
                                <span className="text-white text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest border border-white/30 px-2 py-1">
                                    Rec: 00:42:15
                                </span>
                            </div>
                            <div>
                                <h3 className="text-white text-4xl font-black uppercase tracking-tighter mix-blend-difference">
                                    Runway
                                    <br />
                                    Archives
                                </h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white group-hover:scale-110 duration-300">
                                <span className="material-symbols-outlined text-4xl">
                                    play_arrow
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Editorial Content */}
                    <div className="bg-white p-8 md:p-24 flex flex-col justify-center">
                        <span className="text-[#004aad] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                            Archive Spotlight
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.85] tracking-tight mb-8 text-[#111318]">
                            The Evolution
                            <br />
                            of Silhouette
                        </h2>
                        <div className="max-w-md">
                            <p className="uppercase text-sm leading-relaxed mb-6 font-medium text-[#111318]">
                                FROM THE RAZOR-SHARP TAILORING OF THE EARLY 2000S TO THE
                                DECONSTRUCTED FLUIDITY OF THE RECENT DECADE, THE LUXE ARCHIVE
                                DOCUMENTS A RADICAL SHIFT IN VOLUME.
                            </p>
                            <p className="font-[family-name:var(--font-mono)] text-xs uppercase leading-relaxed text-gray-500 mb-8">
                                We examine the pivotal moments where fabric ceased to be mere
                                covering and became architecture. This retrospective traces the
                                lineage of the dropped shoulder, the exaggerated lapel, and the
                                deliberate rejection of traditional symmetry.
                            </p>
                        </div>
                        <a
                            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] group w-max text-[#111318]"
                            href="#"
                        >
                            <span className="border-b border-black pb-1 group-hover:border-[#004aad] group-hover:text-[#004aad] transition-colors">
                                Read Full Editorial
                            </span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:text-[#004aad] transition-all">
                                arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
