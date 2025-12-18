import { ArrowRight, Combine, ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <section className="container-custom py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="/images/craft.png"
                        alt="Jeweler working"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                    <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
                        About Aura Gems
                    </span>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                        Crafting Memories in Precious Metal
                    </h2>

                    <p className="text-gray-500 text-lg leading-relaxed">
                        Since our inception, Aura Gems has been dedicated to the art of fine jewelry. We believe that every piece tells a story—your story. Our artisans meticulously handcraft each design using ethically sourced materials, ensuring that your jewelry is not only beautiful but also responsible.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                                <Combine className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Ethically Sourced</h4>
                                <p className="text-sm text-gray-500">Conflict-free diamonds and recycled gold.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Lifetime Warranty</h4>
                                <p className="text-sm text-gray-500">We stand by the quality of our craftsmanship.</p>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all pt-4">
                        Read Our Story <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
