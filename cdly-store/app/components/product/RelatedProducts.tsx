interface RelatedProduct {
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    href: string;
}

interface RelatedProductsProps {
    products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <section className="w-full bg-white py-20 lg:py-24 border-b border-gray-200 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex justify-between items-start mb-12">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.25em] text-[#111318]">
                        You May Also Like
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                        <button className="w-10 h-10 border border-black flex items-center justify-center hover:border-[#004aad] group transition-colors rounded-full">
                            <span className="material-symbols-outlined text-sm text-[#111318] group-hover:text-[#004aad] transition-colors">
                                arrow_back_ios_new
                            </span>
                        </button>
                        <button className="w-10 h-10 border border-black flex items-center justify-center hover:border-[#004aad] group transition-colors rounded-full">
                            <span className="material-symbols-outlined text-sm text-[#111318] group-hover:text-[#004aad] transition-colors">
                                arrow_forward_ios
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
                    {products.map((product, index) => (
                        <a
                            key={index}
                            className="group min-w-[280px] md:min-w-[320px] lg:min-w-[calc(25%-1.125rem)] snap-center cursor-pointer block"
                            href={product.href}
                        >
                            <div className="aspect-[4/5] relative border border-black overflow-hidden mb-4">
                                <img
                                    alt={product.name}
                                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                                    src={product.imageUrl}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                <div className="absolute bottom-4 right-4 bg-white/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="material-symbols-outlined text-[#004aad] text-xl">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-[#111318] group-hover:text-[#004aad] transition-colors">
                                        {product.name}
                                    </h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                        {product.category}
                                    </p>
                                </div>
                                <span className="text-sm font-[family-name:var(--font-mono)] text-[#111318]">
                                    {product.price}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
