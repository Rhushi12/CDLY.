import QuantityAdjuster from "./QuantityAdjuster";

export interface CartItemData {
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    sku: string;
    imageUrl: string;
    quantity: number;
    href: string;
}

interface CartItemProps {
    item: CartItemData;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
    isRemoving?: boolean;
}

export default function CartItem({
    item,
    onQuantityChange,
    onRemove,
    isRemoving = false,
}: CartItemProps) {
    return (
        <div
            className={`group flex flex-col md:flex-row gap-8 py-12 border-b border-gray-200 hover:bg-gray-50 transition-all duration-500 ${isRemoving ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                }`}
        >
            {/* Product Image */}
            <a
                className="block w-full md:w-56 aspect-[3/4] overflow-hidden bg-gray-100 flex-shrink-0 relative border border-transparent group-hover:border-black transition-all"
                href={item.href}
            >
                <img
                    alt={item.name}
                    className="w-full h-full object-cover"
                    src={item.imageUrl}
                />
            </a>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none text-[#111318] group-hover:text-[#004aad] transition-colors">
                            {item.name}
                        </h3>
                        <span className="text-lg font-[family-name:var(--font-mono)] font-bold text-[#111318]">
                            ${item.price.toLocaleString()}
                        </span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-gray-500">
                            Size: <span className="text-[#111318]">{item.size}</span>
                        </p>
                        <p className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-gray-500">
                            Color: <span className="text-[#111318]">{item.color}</span>
                        </p>
                        <p className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-gray-500">
                            ID: <span className="text-[#111318]">{item.sku}</span>
                        </p>
                    </div>
                </div>

                {/* Quantity & Remove */}
                <div className="mt-8 flex flex-row justify-between items-end">
                    <QuantityAdjuster
                        quantity={item.quantity}
                        onIncrease={() => onQuantityChange(item.id, item.quantity + 1)}
                        onDecrease={() =>
                            onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                        }
                    />
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 hover:border-red-500 hover:text-red-500 transition-colors pb-0.5 text-[#111318]"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
