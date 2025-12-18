import { motion } from 'framer-motion';

export default function NewArrivals() {
    const products = [
        {
            id: 1,
            name: 'Sapphire Halo Ring',
            price: '1,350',
            material: '14k Gold + 1.5ct',
            tag: 'NEW',
            image: '/images/ring.png'
        },
        {
            id: 2,
            name: 'Serpent Chain',
            price: '450',
            material: '18k Gold Vermeil',
            tag: false,
            image: '/images/necklace.png'
        },
        {
            id: 3,
            name: 'Solitaire Studs',
            price: '890',
            material: 'White Gold + 0.5ct',
            tag: false,
            image: '/images/earrings.png'
        },
        {
            id: 4,
            name: 'Athena Cuff',
            price: '620',
            material: 'Hammered Gold',
            tag: 'BEST SELLER',
            image: '/images/bracelets.png'
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container-custom text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block mb-3"
                >
                    Fresh From the Atelier
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-serif font-bold text-gray-900 mb-16"
                >
                    New Arrivals
                </motion.h2>

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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="group text-left"
                        >
                            <div className="relative aspect-4/5 bg-[#F5F5F5] rounded-lg overflow-hidden mb-6">
                                {product.tag && (
                                    <span className={`absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded text-white z-10 ${product.tag === 'BEST SELLER' ? 'bg-red-500' : 'bg-gray-900'
                                        }`}>
                                        {product.tag}
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-white text-gray-900 py-3 rounded text-sm font-bold shadow-lg hover:bg-gray-50 cursor-pointer"
                                    >
                                        Quick Add
                                    </motion.button>
                                </div>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-gray-500 text-xs mb-2">{product.material}</p>
                            <span className="text-red-500 font-bold text-sm">
                                ${product.price}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-gray-300 px-8 py-3 rounded-lg font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors cursor-pointer"
                >
                    View All Products
                </motion.button>
            </div>
        </section>
    );
}
