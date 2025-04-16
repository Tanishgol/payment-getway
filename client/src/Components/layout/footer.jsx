import React from 'react';
import { Link } from 'react-router-dom';
import {
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-orange-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Spice Route</h3>
                        <p className="mb-4">
                            Authentic Indian cuisine delivered to your doorstep. Experience the rich flavors of India with our carefully crafted dishes.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-yellow-200 transition-colors">
                                <FacebookIcon size={20} />
                            </a>
                            <a href="#" className="hover:text-yellow-200 transition-colors">
                                <InstagramIcon size={20} />
                            </a>
                            <a href="#" className="hover:text-yellow-200 transition-colors">
                                <TwitterIcon size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-yellow-200 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu" className="hover:text-yellow-200 transition-colors">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-yellow-200 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <MapPinIcon size={20} className="flex-shrink-0 mt-1" />
                                <span>123 Spice Street, Flavortown, IN 56789</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <PhoneIcon size={20} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ClockIcon size={20} />
                                <span>Open: 11:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-orange-700 mt-8 pt-6 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Spice Route. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;