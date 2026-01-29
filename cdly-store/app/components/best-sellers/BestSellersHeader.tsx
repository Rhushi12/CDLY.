export default function BestSellersHeader() {
    return (
        <header className="bg-white border-b border-black pt-24 pb-8 px-6 w-full">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-[#111318]">
                    Best
                    <br />
                    Sellers
                </h1>
                <div className="md:mt-4">
                    <span className="inline-block bg-[#004aad] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                        High Demand
                    </span>
                </div>
            </div>
        </header>
    );
}
