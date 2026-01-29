"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import CartItemList from "../components/cart/CartItemList";
import OrderSummary from "../components/cart/OrderSummary";
import { useCart } from "../context/CartContext";

export default function CartPage() {
    const router = useRouter();
    const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();
    const [removingId, setRemovingId] = useState<string | null>(null);

    const handleQuantityChange = (id: string, quantity: number) => {
        updateQuantity(id, quantity);
    };

    const handleRemove = (id: string) => {
        setRemovingId(id);
        // Delay removal to allow fade-out animation
        setTimeout(() => {
            removeItem(id);
            setRemovingId(null);
        }, 500);
    };

    const handleCheckout = () => {
        // Navigate to checkout page - cart data is shared via CartContext
        router.push("/checkout");
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="w-full min-h-screen pt-12 md:pt-20 pb-40">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
                        {/* Cart Items */}
                        <div className="lg:col-span-8">
                            <header className="border-b border-black pb-8 mb-16">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-[#111318]">
                                    Your Bag{" "}
                                    <span className="align-top text-3xl md:text-4xl text-[#004aad] font-[family-name:var(--font-mono)] ml-2">
                                        ({itemCount})
                                    </span>
                                </h1>
                            </header>

                            <CartItemList
                                items={items}
                                onQuantityChange={handleQuantityChange}
                                onRemove={handleRemove}
                                removingId={removingId}
                            />
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-4 relative">
                            <OrderSummary
                                subtotal={subtotal}
                                itemCount={itemCount}
                                onCheckout={handleCheckout}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="w-full bg-white border-t border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xs font-[family-name:var(--font-mono)] uppercase text-gray-400">
                        © 2024 CDLY Inc. All Rights Reserved.
                    </div>
                    <div className="flex gap-8">
                        <a
                            className="text-xs font-bold uppercase tracking-widest hover:text-[#004aad] transition-colors text-[#111318]"
                            href="#"
                        >
                            Returns
                        </a>
                        <a
                            className="text-xs font-bold uppercase tracking-widest hover:text-[#004aad] transition-colors text-[#111318]"
                            href="#"
                        >
                            Shipping
                        </a>
                        <a
                            className="text-xs font-bold uppercase tracking-widest hover:text-[#004aad] transition-colors text-[#111318]"
                            href="#"
                        >
                            FAQ
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
