export default function ChapterOrigins() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
            {/* Chapter Marker */}
            <div className="w-full border-t border-[#111318] pt-4 flex justify-between items-start mb-16 lg:mb-24">
                <span className="text-[#004aad] font-[family-name:var(--font-mono)] text-sm tracking-widest">
                    CHAPTER 01
                </span>
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-widest text-gray-400">
                    ORIGINS
                </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
                    <h3 className="text-5xl lg:text-7xl font-bold leading-none tracking-tight text-[#111318]">
                        FORM &amp;
                        <br />
                        VOID
                    </h3>
                    <div className="h-1 w-20 bg-[#004aad]" />
                    <p className="font-serif text-lg lg:text-xl leading-relaxed text-gray-800 text-justify">
                        It began with a single thread and a relentless pursuit of the
                        perfect silhouette. Our journey is not one of excess, but of
                        reduction. We strip away the unnecessary to reveal the essential
                        truth of the garment. In the spaces between the fabric and the skin,
                        a dialogue emerges—silent, yet profound.
                    </p>
                    <p className="font-serif text-lg leading-relaxed text-gray-600 text-justify">
                        The architecture of our design philosophy is rooted in brutalist
                        principles: raw materials exposed, structural honesty, and a
                        rejection of mere decoration.
                    </p>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-8 mt-12 lg:mt-0">
                    <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 relative group">
                        <img
                            alt="Black and white architectural fashion shot of a coat texture"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTtN5bBUBVzsiw1As1z-wsUnzDE5Xh_syNFQYfcpjcvbjxBYhHNANBrlQDQpso-O1YtZEqRSjsB8WXzjUieK7NJl8ulsMK9byDNRdeWADAW6YGPIFIXy2QIVEQd21KnqtJlZZABkuDqPMaSR1nyWfNlaVhgA0kM2GumH8kscGQObA5hTeo8j8fQRdk9RJqvTMChaIwBRvNCJfMlYFEHJmX3K5l_wUxXvZRJEu6kz6YfSVM-ORiUExtL5zW3apKRdOHgcNUz6E-8WA"
                        />
                    </div>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-gray-400 uppercase tracking-widest text-right">
                        Fig 1.1 — The First Sketch
                    </span>
                </div>
            </div>
        </section>
    );
}
