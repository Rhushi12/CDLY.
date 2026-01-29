"use client";

import { useState } from "react";
import ContactForm from "../components/checkout/ContactForm";
import ShippingForm, { ShippingAddress } from "../components/checkout/ShippingForm";
import UpiPaymentSection from "../components/checkout/UpiPaymentSection";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
    const { items, subtotal, clearCart } = useCart();

    // Form state
    const [email, setEmail] = useState("");
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
        phone: "",
    });
    const [upiId, setUpiId] = useState("");

    // Error state
    const [emailError, setEmailError] = useState<string | undefined>();
    const [addressErrors, setAddressErrors] = useState<Partial<Record<keyof ShippingAddress, string>>>({});
    const [upiError, setUpiError] = useState<string | undefined>();
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

    // Calculate totals from cart context
    const shipping = subtotal >= 500 ? 0 : 25;
    const taxes = Math.round(subtotal * 0.08 * 100) / 100; // 8% tax
    const total = subtotal + shipping + taxes;

    // Convert cart items to checkout format
    const checkoutItems = items.map((item) => ({
        id: item.id,
        name: item.name,
        size: item.size,
        color: item.color,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.imageUrl,
    }));

    // Validation
    const validateEmail = (value: string): string | undefined => {
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        return undefined;
    };

    const validateAddress = (): Partial<Record<keyof ShippingAddress, string>> => {
        const errors: Partial<Record<keyof ShippingAddress, string>> = {};
        if (!shippingAddress.firstName) errors.firstName = "First name is required";
        if (!shippingAddress.lastName) errors.lastName = "Last name is required";
        if (!shippingAddress.address) errors.address = "Address is required";
        if (!shippingAddress.city) errors.city = "City is required";
        if (!shippingAddress.postalCode) errors.postalCode = "Postal code is required";
        if (!shippingAddress.phone) errors.phone = "Phone is required";
        return errors;
    };

    const validateUpiId = (value: string): string | undefined => {
        if (!value) return "UPI ID is required";
        if (!/^[a-zA-Z0-9.\-_]+@[a-zA-Z]+$/.test(value)) return "Invalid UPI ID format (e.g., name@upi)";
        return undefined;
    };

    const isFormValid = (): boolean => {
        const emailErr = validateEmail(email);
        const addrErrors = validateAddress();
        const upiErr = validateUpiId(upiId);
        return !emailErr && Object.keys(addrErrors).length === 0 && !upiErr && items.length > 0;
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
        if (hasAttemptedSubmit) {
            setEmailError(validateEmail(value));
        }
    };

    const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
        setShippingAddress((prev) => ({ ...prev, [field]: value }));
        if (hasAttemptedSubmit) {
            setAddressErrors((prev) => {
                const newErrors = { ...prev };
                if (value) {
                    delete newErrors[field];
                } else if (field !== "apartment") {
                    newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
                }
                return newErrors;
            });
        }
    };

    const handleUpiIdChange = (value: string) => {
        setUpiId(value);
        if (hasAttemptedSubmit) {
            setUpiError(validateUpiId(value));
        }
    };

    const handleCompletePurchase = () => {
        setHasAttemptedSubmit(true);

        // Run validation
        const emailErr = validateEmail(email);
        const addrErrors = validateAddress();
        const upiErr = validateUpiId(upiId);

        setEmailError(emailErr);
        setAddressErrors(addrErrors);
        setUpiError(upiErr);

        if (emailErr || Object.keys(addrErrors).length > 0 || upiErr) {
            return;
        }

        // In production, this would redirect to Shopify checkout webUrl:
        // window.location.href = checkout.webUrl;

        // For now, log the order and clear cart
        console.log("Order placed:", {
            email,
            subscribeNewsletter,
            shippingAddress,
            items: checkoutItems,
            total,
        });

        // Clear cart after successful checkout
        clearCart();

        // Redirect to a success page or home
        window.location.href = "/?checkout=success";
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-black h-16 flex items-center px-6 lg:px-12">
                <a
                    href="/"
                    className="text-2xl font-black tracking-tighter uppercase text-[#111318] hover:text-[#004aad] transition-colors"
                >
                    CDLY
                </a>
                <div className="ml-auto flex items-center gap-4">
                    <a
                        href="/cart"
                        className="text-xs font-bold uppercase tracking-widest text-[#111318] hover:text-[#004aad]"
                    >
                        Return to Cart
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-16 min-h-screen flex flex-col lg:flex-row">
                {/* Form Section */}
                <main className="w-full lg:w-7/12 xl:w-2/3 border-r border-gray-200 lg:min-h-[calc(100vh-64px)] bg-white relative z-10">
                    <div className="max-w-3xl mx-auto px-6 py-12 lg:p-16">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-3 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest mb-12 text-gray-400">
                            <span className="text-[#111318] font-bold">Information</span>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <span>Shipping</span>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <span>Payment</span>
                        </nav>

                        {items.length === 0 ? (
                            <div className="py-24 text-center">
                                <span className="material-symbols-outlined text-6xl text-gray-200 mb-6">
                                    shopping_bag
                                </span>
                                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111318] mb-4">
                                    Your Cart is Empty
                                </h3>
                                <p className="text-gray-500 font-[family-name:var(--font-body)] mb-8">
                                    Add some items to your cart before checking out.
                                </p>
                                <a
                                    href="/collections"
                                    className="inline-block px-12 py-4 border border-black text-xs font-bold uppercase tracking-[0.2em] text-[#111318] hover:bg-black hover:text-white transition-colors"
                                >
                                    Start Shopping
                                </a>
                            </div>
                        ) : (
                            <form className="flex flex-col gap-16" onSubmit={(e) => e.preventDefault()}>
                                <ContactForm
                                    email={email}
                                    onEmailChange={handleEmailChange}
                                    emailError={emailError}
                                    subscribeNewsletter={subscribeNewsletter}
                                    onSubscribeChange={setSubscribeNewsletter}
                                />

                                <ShippingForm
                                    address={shippingAddress}
                                    onChange={handleAddressChange}
                                    errors={addressErrors}
                                />

                                <UpiPaymentSection
                                    upiId={upiId}
                                    onUpiIdChange={handleUpiIdChange}
                                    upiError={upiError}
                                />
                            </form>
                        )}

                        {/* Policy Links */}
                        <div className="mt-16 pt-8 border-t border-gray-100 flex gap-6 text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-400">
                            <a href="#" className="hover:text-[#111318] underline decoration-1 underline-offset-2">
                                Refund Policy
                            </a>
                            <a href="#" className="hover:text-[#111318] underline decoration-1 underline-offset-2">
                                Shipping Policy
                            </a>
                            <a href="#" className="hover:text-[#111318] underline decoration-1 underline-offset-2">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </main>

                {/* Order Summary Sidebar */}
                <CheckoutOrderSummary
                    items={checkoutItems}
                    subtotal={subtotal}
                    shipping={shipping}
                    taxes={taxes}
                    total={total}
                    onCompletePurchase={handleCompletePurchase}
                    isValid={isFormValid()}
                />
            </div>
        </div>
    );
}
