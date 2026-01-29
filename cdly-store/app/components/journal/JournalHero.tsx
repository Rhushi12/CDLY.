export default function JournalHero() {
    return (
        <header className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden pt-16 lg:pt-0">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUE6D3KBc4rbSMRbaDGayhQXSRR7iuZ3TxYyhAuTYOP7Wf5uN2-ddJ2hQjxw0XnTyM4WOjZnNpWeggl_QOrPYE8Kev0WPHmwr0CZU9qdgoyooBDao92wVmy7E3PxMj4q8beWJsL6gQ-9RhbAmN0gqNbjtoz7ojSYMsp9XyRLpMtDn4mTUgdLRATP28Jxm6qgCUYKWtUYS9_MlG2bbJP-pxrbwxd0FdutLEuJ0hMti5KvlFt-NxCWM0Pt0rr0gDGEjcer86ayy-QIE')",
                    }}
                />
                {/* Mobile Title Overlay */}
                <div className="absolute bottom-6 left-6 z-20 lg:hidden">
                    <span className="bg-[#004aad] text-white px-2 py-1 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest mb-2 inline-block">
                        Issue 24
                    </span>
                </div>
            </div>

            {/* Right: Typography */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-screen bg-white flex flex-col justify-center px-6 lg:px-20 py-12 lg:py-0 relative z-20">
                <div className="flex flex-col gap-2">
                    <span className="text-[#004aad] font-[family-name:var(--font-mono)] text-sm tracking-widest uppercase mb-4 hidden lg:block">
                        The Journal — Issue 24
                    </span>
                    <h2 className="text-[12vw] lg:text-[7vw] leading-[0.85] font-black tracking-tighter text-[#111318] uppercase break-words">
                        The
                        <br />
                        Unfolding
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111318] to-[#111318]/80">
                            Story
                        </span>
                    </h2>
                    <div className="mt-8 lg:mt-12 flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-[#111318]" />
                        <p className="font-serif italic text-lg lg:text-xl text-gray-600">
                            Tracing the threads of modern minimalism.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce">
                    <span className="material-symbols-outlined text-4xl text-[#111318]">
                        arrow_downward
                    </span>
                </div>
            </div>
        </header>
    );
}
