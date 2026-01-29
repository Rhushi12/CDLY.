export default function FeatureMarquee() {
    return (
        <div className="w-full border-b border-gray-200 overflow-hidden py-4 bg-white">
            <div className="whitespace-nowrap flex gap-8 items-center animate-marquee">
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[--primary]">
                    Free Worldwide Shipping
                </span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#111318]">
                    New Editorial: The Grey Scale
                </span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[--primary]">
                    Limited Edition Drops
                </span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#111318]">
                    Sustainable Materials
                </span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[--primary]">
                    Free Worldwide Shipping
                </span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#111318]">
                    New Editorial: The Grey Scale
                </span>
            </div>
        </div>
    );
}
