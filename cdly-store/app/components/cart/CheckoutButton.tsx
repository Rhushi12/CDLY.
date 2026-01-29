interface CheckoutButtonProps {
    onCheckout: () => void;
    disabled?: boolean;
}

export default function CheckoutButton({
    onCheckout,
    disabled = false,
}: CheckoutButtonProps) {
    return (
        <button
            onClick={onCheckout}
            disabled={disabled}
            className="w-full bg-black text-white h-16 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#004aad] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:shadow-none"
        >
            Proceed to Checkout
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
            </span>
        </button>
    );
}
