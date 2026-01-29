import CheckoutInput from "./CheckoutInput";

interface ContactFormProps {
    email: string;
    onEmailChange: (value: string) => void;
    emailError?: string;
    subscribeNewsletter: boolean;
    onSubscribeChange: (value: boolean) => void;
}

export default function ContactForm({
    email,
    onEmailChange,
    emailError,
    subscribeNewsletter,
    onSubscribeChange,
}: ContactFormProps) {
    return (
        <section>
            <div className="flex justify-between items-baseline mb-8 border-b border-black pb-2">
                <h2 className="text-lg font-bold uppercase tracking-widest text-[#111318]">
                    01. Contact
                </h2>
                <div className="text-xs font-[family-name:var(--font-mono)] text-gray-500">
                    Log in for faster checkout
                </div>
            </div>
            <div className="space-y-6">
                <CheckoutInput
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={onEmailChange}
                    error={emailError}
                    required
                />
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="newsletter"
                        checked={subscribeNewsletter}
                        onChange={(e) => onSubscribeChange(e.target.checked)}
                        className="w-4 h-4 border-black text-[#004aad] focus:ring-0 rounded-none transition-colors cursor-pointer"
                    />
                    <label
                        htmlFor="newsletter"
                        className="text-xs font-medium uppercase tracking-wide cursor-pointer select-none text-[#111318]"
                    >
                        Subscribe to editorial updates & exclusive drops
                    </label>
                </div>
            </div>
        </section>
    );
}
