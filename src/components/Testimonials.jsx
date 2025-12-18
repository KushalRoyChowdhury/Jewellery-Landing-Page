import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            text: "I bought the Sapphire Halo Ring for my fiancée and she was absolutely floored. The quality is unmatched and the packaging was exquisite.",
            author: "James D.",
            initials: "JD"
        },
        {
            id: 2,
            text: "The customer service team went above and beyond to help me size my bracelet correctly. It fits perfectly and looks stunning.",
            author: "Emily M.",
            initials: "EM"
        },
        {
            id: 3,
            text: "Beautiful pieces that feel modern yet classic. I wear my necklace every single day and it hasn't lost its shine.",
            author: "Sarah L.",
            initials: "SL"
        }
    ];

    return (
        <section className="bg-[#FAF9F6] py-24 border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block mb-3">
                        Testimonials
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-gray-900">Loved by You</h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-1 mb-6 text-[#D4AF37]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-8 leading-relaxed text-sm">"{review.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
                                    <span className="text-xs text-green-600 flex items-center gap-1">
                                        Verified Buyer
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
