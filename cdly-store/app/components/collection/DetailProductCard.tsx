interface DetailProductCardProps {
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    isArchive?: boolean;
    offset?: boolean;
}

export default function DetailProductCard({
    name,
    category,
    price,
    imageUrl,
    isArchive = false,
    offset = false,
}: DetailProductCardProps) {
    return (
        <div
            className={`group flex flex-col gap-3 cursor-pointer reveal-on-scroll ${offset ? "lg:mt-16" : ""
                }`}
        >
            <div className="relative w-full aspect-[3/4] border border-black overflow-hidden bg-gray-100">
                <img
                    alt={name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isArchive ? "grayscale" : ""
                        }`}
                    src={imageUrl}
                />
                <div className="absolute inset-0 bg-[#004aad]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white text-xs font-bold uppercase tracking-[0.2em] border border-white px-8 py-4 hover:bg-white hover:text-[#004aad] transition-colors">
                        Quick Add
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-start pt-2">
                <div className="flex flex-col">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#111318] group-hover:text-[#004aad] transition-colors">
                        {name}
                    </h3>
                    <span className="text-[10px] font-[family-name:var(--font-mono)] text-gray-500 uppercase mt-1">
                        {category}
                    </span>
                </div>
                <span className="text-xs font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                    {price}
                </span>
            </div>
        </div>
    );
}
