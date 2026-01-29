export default function AtelierGallery() {
    return (
        <section className="w-full border-b border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Hand Cutting */}
                <div className="relative w-full border-b md:border-b-0 md:border-r border-black group overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img
                            alt="Atelier Process"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-white border-t border-r border-black p-4 z-10">
                        <span className="block text-xs font-bold uppercase tracking-widest text-[#111318]">
                            Hand Cutting
                        </span>
                        <span className="block text-[10px] font-[family-name:var(--font-mono)] text-gray-500 mt-1 uppercase">
                            Atelier 01 — Milan
                        </span>
                    </div>
                </div>

                {/* Right Column: stacked images */}
                <div className="flex flex-col">
                    {/* Texture Analysis */}
                    <div className="relative w-full border-b border-black group overflow-hidden">
                        <div className="aspect-square overflow-hidden bg-gray-100">
                            <img
                                alt="Fabric Detail"
                                className="w-full h-full object-cover grayscale contrast-150 group-hover:contrast-100 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU"
                            />
                        </div>
                        <div className="absolute top-0 right-0 bg-white border-b border-l border-black p-4 z-10">
                            <span className="block text-xs font-bold uppercase tracking-widest text-right text-[#111318]">
                                Texture Analysis
                            </span>
                            <span className="block text-[10px] font-[family-name:var(--font-mono)] text-gray-500 mt-1 uppercase text-right">
                                Lab 04 — Tokyo
                            </span>
                        </div>
                    </div>

                    {/* Final Approval */}
                    <div className="relative w-full group overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden bg-gray-200 p-16 flex items-center justify-center">
                            <img
                                alt="Design Sketch"
                                className="w-2/3 opacity-80 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7rWIYUU2OlaoWr1TRpLQMjPtlRWfnKopBAvcwNTcAGMgmhS4bbg6cfK5GuSYvtWSHeJvq_mTa-wvupaTiJMDWBjdrV73IsqyvTa5mD7RvkS2JrAXFkXI1cZP3cKHSz1QFjKvZiV_vCv0qU150OXmSHXe4ehelpkSs-kS0jJy0yEhNBnGO0iLWyEIKfityKBG6oJ6dIQG6XdOULEW2x26BtNpQdx7LF024sts7TcAwUg-Wx1p2AdpWMyJHdQteessETrOrqRCv5w"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-[#004aad] border-t border-l border-black p-4 z-10 text-white">
                            <span className="block text-xs font-bold uppercase tracking-widest text-right">
                                Final Approval
                            </span>
                            <span className="block text-[10px] font-[family-name:var(--font-mono)] text-white/70 mt-1 uppercase text-right">
                                Design Studio — Paris
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
