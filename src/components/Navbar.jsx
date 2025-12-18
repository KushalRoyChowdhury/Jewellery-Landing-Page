import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-100">
            <div className="container-custom flex items-center justify-between h-20">

                {/* Left: Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                    <span className="font-serif text-2xl font-bold tracking-tight">Aura Gems</span>
                </div>

                {/* Middle: Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 absolute left-1/2 transform -translate-x-1/2">
                    <a href="#" className="hover:text-black transition-colors cursor-pointer link-underline">Collections</a>
                    <a href="#" className="hover:text-black transition-colors cursor-pointer link-underline">About Us</a>
                    <a href="#" className="hover:text-black transition-colors cursor-pointer link-underline">Journal</a>
                    <a href="#" className="hover:text-black transition-colors cursor-pointer link-underline">Contact</a>
                </div>

                {/* Right: Icons & Mobile Toggle */}
                <div className="flex items-center gap-4 md:gap-6">
                    <button className="text-gray-600 hover:text-black transition-colors cursor-pointer">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-black transition-colors relative cursor-pointer">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="hidden md:block text-gray-600 hover:text-black transition-colors cursor-pointer">
                        <User className="w-5 h-5" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden bg-white border-t border-gray-100 absolute top-20 left-0 w-full shadow-lg overflow-hidden"
                    >
                        <div className="container-custom py-8 flex flex-col gap-6 text-center">
                            <nav className="flex flex-col gap-4">
                                {['Collections', 'About Us', 'Journal', 'Contact'].map((item) => (
                                    <motion.a
                                        key={item}
                                        href="#"
                                        variants={linkVariants}
                                        className="text-xl font-medium text-gray-900 hover:text-red-500 py-2 border-b border-gray-50 bg-transparent cursor-pointer"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </nav>
                            <motion.div
                                variants={linkVariants}
                                className="pt-4 w-full flex justify-center gap-6"
                            >
                                <button className="flex items-center gap-2 text-base font-bold text-gray-600 cursor-pointer">
                                    <User className="w-5 h-5" /> My Account
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
