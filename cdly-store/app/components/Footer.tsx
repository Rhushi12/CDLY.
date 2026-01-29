export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 md:p-16 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-[#111318]">
                            Join the Club
                        </h3>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            Subscribe for early access to drops, editorial content, and
                            exclusive events.
                        </p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <label className="sr-only" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="w-full h-14 px-4 bg-transparent border border-gray-300 text-[#111318] placeholder:text-gray-400 focus:border-[--primary] focus:ring-1 focus:ring-[--primary] transition-all outline-none font-[family-name:var(--font-mono)] text-sm rounded-none"
                            id="email"
                            placeholder="YOUR EMAIL ADDRESS"
                            type="email"
                        />
                        <button
                            className="h-14 bg-[#111318] text-white text-sm font-bold uppercase tracking-widest hover:bg-[--primary] transition-colors rounded-none"
                            type="button"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-between min-h-[400px]">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                Connect
                            </span>
                            <a
                                className="text-2xl md:text-3xl font-bold uppercase text-[#111318] hover:text-[--primary] transition-colors"
                                href="#"
                            >
                                Instagram
                            </a>
                            <a
                                className="text-2xl md:text-3xl font-bold uppercase text-[#111318] hover:text-[--primary] transition-colors"
                                href="#"
                            >
                                Twitter
                            </a>
                            <a
                                className="text-2xl md:text-3xl font-bold uppercase text-[#111318] hover:text-[--primary] transition-colors"
                                href="#"
                            >
                                Pinterest
                            </a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                Support
                            </span>
                            <a
                                className="text-2xl md:text-3xl font-bold uppercase text-[#111318] hover:text-[--primary] transition-colors"
                                href="#"
                            >
                                Returns
                            </a>
                            <a
                                className="text-2xl md:text-3xl font-bold uppercase text-[#111318] hover:text-[--primary] transition-colors"
                                href="#"
                            >
                                Shipping
                            </a>
                            <a
                                className="text-2xl md:text-3xl font-bold uppercase text-[#111318] hover:text-[--primary] transition-colors"
                                href="#"
                            >
                                FAQ
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-end text-xs text-gray-400 font-[family-name:var(--font-mono)] uppercase">
                        <span>© 2024 CDLY Inc.</span>
                        <div className="flex gap-4">
                            <a className="hover:text-[--primary]" href="#">
                                Privacy
                            </a>
                            <a className="hover:text-[--primary]" href="#">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
