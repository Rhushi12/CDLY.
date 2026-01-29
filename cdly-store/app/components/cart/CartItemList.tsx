import CartItemComponent from "./CartItem";
import { CartItem } from "../../context/CartContext";

interface CartItemListProps {
    items: CartItem[];
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
    removingId: string | null;
}

export default function CartItemList({
    items,
    onQuantityChange,
    onRemove,
    removingId,
}: CartItemListProps) {
    if (items.length === 0) {
        return (
            <div className="py-24 text-center">
                <span className="material-symbols-outlined text-6xl text-gray-200 mb-6">
                    shopping_bag
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111318] mb-4">
                    Your Bag is Empty
                </h3>
                <p className="text-gray-500 font-[family-name:var(--font-body)] mb-8">
                    Looks like you haven&apos;t added anything yet.
                </p>
                <a
                    href="/collections"
                    className="inline-block px-12 py-4 border border-black text-xs font-bold uppercase tracking-[0.2em] text-[#111318] hover:bg-black hover:text-white transition-colors"
                >
                    Start Shopping
                </a>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-0">
            {items.map((item) => (
                <CartItemComponent
                    key={item.id}
                    item={item}
                    onQuantityChange={onQuantityChange}
                    onRemove={onRemove}
                    isRemoving={removingId === item.id}
                />
            ))}
        </div>
    );
}
