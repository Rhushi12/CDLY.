export default function SustainabilityHero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden border-b border-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Ethos Background"
                    className="w-full h-full object-cover grayscale contrast-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0v5YotHJfC-PQW4WnYKEwcGLfY1jrlRGh1XRBrTbDj-5t5H8AQczbK80vV4X-0zl021E5etczfA3jB5XgyiolObpxisCLWRanEf0oy0AbnrSugoxGuZIYasXq4fdgOSqzQdWZ2Rp3TdiU5kGAoMY7VuoKKNtra3DsMv2ckfFA0gaP92b9aGSBX46Ygp0Kgp_AANS8fT18payy7gggEOcZ_Orv66qgEl87QTq2FGsb0qnPExZ0PxYZFyc3jvQe55lXRuTUFpxdrS4"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Title */}
            <div className="relative z-10 w-full px-6 flex justify-center items-center h-full">
                <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white mix-blend-overlay opacity-90 select-none">
                    ETHOS
                </h1>
            </div>
        </section>
    );
}
