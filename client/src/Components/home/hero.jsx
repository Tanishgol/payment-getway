import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative bg-orange-800 text-white">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Indian Food Background"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>
            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Experience the Rich Flavors of India
                    </h1>
                    <p className="text-xl mb-8 text-yellow-100">
                        Authentic Indian cuisine made with traditional recipes and the freshest ingredients, delivered straight to your door.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/menu"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                        >
                            Order Now
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;