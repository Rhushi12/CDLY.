interface ATCButtonProps {
    onAddToCart: () => void;
    inStock: boolean;
}

export default function ATCButton({ onAddToCart, inStock }: ATCButtonProps) {
    return (
        <div className="flex flex-col gap-4 mt-auto">
            <button
                onClick={onAddToCart}
                disabled={!inStock}
                className="w-full h-14 bg-[#111318] text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Add to Bag
            </button>
            <button className="w-full h-14 bg-[#004aad] text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
                <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
                    styler
                </span>
                Styling Advice
            </button>
        </div>
    );
}
