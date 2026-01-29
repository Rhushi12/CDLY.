interface CollectionDetailHeaderProps {
    title: string[];
    subtitle: string;
}

export default function CollectionDetailHeader({
    title,
    subtitle,
}: CollectionDetailHeaderProps) {
    return (
        <header className="w-full max-w-[1440px] mx-auto px-6 mt-16 md:mt-24 mb-0 reveal-on-scroll">
            <div className="pb-2 border-b border-black flex justify-between items-end">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-[#111318]">
                    {title[0]}<br />{title[1]}
                </h1>
                <span className="hidden md:block text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest mb-4 text-[#111318]">
                    {subtitle}
                </span>
            </div>
        </header>
    );
}
