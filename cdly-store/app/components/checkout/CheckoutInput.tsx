interface CheckoutInputProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    className?: string;
}

export default function CheckoutInput({
    id,
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    error,
    required = false,
    className = "",
}: CheckoutInputProps) {
    return (
        <div className={`group ${className}`}>
            <label
                htmlFor={id}
                className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[#004aad] transition-colors"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full bg-transparent border-b ${error ? "border-red-500" : "border-black"
                    } px-0 py-3 text-sm font-medium focus:ring-0 focus:border-[#004aad] placeholder:text-gray-300 rounded-none transition-colors text-[#111318]`}
            />
            {error && (
                <p className="mt-1 text-xs text-red-500 font-[family-name:var(--font-mono)]">
                    {error}
                </p>
            )}
        </div>
    );
}
