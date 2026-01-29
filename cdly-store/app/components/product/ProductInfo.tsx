interface ProductInfoProps {
    breadcrumbs: string[];
    title: string[];
    price: string;
    description: string;
}

export default function ProductInfo({
    breadcrumbs,
    title,
    price,
    description,
}: ProductInfoProps) {
    return (
        <div className="mb-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-3 mb-8">
                {breadcrumbs.map((crumb, index) => (
                    <span key={index} className="flex items-center gap-3">
                        <span
                            className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest ${index === breadcrumbs.length - 1
                                    ? "text-[#111318]"
                                    : "text-gray-400"
                                }`}
                        >
                            {crumb}
                        </span>
                        {index < breadcrumbs.length - 1 && (
                            <span className="text-[10px] text-gray-300">/</span>
                        )}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8 text-[#111318]">
                {title.map((line, index) => (
                    <span key={index}>
                        {line}
                        {index < title.length - 1 && <br />}
                    </span>
                ))}
            </h1>

            {/* Price */}
            <div className="text-2xl font-[family-name:var(--font-mono)] font-medium text-[#111318] mb-8">
                {price}
            </div>

            {/* Description */}
            <div className="font-[family-name:var(--font-body)] text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                <p>{description}</p>
            </div>
        </div>
    );
}
