import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../utils/data';
import { useCart } from '../cart/cartcontext';

const FeaturedItems = () => {
    const { addToCart } = useCart();

    // Get one item from each category
    const featuredItems = [
        menuItems.find((item) => item.id === 'app1'),
        menuItems.find((item) => item.id === 'main1'),
        menuItems.find((item) => item.id === 'des1'),
        menuItems.find((item) => item.id === 'bev1'),
    ].filter(Boolean);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
                        Our Featured Dishes
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our chef's selection of the most popular dishes that have been delighting our customers.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredItems.map(
                        (item) =>
                            item && (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-semibold text-orange-800">
                                                {item.name}
                                            </h3>
                                            <span className="bg-yellow-100 text-orange-800 px-2 py-1 text-sm font-semibold rounded-full">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <div className="flex space-x-2 mb-4">
                                            {item.dietary.map((diet) => (
                                                <span
                                                    key={diet}
                                                    className={`text-xs px-2 py-1 rounded-full ${diet === 'vegetarian' ? 'bg-green-100 text-green-800' : diet === 'vegan' ? 'bg-teal-100 text-teal-800' : diet === 'gluten-free' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'}`}
                                                >
                                                    {diet.charAt(0).toUpperCase() + diet.slice(1)}
                                                </span>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ),
                    )}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to="/menu"
                        className="inline-block bg-orange-100 text-orange-800 font-semibold py-3 px-8 rounded-full hover:bg-orange-200 transition-colors"
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;