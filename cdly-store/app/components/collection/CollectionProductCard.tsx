interface CollectionProductCardProps {
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    isNew?: boolean;
}

export default function CollectionProductCard({
    name,
    category,
    price,
    imageUrl,
    isNew = false,
}: CollectionProductCardProps) {
    return (
        <div className="group bg-white p-4 flex flex-col gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-black/10">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                {isNew && (
                    <div className="absolute top-0 right-0 bg-[#004aad] text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        New
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold uppercase tracking-wide text-[#111318] group-hover:text-[#004aad] transition-colors">
                        {name}
                    </h4>
                    <span className="text-sm font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                        {price}
                    </span>
                </div>
                <p className="text-[10px] text-gray-500 font-[family-name:var(--font-mono)] uppercase">
                    {category}
                </p>
            </div>
        </div>
    );
}
