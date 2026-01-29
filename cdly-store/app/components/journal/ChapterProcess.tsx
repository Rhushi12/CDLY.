export default function ChapterProcess() {
    return (
        <section className="w-full bg-gray-50 py-24 lg:py-40">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Chapter Marker */}
                <div className="w-full border-t border-[#111318] pt-4 flex justify-between items-start mb-16 lg:mb-24">
                    <span className="text-[#004aad] font-[family-name:var(--font-mono)] text-sm tracking-widest">
                        CHAPTER 02
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-sm tracking-widest text-gray-400">
                        PROCESS
                    </span>
                </div>

                {/* Content Grid (Reversed Stagger) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <div className="w-full aspect-video overflow-hidden bg-gray-200 relative">
                            <img
                                alt="Close up of hands working on fabric with tailoring tools"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRAJtrKiABFE67GQ-N-9bx6UvGZ-lyk1QYc5BVu-LiZvgxi8kGAA37GW9Rvt3H5Azfw4JLAkjmxPK7PUdwdExhkPZHXDfKLYfdouGUz0YOnoCEdJLkOzevvbuupV9MBF1r9vyYS2rkHlgJN6sfSml0g9rZKzJ8DBbK_6aEwB6dovGUIfjh4P6P1HCsfFcjKSfdD-t4nINvK6umlMGGrNAswrgNgdHfIuj31esXPiC1OaUP-5sV2GK-CetDqBdAzYVmERLcZ66FT5Y"
                            />
                            <div className="absolute bottom-0 right-0 bg-white p-4 lg:p-6 max-w-sm">
                                <p className="font-[family-name:var(--font-mono)] text-xs leading-relaxed text-[#111318]">
                                    LOCATION: <span>MILAN ATELIER</span>
                                    <br />
                                    TIME: 14:00 CET
                                    <br />
                                    SUB: MATERIAL STUDY
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col gap-6">
                        <h3 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111318]">
                            THE ART OF
                            <br />
                            <span className="text-[#004aad]">SUBTRACTION</span>
                        </h3>
                        <p className="font-serif text-lg leading-relaxed text-gray-700">
                            Every stitch is a decision. Every cut is a commitment. We do not
                            add; we define. The process is rigorous, demanding an eye for the
                            microscopic details that others overlook.
                        </p>
                        <ul className="flex flex-col gap-3 mt-4 border-l-2 border-[#004aad] pl-6 font-[family-name:var(--font-mono)] text-sm text-gray-600">
                            <li>01. RAW MATERIAL SELECTION</li>
                            <li>02. PATTERN DRAFTING</li>
                            <li>03. PROTOTYPE FITTING</li>
                            <li>04. FINAL CONSTRUCTION</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
