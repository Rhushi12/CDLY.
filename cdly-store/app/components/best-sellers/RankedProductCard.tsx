import Link from "next/link";

interface RankedProductCardProps {
    rank: number;
    name: string;
    category: string;
    price: string;
    pairWith: string;
    imageUrl: string;
    slug: string;
}

export default function RankedProductCard({
    rank,
    name,
    category,
    price,
    pairWith,
    imageUrl,
    slug,
}: RankedProductCardProps) {
    const rankString = rank.toString().padStart(2, "0");

    return (
        <Link href={`/products/${slug}`} className="group relative cursor-pointer block">
            <div className="aspect-[3/4] w-full border border-black overflow-hidden bg-gray-50 relative">
                {/* Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                {/* Rank Badge */}
                <div className="absolute top-0 right-0 border-l border-b border-black bg-white px-2 py-1 z-10">
                    <span className="text-[10px] font-[family-name:var(--font-mono)] font-bold tracking-tight text-[#111318]">
                        RANK {rankString}
                    </span>
                </div>
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-[#004aad]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold tracking-[0.2em] font-[family-name:var(--font-mono)]">
                        QUICK ADD
                    </span>
                </div>
            </div>
            {/* Info */}
            <div className="mt-3 flex justify-between items-start">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest group-hover:text-[#004aad] transition-colors text-[#111318]">
                        {name}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-[family-name:var(--font-mono)] uppercase mt-0.5">
                        {category}
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-xs font-[family-name:var(--font-mono)] font-medium block text-[#111318]">
                        {price}
                    </span>
                    <span className="text-[9px] text-gray-400 font-[family-name:var(--font-mono)] uppercase mt-1 block">
                        Pair with {pairWith}
                    </span>
                </div>
            </div>
        </Link>
    );
}
