import CheckoutInput from "./CheckoutInput";

interface UpiPaymentSectionProps {
    upiId: string;
    onUpiIdChange: (value: string) => void;
    upiError?: string;
}

export default function UpiPaymentSection({
    upiId,
    onUpiIdChange,
    upiError,
}: UpiPaymentSectionProps) {
    return (
        <section>
            <div className="flex justify-between items-baseline mb-8 border-b border-black pb-2">
                <h2 className="text-lg font-bold uppercase tracking-widest text-[#111318]">
                    03. Payment
                </h2>
                <div className="flex gap-2 opacity-70">
                    <span className="text-xs border border-gray-300 px-1.5 py-0.5 text-[#111318]">
                        UPI
                    </span>
                    <span className="text-xs border border-gray-300 px-1.5 py-0.5 text-[#111318]">
                        GPay
                    </span>
                    <span className="text-xs border border-gray-300 px-1.5 py-0.5 text-[#111318]">
                        PhonePe
                    </span>
                </div>
            </div>

            <div className="border border-black p-6 space-y-6">
                {/* UPI Option - Selected */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="radio"
                            id="upi"
                            name="payment-method"
                            checked
                            readOnly
                            className="w-4 h-4 border-black text-[#004aad] focus:ring-0 cursor-pointer"
                        />
                        <label
                            htmlFor="upi"
                            className="text-sm font-bold uppercase tracking-wider cursor-pointer text-[#111318]"
                        >
                            UPI Payment
                        </label>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-lg">
                        account_balance
                    </span>
                </div>

                {/* UPI ID Input */}
                <div className="space-y-6 pt-2">
                    <CheckoutInput
                        id="upi-id"
                        label="UPI ID"
                        type="text"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={onUpiIdChange}
                        error={upiError}
                        required
                    />

                    <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100">
                        <span className="material-symbols-outlined text-[#004aad] text-lg">
                            info
                        </span>
                        <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-500 leading-relaxed">
                            Enter your UPI ID (e.g., name@okaxis, name@ybl, name@paytm).
                            You will receive a payment request on your UPI app.
                        </p>
                    </div>
                </div>
            </div>

            {/* COD Option - Disabled */}
            <div className="mt-4 border border-gray-200 p-6 opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                    <input
                        type="radio"
                        id="cod"
                        name="payment-method"
                        disabled
                        className="w-4 h-4 border-black text-[#004aad] focus:ring-0 cursor-not-allowed"
                    />
                    <label
                        htmlFor="cod"
                        className="text-sm font-bold uppercase tracking-wider cursor-not-allowed text-gray-400"
                    >
                        Cash on Delivery
                        <span className="text-[10px] font-normal ml-2">(Coming Soon)</span>
                    </label>
                </div>
            </div>
        </section>
    );
}
