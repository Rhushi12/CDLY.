import CheckoutInput from "./CheckoutInput";

export interface ShippingAddress {
    firstName: string;
    lastName: string;
    address: string;
    apartment: string;
    city: string;
    postalCode: string;
    phone: string;
}

interface ShippingFormProps {
    address: ShippingAddress;
    onChange: (field: keyof ShippingAddress, value: string) => void;
    errors: Partial<Record<keyof ShippingAddress, string>>;
}

export default function ShippingForm({
    address,
    onChange,
    errors,
}: ShippingFormProps) {
    return (
        <section>
            <div className="flex justify-between items-baseline mb-8 border-b border-black pb-2">
                <h2 className="text-lg font-bold uppercase tracking-widest text-[#111318]">
                    02. Shipping Address
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <CheckoutInput
                    id="firstName"
                    label="First Name"
                    value={address.firstName}
                    onChange={(v) => onChange("firstName", v)}
                    error={errors.firstName}
                    required
                />
                <CheckoutInput
                    id="lastName"
                    label="Last Name"
                    value={address.lastName}
                    onChange={(v) => onChange("lastName", v)}
                    error={errors.lastName}
                    required
                />
                <CheckoutInput
                    id="address"
                    label="Address"
                    value={address.address}
                    onChange={(v) => onChange("address", v)}
                    error={errors.address}
                    required
                    className="md:col-span-2"
                />
                <CheckoutInput
                    id="apartment"
                    label="Apartment, suite, etc. (optional)"
                    value={address.apartment}
                    onChange={(v) => onChange("apartment", v)}
                    className="md:col-span-2"
                />
                <CheckoutInput
                    id="city"
                    label="City"
                    value={address.city}
                    onChange={(v) => onChange("city", v)}
                    error={errors.city}
                    required
                />
                <CheckoutInput
                    id="postalCode"
                    label="Postal Code"
                    value={address.postalCode}
                    onChange={(v) => onChange("postalCode", v)}
                    error={errors.postalCode}
                    required
                />
                <CheckoutInput
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={address.phone}
                    onChange={(v) => onChange("phone", v)}
                    error={errors.phone}
                    required
                    className="md:col-span-2"
                />
            </div>
        </section>
    );
}
