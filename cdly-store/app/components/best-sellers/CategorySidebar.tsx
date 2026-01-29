"use client";

import { useState } from "react";

const categories = [
    "All Items",
    "Outerwear",
    "Tailoring",
    "Knitwear",
    "Footwear",
    "Accessories",
];

export default function CategorySidebar() {
    const [activeCategory, setActiveCategory] = useState("All Items");
    const [inStock, setInStock] = useState(false);
    const [preOrder, setPreOrder] = useState(false);

    return (
        <aside className="w-full lg:w-1/5 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] pt-[100px] pb-12 lg:pb-0 pr-6">
            <div className="flex flex-col gap-8">
                {/* Category */}
                <div>
                    <h3 className="text-xs font-[family-name:var(--font-mono)] text-gray-400 uppercase mb-6">
                        Category
                    </h3>
                    <nav className="flex flex-col gap-3 text-xs font-bold uppercase tracking-widest">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`flex items-center gap-2 text-left transition-colors ${activeCategory === cat
                                        ? "text-[#004aad]"
                                        : "text-[#111318] hover:text-[#004aad]"
                                    }`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                <span
                                    className={`w-1 h-1 transition-colors ${activeCategory === cat ? "bg-[#004aad]" : "bg-transparent"
                                        }`}
                                />
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Filters */}
                <div className="hidden lg:block pt-12 border-t border-gray-100">
                    <h3 className="text-xs font-[family-name:var(--font-mono)] text-gray-400 uppercase mb-6">
                        Filter
                    </h3>
                    <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-widest">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={inStock}
                                onChange={(e) => setInStock(e.target.checked)}
                                className="w-3 h-3 border-black text-[#004aad] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                            />
                            <span className="group-hover:text-[#004aad] transition-colors">
                                In Stock
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={preOrder}
                                onChange={(e) => setPreOrder(e.target.checked)}
                                className="w-3 h-3 border-black text-[#004aad] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                            />
                            <span className="group-hover:text-[#004aad] transition-colors">
                                Pre-Order
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
}
