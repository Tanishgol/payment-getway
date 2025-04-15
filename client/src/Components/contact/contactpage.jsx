import React from 'react';
import LocationMap from './locationmap';
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="bg-amber-50 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800 mb-2">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions or feedback? We'd love to hear from you. Reach out to
                        us using any of the methods below.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-6">
                            Send Us a Message
                        </h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Message subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                            <h2 className="text-2xl font-semibold text-orange-800 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                                        <MapPinIcon className="text-orange-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Address</h3>
                                        <p className="text-gray-600">
                                            123 Spice Street, Flavortown, IN 56789
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                                        <PhoneIcon className="text-orange-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                                        <MailIcon className="text-orange-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Email</h3>
                                        <p className="text-gray-600">info@spiceroute.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                                        <ClockIcon className="text-orange-600" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Hours</h3>
                                        <p className="text-gray-600">
                                            Monday - Sunday: 11:00 AM - 10:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LocationMap />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
