import React from 'react';
import Hero from './hero';
import FeaturedItems from './featureditems';
import ReviewsSection from '../Reviews/ReviewsSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="w-full">
            <Hero />
            <FeaturedItems />
            <section className="bg-orange-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Experience the rich flavors and traditions of authentic Indian cuisine, prepared with love and the finest ingredients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <img
                                    src="https://img.icons8.com/color/48/000000/ingredients.png"
                                    alt="Fresh Ingredients"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-orange-800 mb-2">
                                Authentic Ingredients
                            </h3>
                            <p className="text-gray-600">
                                We use only the freshest, highest-quality ingredients sourced directly from trusted suppliers.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <img
                                    src="https://img.icons8.com/color/48/000000/chef-hat.png"
                                    alt="Expert Chefs"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-orange-800 mb-2">
                                Expert Chefs
                            </h3>
                            <p className="text-gray-600">
                                Our master chefs bring decades of experience in traditional Indian cooking techniques.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <img
                                    src="https://img.icons8.com/color/48/000000/delivery--v1.png"
                                    alt="Fast Delivery"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-orange-800 mb-2">
                                Quick Delivery
                            </h3>
                            <p className="text-gray-600">
                                Hot, fresh food delivered to your doorstep in 30 minutes or less, guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ReviewsSection />
            <section className="bg-orange-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Experience Authentic Indian Flavors?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Order now and embark on a culinary journey through India's rich and diverse cuisine.
                    </p>
                    <Link
                        to="/menu"
                        className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-yellow-100 transition-colors"
                    >
                        View Our Menu
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;