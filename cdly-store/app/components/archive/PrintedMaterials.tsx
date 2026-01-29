const materials = [
    {
        vol: "Vol. 01",
        title: "Genesis",
        year: "1998",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaTrbV1_2Scbsvxbra6hYfEpnCxrRDHJePtegWn4NAWa8j9PU1XjDiSvOuBViucDaloHvglFR5sWPHeLFoAP6yI0iCA49rrq-m6vb2p9L8cEPhHidvqV3Q1gW5CltVEkfHXf795UCghvwF2TZJxg-NSqv2KnrZvBliTgrKGDT-lEZyZ0bMqhIRxMeN8E-1jnVe1vxUv34hiCq40LUUO-1xooyiWd6WxG2eiW52j1VAllvD5lgjVGEvhudg9IgT8AH58I6cwXC2ZuU",
    },
    {
        vol: "Vol. 05",
        title: "Structure",
        year: "2003",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDU2TMpBzyxu9HUheeHyG0N6nI7rxU5D1eD2HwiKjoW7dv0yAb_jMnwSidvEdmW7dPhM-D20iEy0mQyG6kxktOWD7hiKC8f0vAhu5PWIjJgHeaY4FmS15Ouyg4O6PjbJSbu9xvr7lkzHBfpvISZzuAVHCuH5diFvjXXGn4-3Pe_GDHC_lNQqxJN46wAwdJ4dvxt5i_brdyakLf6-JgoSdPxog4DPq166HJJ4qkKatEmsdRVQAZ9gBO2dSexCjOsYi7UMInrpaflUxE",
    },
    {
        vol: "Sketchbook",
        title: "Drafts",
        year: "2005",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDrIJqvMzxYyyHedJ5KU6D3n_UxgwFQapP4VQ9wxHP4-yaudXlV5EpShs-3E3XbGi7FWxOPOofQ7kGljazfRN9qtJ8BeFhQgggXNeRXTe9t2AJH7EoktVfhGnPRZfnxGtHbpBfb4P3aBQHL9fHulFXvQnjknGGmOpbzBwBMJnrAgkAL8R-vljGGkQzB8TUFOiaY6LttGz6IcSISc5FQz-976hnppcKxYm0jOYMH732Q8V1q4lAZ5OPuUqfY_bYXrOgHQLwOBffp-Yc",
    },
    {
        vol: "Campaign",
        title: "Noir",
        year: "2010",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC7_d98Mp8ISqGPP5fb93AV7RkPrFIkgpqrAfdIxvoWCeabWrcXtyLssbyeJFa0mpTHhjfBHnVgMuCo88Uftt4b7PaswcWtrphgkORc57zLgua85j3Az7-TzZ4-Tua4x7ca28Paj6pkUNqg_PFj99suWpg5xp5_Gs3yYQRAcq_AQvIzz7A7G0MiEZ0Lp0AfWyAlERgiQCa3kwNvOgwu1DbfYNEhzp7Em338wXmmXdxJ_Th245fnKIO53U1xDBV1Ngq9aKOudc_lVAY",
    },
    {
        vol: "Vol. 12",
        title: "Static",
        year: "2012",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC8UWR6H03jOND3kZ3eWchijElZu_UkUte1arWexUGQdjqAAxSGU-ixN4OSRPWvDSiwmlEpXUtstjzPZcwNuwPyvEFnSWGocuKify6_8bySHIrW54DXaxCOEADP9XP5ruHIIYV9BF8KriMa1FS1sKdAj8bf-3V5PnZfR0TUptx4ccpNsHeU2KCI9mBJVH7C6suKRqfr1Fh3VrFBeZvGv8fdAepzE5YAWLM-jja1pl6n0P3RSoxU-dSY-AHW8JuWx-fXP_SRYEXGn8k",
    },
];

export default function PrintedMaterials() {
    return (
        <section className="py-40 md:py-48 bg-[#f8f8f8] overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#111318]">
                        Printed
                        <br />
                        Materials
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-black" />
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Vintage Lookbooks &amp; Sketches
                        </p>
                    </div>
                </div>

                {/* Horizontal Scroll */}
                <div className="flex overflow-x-auto pb-12 px-6 gap-0 snap-x scrollbar-hide">
                    {materials.map((material) => (
                        <div
                            key={material.title}
                            className="min-w-[320px] md:min-w-[400px] aspect-[3/4] border border-black mr-[-1px] relative group snap-center bg-white p-10 md:p-12 flex flex-col justify-between hover:z-10 transition-all"
                        >
                            {/* Image */}
                            <div className="w-full h-[80%] bg-white overflow-hidden relative border border-black">
                                <img
                                    alt={material.title}
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply p-4"
                                    src={material.image}
                                    style={{ objectPosition: "top" }}
                                />
                            </div>
                            {/* Info */}
                            <div className="flex justify-between items-end mt-6">
                                <div>
                                    <span className="block text-[10px] font-[family-name:var(--font-mono)] text-gray-400 uppercase tracking-widest mb-2">
                                        {material.vol}
                                    </span>
                                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-[#111318]">
                                        {material.title}
                                    </h4>
                                </div>
                                <span className="text-[10px] font-[family-name:var(--font-mono)] text-gray-500">
                                    {material.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
