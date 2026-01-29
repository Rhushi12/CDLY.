export default function PhilosophySection() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                {/* Founder Portrait */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                    <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                        <img
                            alt="Portrait of Founder"
                            className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"
                        />
                    </div>
                    <div className="flex justify-between items-baseline border-t border-black pt-3">
                        <span className="text-sm font-bold uppercase tracking-widest text-[#111318]">
                            Elena V.
                        </span>
                        <span className="text-xs font-[family-name:var(--font-mono)] text-[#004aad] uppercase tracking-wider">
                            Founder / Creative Director
                        </span>
                    </div>
                </div>

                {/* Philosophy Text */}
                <div className="w-full lg:w-2/3 lg:pt-12">
                    <span className="block text-[#004aad] text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                        Our Philosophy
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-[#111318]">
                        The Discipline
                        <br />
                        of Reduction
                    </h2>
                    <div className="space-y-10 text-lg md:text-xl font-[family-name:var(--font-body)] leading-relaxed text-gray-800 max-w-2xl">
                        <p>
                            In a landscape saturated with noise, we have chosen the path of
                            silence. Our design philosophy is rooted in a relentless process
                            of subtraction—removing the superfluous until only the essential
                            remains. This is not minimalism for the sake of aesthetic, but a
                            rigorous pursuit of purity.
                        </p>
                        <p>
                            We believe that true luxury is defined not by ornamentation, but
                            by the precision of a cut, the integrity of a material, and the
                            architectural clarity of a silhouette. Every garment is an
                            exercise in restraint, engineered to provide a quiet confidence to
                            those who wear it.
                        </p>
                        <p>We do not chase trends. We build an archive of enduring forms.</p>
                    </div>
                    <div className="mt-16">
                        <img
                            alt="Signature"
                            className="h-16 opacity-80"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7rWIYUU2OlaoWr1TRpLQMjPtlRWfnKopBAvcwNTcAGMgmhS4bbg6cfK5GuSYvtWSHeJvq_mTa-wvupaTiJMDWBjdrV73IsqyvTa5mD7RvkS2JrAXFkXI1cZP3cKHSz1QFjKvZiV_vCv0qU150OXmSHXe4ehelpkSs-kS0jJy0yEhNBnGO0iLWyEIKfityKBG6oJ6dIQG6XdOULEW2x26BtNpQdx7LF024sts7TcAwUg-Wx1p2AdpWMyJHdQteessETrOrqRCv5w"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
