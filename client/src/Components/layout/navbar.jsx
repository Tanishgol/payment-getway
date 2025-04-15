import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, ShoppingCartIcon, XIcon } from 'lucide-react';
import { useCart } from '../cart/cartcontext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-orange-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="https://img.icons8.com/color/48/000000/naan.png"
                            alt="Spice Route Logo"
                            className="h-10 w-10"
                        />
                        <span className="font-bold text-xl">Spice Route</span>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-yellow-200 transition-colors">
                            Home
                        </Link>
                        <Link
                            to="/menu"
                            className="hover:text-yellow-200 transition-colors"
                        >
                            Menu
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-yellow-200 transition-colors"
                        >
                            Contact
                        </Link>
                        <Link to="/checkout" className="relative">
                            <ShoppingCartIcon className="hover:text-yellow-200 transition-colors" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>
                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center">
                        <Link to="/checkout" className="relative mr-4">
                            <ShoppingCartIcon className="hover:text-yellow-200 transition-colors" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="focus:outline-none"
                        >
                            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2 py-3 border-t border-orange-500">
                        <div className="flex flex-col space-y-3">
                            <Link
                                to="/"
                                className="hover:text-yellow-200 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/menu"
                                className="hover:text-yellow-200 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Menu
                            </Link>
                            <Link
                                to="/contact"
                                className="hover:text-yellow-200 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;