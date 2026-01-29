import CheckoutButton from "./CheckoutButton";

interface OrderSummaryProps {
    subtotal: number;
    itemCount: number;
    onCheckout: () => void;
}

export default function OrderSummary({
    subtotal,
    itemCount,
    onCheckout,
}: OrderSummaryProps) {
    const shipping = subtotal >= 1500 ? 0 : 150;
    const freeShipping = shipping === 0;

    return (
        <div className="sticky top-32 border border-black p-8 md:p-10 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-black">
                <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[#111318]">
                    Summary
                </h2>
                <span className="material-symbols-outlined text-[#111318]">
                    receipt_long
                </span>
            </div>

            {/* Line Items */}
            <div className="space-y-4 mb-10">
                <div className="flex justify-between items-baseline font-[family-name:var(--font-mono)] text-sm uppercase">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold tracking-wider text-[#111318]">
                        ${subtotal.toLocaleString()}.00
                    </span>
                </div>
                <div className="flex justify-between items-baseline font-[family-name:var(--font-mono)] text-sm uppercase">
                    <span className="text-gray-500">Shipping</span>
                    <span
                        className={`font-bold ${freeShipping ? "text-[#004aad]" : "text-[#111318]"
                            }`}
                    >
                        {freeShipping ? "Free" : `$${shipping}`}
                    </span>
                </div>
                <div className="flex justify-between items-baseline font-[family-name:var(--font-mono)] text-sm uppercase">
                    <span className="text-gray-500">Taxes</span>
                    <span className="text-gray-400">Calculated at checkout</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-end mb-10 pt-6 border-t border-gray-100">
                <span className="text-xl font-bold uppercase tracking-wide text-[#111318]">
                    Total
                </span>
                <span className="text-4xl font-black tracking-tighter leading-none text-[#111318]">
                    ${(subtotal + shipping).toLocaleString()}
                </span>
            </div>

            {/* Checkout Button */}
            <CheckoutButton onCheckout={onCheckout} disabled={itemCount === 0} />

            {/* Continue Shopping */}
            <div className="mt-8 text-center">
                <a
                    className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#004aad] border-b border-transparent hover:border-[#004aad] transition-all"
                    href="/collections"
                >
                    Continue Shopping
                </a>
            </div>

            {/* Security Badge */}
            <div className="mt-12 pt-8 border-t border-dashed border-gray-300">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-gray-400">
                        verified_user
                    </span>
                    <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-500 leading-relaxed">
                        Secure checkout powered by Stripe. All transactions are encrypted.
                        30-day return policy on all archive items.
                    </p>
                </div>
            </div>
        </div>
    );
}
