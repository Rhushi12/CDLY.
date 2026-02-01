import Link from "next/link";

interface ProductCardProps {
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    imageAlt: string;
    slug: string;
    isNew?: boolean;
    className?: string;
}

export default function ProductCard({
    name,
    category,
    price,
    imageUrl,
    imageAlt,
    slug,
    isNew = false,
    className = "",
}: ProductCardProps) {
    return (
        <Link
            href={`/products/${slug}`}
            className={`group flex flex-col gap-4 cursor-pointer ${className}`}
        >
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-gray-200 transition-colors group-hover:border-[--primary]">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    data-alt={imageAlt}
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                {isNew && (
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider border border-black">
                        New
                    </div>
                )}
                {/* Prevent navigation when clicking 'Add to Cart' if desired, but for now it will just link to PDP which is fine */}
                <button className="absolute bottom-0 left-0 w-full bg-white/90 py-4 text-center text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[--primary] hover:text-white border-t border-black">
                    Add to Cart
                </button>
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-base font-bold uppercase leading-none mb-1 text-[#111318] group-hover:text-[--primary] transition-colors">
                        {name}
                    </h3>
                    <p className="text-gray-500 text-xs font-[family-name:var(--font-mono)] uppercase">
                        {category}
                    </p>
                </div>
                <span className="text-base font-medium text-[#111318]">{price}</span>
            </div>
        </Link>
    );
}
