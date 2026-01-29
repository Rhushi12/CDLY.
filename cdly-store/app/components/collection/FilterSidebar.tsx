const categories = [
    { name: "View All", active: true },
    { name: "Outerwear", active: false },
    { name: "Tailoring", active: false },
    { name: "Knitwear", active: false },
    { name: "Tops & Shirts", active: false },
    { name: "Bottoms", active: false },
    { name: "Footwear", active: false },
    { name: "Accessories", active: false },
];

const sizes = [
    { name: "XS", available: true },
    { name: "S", available: true },
    { name: "M", available: true },
    { name: "L", available: false },
    { name: "XL", available: true },
];

const colors = [
    { name: "Black", color: "#000000" },
    { name: "White", color: "#ffffff" },
    { name: "Grey", color: "#9ca3af" },
    { name: "Klein", color: "#004aad" },
];

export default function FilterSidebar() {
    return (
        <aside className="w-full md:w-48 lg:w-56 flex-shrink-0 md:sticky md:top-32 h-fit z-30 bg-white">
            {/* Mobile Toggle */}
            <div className="md:hidden flex justify-between items-center mb-8 border-b border-black pb-4 cursor-pointer">
                <span className="font-bold uppercase tracking-widest text-sm text-[#111318]">Filters</span>
                <span className="material-symbols-outlined text-[#111318]">add</span>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex flex-col gap-12">
                {/* Category */}
                <div className="reveal-on-scroll">
                    <h3 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-gray-400">
                        Category
                    </h3>
                    <ul className="flex flex-col gap-3 text-[11px] uppercase font-bold tracking-widest">
                        {categories.map((category) => (
                            <li
                                key={category.name}
                                className={`cursor-pointer transition-colors ${category.active
                                        ? "text-[#004aad] flex items-center gap-2"
                                        : "hover:text-[#004aad] text-[#111318]"
                                    }`}
                            >
                                {category.active && (
                                    <span className="w-1 h-1 bg-[#004aad] rounded-full" />
                                )}
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Size */}
                <div className="reveal-on-scroll">
                    <h3 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-gray-400">
                        Size
                    </h3>
                    <ul className="grid grid-cols-4 gap-2 text-[11px] uppercase font-bold tracking-widest">
                        {sizes.map((size) => (
                            <li
                                key={size.name}
                                className={
                                    size.available
                                        ? "hover:text-[#004aad] cursor-pointer transition-colors text-[#111318]"
                                        : "text-gray-300 line-through cursor-not-allowed"
                                }
                            >
                                {size.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Color */}
                <div className="reveal-on-scroll">
                    <h3 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-gray-400">
                        Color
                    </h3>
                    <ul className="flex flex-col gap-3 text-[11px] uppercase font-bold tracking-widest">
                        {colors.map((color) => (
                            <li
                                key={color.name}
                                className="flex items-center gap-3 hover:text-[#004aad] cursor-pointer transition-colors text-[#111318]"
                            >
                                <span
                                    className="w-3 h-3 border border-gray-200"
                                    style={{ backgroundColor: color.color }}
                                />
                                {color.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
