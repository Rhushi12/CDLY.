import Link from "next/link";

const categories = [
    { name: "New Arrivals", href: "/new-arrivals", isLink: true },
    { name: "Best Sellers", href: "/best-sellers", isLink: true },
    { name: "The Archive", href: "/archive", isLink: true },
    { name: "Coming Soon", href: "#coming-soon", isLink: false },
];

export default function CategoryNav() {
    return (
        <div className="sticky top-16 z-40 bg-white border-b border-black w-full">
            <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-start gap-8 md:gap-16 overflow-x-auto scrollbar-hide">
                {categories.map((category) =>
                    category.isLink ? (
                        <Link
                            key={category.name}
                            className="text-xs font-bold uppercase tracking-[0.15em] text-[#111318] hover:text-[#004aad] whitespace-nowrap transition-colors"
                            href={category.href}
                        >
                            {category.name}
                        </Link>
                    ) : (
                        <a
                            key={category.name}
                            className="text-xs font-bold uppercase tracking-[0.15em] text-[#111318] hover:text-[#004aad] whitespace-nowrap transition-colors"
                            href={category.href}
                        >
                            {category.name}
                        </a>
                    )
                )}
            </div>
        </div>
    );
}

