export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-colors duration-300">
            <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <a
                        className="text-2xl font-bold tracking-tight uppercase text-[#111318] hover:text-[--primary] transition-colors"
                        href="/"
                    >
                        CDLY.
                    </a>
                </div>
                <div className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <a
                        className="text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] hover:underline underline-offset-4 decoration-1 transition-all"
                        href="/collections"
                    >
                        Shop
                    </a>
                    <a
                        className="text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] hover:underline underline-offset-4 decoration-1 transition-all"
                        href="/journal"
                    >
                        Journal
                    </a>
                    <a
                        className="text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] hover:underline underline-offset-4 decoration-1 transition-all"
                        href="/about"
                    >
                        About
                    </a>
                </div>
                <div className="flex items-center gap-6">
                    <a href="/cart" className="hidden sm:flex text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] transition-colors">
                        Cart (0)
                    </a>
                    <button className="md:hidden p-1 text-[#111318]">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
