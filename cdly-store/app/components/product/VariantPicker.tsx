"use client";

import { useState } from "react";

interface VariantPickerProps {
    sizes: string[];
    selectedSize: string;
    onSizeChange: (size: string) => void;
}

export default function VariantPicker({
    sizes,
    selectedSize,
    onSizeChange,
}: VariantPickerProps) {
    return (
        <div className="mb-10">
            <div className="flex justify-between items-baseline mb-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#111318]">
                    Size
                </label>
                <button className="text-[10px] font-[family-name:var(--font-mono)] uppercase underline hover:text-[#004aad] text-[#111318]">
                    Size Guide
                </button>
            </div>
            <div className="flex">
                {sizes.map((size, index) => (
                    <button
                        key={size}
                        onClick={() => onSizeChange(size)}
                        className={`w-16 h-12 border border-black text-sm font-[family-name:var(--font-mono)] uppercase flex items-center justify-center transition-colors ${index < sizes.length - 1 ? "-mr-px" : ""
                            } relative z-10 ${selectedSize === size
                                ? "bg-[#111318] text-white z-20"
                                : "text-[#111318] hover:bg-[#111318] hover:text-white"
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}
