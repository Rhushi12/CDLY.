"use client";

import { useState } from "react";

const categories = [
    "View All",
    "Outerwear",
    "Tailoring",
    "Knitwear",
    "Tops",
    "Bottoms",
    "Footwear",
    "Accessories",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface FilterSidebarProps {
    onCategoryChange?: (category: string) => void;
    onSizeChange?: (size: string) => void;
}

export default function FilterSidebar({
    onCategoryChange,
    onSizeChange,
}: FilterSidebarProps) {
    const [activeCategory, setActiveCategory] = useState("View All");
    const [activeSize, setActiveSize] = useState<string | null>(null);

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        onCategoryChange?.(cat);
    };

    const handleSizeClick = (size: string) => {
        const newSize = activeSize === size ? null : size;
        setActiveSize(newSize);
        onSizeChange?.(newSize || "");
    };

    return (
        <aside className="w-full md:w-56 lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-16">
                {/* Category Filter */}
                <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 border-b border-black pb-3 text-[#111318]">
                        Category
                    </h3>
                    <ul className="space-y-4 text-sm font-[family-name:var(--font-mono)] uppercase text-gray-500">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <button
                                    className={`hover:text-[#004aad] transition-colors hover:translate-x-1 duration-300 block text-left ${activeCategory === cat
                                            ? "text-[#111318] font-bold flex items-center gap-2"
                                            : ""
                                        }`}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {activeCategory === cat && (
                                        <span className="w-1.5 h-1.5 bg-[#004aad]" />
                                    )}
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Size Filter */}
                <div>
                    <h3 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 border-b border-black pb-3 text-[#111318]">
                        Size
                    </h3>
                    <div className="grid grid-cols-3 gap-y-4 gap-x-2 text-sm font-[family-name:var(--font-mono)] uppercase text-gray-500">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className={`hover:text-[#004aad] text-left transition-colors ${activeSize === size ? "text-[#004aad] font-bold" : ""
                                    }`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
