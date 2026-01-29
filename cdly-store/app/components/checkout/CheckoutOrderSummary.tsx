export interface CheckoutItem {
    id: string;
    name: string;
    size: string;
    color: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

interface CheckoutOrderSummaryProps {
    items: CheckoutItem[];
    subtotal: number;
    shipping: number;
    taxes: number;
    total: number;
    onCompletePurchase: () => void;
    isValid: boolean;
}

export default function CheckoutOrderSummary({
    items,
    subtotal,
    shipping,
    taxes,
    total,
    onCompletePurchase,
    isValid,
}: CheckoutOrderSummaryProps) {
    return (
        <aside className="w-full lg:w-5/12 xl:w-1/3 bg-gray-50 lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 border-l border-black/5 flex flex-col">
            <div className="p-6 lg:p-12 flex flex-col h-full">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 pb-4 border-b border-black text-[#111318]">
                    Order Summary
                </h3>

                {/* Items */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-6 mb-8 scrollbar-hide">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                            <div className="relative w-20 aspect-[3/4] border border-gray-200 overflow-hidden bg-white">
                                <img
                                    alt={item.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    src={item.imageUrl}
                                />
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#004aad] text-white flex items-center justify-center text-[10px] font-[family-name:var(--font-mono)] font-bold">
                                    {item.quantity}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#111318]">
                                        {item.name}
                                    </h4>
                                    <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-500 mt-1">
                                        Size: {item.size} / Color: {item.color}
                                    </p>
                                </div>
                                <div className="text-sm font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                                    ${item.price.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Totals */}
                <div className="border-t border-black pt-6 space-y-3 mb-8">
                    <div className="flex justify-between text-xs uppercase tracking-wider">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between text-xs uppercase tracking-wider">
                        <span className="text-gray-500">Shipping</span>
                        <span
                            className={`font-[family-name:var(--font-mono)] font-medium ${shipping === 0 ? "text-[#004aad]" : "text-[#111318]"
                                }`}
                        >
                            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                    </div>
                    <div className="flex justify-between text-xs uppercase tracking-wider">
                        <span className="text-gray-500">Taxes</span>
                        <span className="font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                            ${taxes.toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Total & CTA */}
                <div className="mt-auto">
                    <div className="flex justify-between items-end border-t border-black pt-6 mb-8">
                        <span className="text-sm font-bold uppercase tracking-widest text-[#111318]">
                            Total
                        </span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase">
                                USD
                            </span>
                            <span className="text-2xl font-black tracking-tight text-[#111318]">
                                ${total.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={onCompletePurchase}
                        disabled={!isValid}
                        className="w-full bg-black hover:bg-[#004aad] text-white py-5 text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-none flex justify-center items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
                    >
                        <span>Complete Purchase</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>

                    <div className="mt-4 text-center">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">lock</span>
                            Secure Encrypted Checkout
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
