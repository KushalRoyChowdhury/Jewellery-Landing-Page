export default function Hero() {
    return (
        <section className="container-custom py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-6 md:p-12 rounded-3xl shadow-sm">
                {/* Image Side */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100">
                    <img
                        src="/images/hero.png"
                        alt="Woman wearing gold necklace"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Content Side */}
                <div className="space-y-8 pl-0 md:pl-8">
                    <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                        New Collection 2024
                    </span>

                    <h1 className="text-5xl md:text-6xl/tight font-serif font-medium text-gray-900">
                        Timeless Elegance, <br />
                        <span className="italic">Modern Soul</span>
                    </h1>

                    <p className="text-gray-500 max-w-md text-lg leading-relaxed">
                        Discover the new Ruby & Gold collection. Handcrafted for the moments that matter most to you.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20 cursor-pointer btn-glint">
                            Shop the Collection
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                            View Lookbook
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
