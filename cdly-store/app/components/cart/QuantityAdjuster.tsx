interface QuantityAdjusterProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export default function QuantityAdjuster({
    quantity,
    onIncrease,
    onDecrease,
}: QuantityAdjusterProps) {
    return (
        <div className="flex items-center border border-black h-10">
            <button
                onClick={onDecrease}
                className="w-10 h-full flex items-center justify-center hover:bg-black hover:text-white transition-colors text-[#111318]"
                aria-label="Decrease quantity"
            >
                -
            </button>
            <span className="w-12 h-full flex items-center justify-center font-[family-name:var(--font-mono)] text-sm border-x border-black text-[#111318]">
                {quantity}
            </span>
            <button
                onClick={onIncrease}
                className="w-10 h-full flex items-center justify-center hover:bg-black hover:text-white transition-colors text-[#111318]"
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    );
}
