export default function CountdownTimer() {
    return (
        <section className="w-full bg-white border-y border-black py-20 flex flex-col items-center justify-center reveal-on-scroll">
            <div className="text-[--klein-blue] font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-6 text-center">
                Next Drop Initiating
            </div>
            <div className="font-[family-name:var(--font-mono)] text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter tabular-nums leading-none text-black">
                00:00:00:00
            </div>
        </section>
    );
}
