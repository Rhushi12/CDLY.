export default function EditorialBanner() {
    return (
        <div className="py-[150px]">
            <div className="relative w-full h-[600px] overflow-hidden border border-black group">
                <img
                    alt="Editorial Campaign"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div>
                        <span className="bg-[#004aad] text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 inline-block">
                            In Focus
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                            The Winter
                            <br />
                            Edit
                        </h2>
                        <p className="text-gray-200 font-[family-name:var(--font-mono)] text-sm max-w-md uppercase">
                            Showcasing the structural integrity of our new heavyweight wool
                            compositions.
                        </p>
                    </div>
                    <button className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#004aad] hover:text-white transition-colors border-none">
                        View The Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
