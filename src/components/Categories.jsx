import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    { id: 1, name: 'Fine Rings', image: '/images/ring.png' },
    { id: 2, name: 'Necklaces', image: '/images/necklace.png' },
    { id: 3, name: 'Earrings', image: '/images/earrings.png' },
    { id: 4, name: 'Bracelets', image: '/images/bracelets.png' },
];

export default function Categories() {
    return (
        <section className="container-custom py-16">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-900">Shop by Category</h2>
                <a href="#" className="flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all">
                    View All <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {categories.map((cat) => (
                    <motion.div
                        key={cat.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        whileHover={{ y: -5 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-square bg-white rounded-xl overflow-hidden mb-4 relative shadow-sm hover:shadow-md transition-shadow">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                        </div>

                        <h3 className="font-serif text-xl font-bold mb-1">{cat.name}</h3>
                        <span className="text-sm font-medium text-red-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Shop {cat.name} <ArrowRight className="w-3 h-3" />
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
