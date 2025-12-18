export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                        <span className="font-serif text-xl font-bold">Aura Gems</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Crafting timeless jewelry for the modern spirit. Designed in NYC, worn worldwide.
                    </p>
                    <div className="flex gap-4 text-gray-400">
                        <a href="#" className="hover:text-black">IG</a>
                        <a href="#" className="hover:text-black">FB</a>
                        <a href="#" className="hover:text-black">PI</a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Shop</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-red-500">All Jewelry</a></li>
                        <li><a href="#" className="hover:text-red-500">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-red-500">Best Sellers</a></li>
                        <li><a href="#" className="hover:text-red-500">Gift Guide</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
                        <li><a href="#" className="hover:text-red-500">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-red-500">Jewelry Care</a></li>
                        <li><a href="#" className="hover:text-red-500">FAQ</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Stay in the loop</h4>
                    <p className="text-gray-500 text-sm mb-4">Sign up for exclusive offers and first access to new drops.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-red-500"
                        />
                        <button className="bg-accent text-white text-sm font-bold px-4 py-2 rounded hover:bg-red-600 transition-colors cursor-pointer btn-glint">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container-custom pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>© 2024 Aura Gems. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
