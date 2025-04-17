import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from './ordersummery';
import PaymentForm from './PaymentForm';
import { useCart } from '../cart/cartcontext';
import axios from 'axios';

const CheckoutPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        specialInstructions: '',
    });

    const handleCustomerInfoChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitCustomerInfo = async (e) => {
        e.preventDefault();

        const payload = {
            customerRecords: {
                customerdata: {
                    name: customerInfo.name,
                    email: customerInfo.email,
                    phone: customerInfo.phone,
                    address: customerInfo.address,
                    city: customerInfo.city,
                    postalCode: customerInfo.postalCode,
                    specialInstructions: customerInfo.specialInstructions,
                },
                bankdata: {
                    bankName: "",
                    accountNumber: "",
                    ifscCode: "",
                }
            }
        };

        try {
            const response = await axios.post('http://localhost:5000/customers', payload); // Updated URL
            if (response.status === 201 || response.status === 200) {
                console.log('Customer info saved:', response.data);
                setStep(2);
            } else {
                console.error('Unexpected response:', response);
            }
        } catch (error) {
            console.error('Error saving customer info:', error);
        }
    };

    const handlePaymentSubmit = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setOrderComplete(true);
            clearCart();
            setTimeout(() => {
                navigate('/');
            }, 5000);
        }, 2000);
    };

    if (cart.length === 0 && !orderComplete) {
        return (
            <div className="bg-amber-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                        <h1 className="text-3xl font-bold text-orange-800 mb-6">Your Cart is Empty</h1>
                        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
                        <button onClick={() => navigate('/menu')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors">
                            Browse Our Menu
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (orderComplete) {
        return (
            <div className="bg-amber-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed!</h1>
                        <p className="text-gray-600 mb-2">Thank you for your order, {customerInfo.name}!</p>
                        <p className="text-gray-600 mb-6">Your delicious food is being prepared and will be on its way shortly.</p>
                        <p className="text-sm text-gray-500">You will be redirected to the homepage in a few seconds...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-amber-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-orange-800 mb-2">Checkout</h1>
                    <p className="text-gray-600">Complete your order in just a few steps</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            {/* Step Indicator */}
                            <div className="flex mb-6">
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-800'}`}>1</div>
                                    <span className="ml-2 font-medium">Delivery Information</span>
                                </div>
                                <div className="mx-4 border-t border-gray-300 flex-grow self-center"></div>
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-800'}`}>2</div>
                                    <span className="ml-2 font-medium">Payment</span>
                                </div>
                            </div>

                            {/* Step 1: Delivery Info */}
                            {step === 1 ? (
                                <form onSubmit={handleSubmitCustomerInfo}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                                            <input type="text" id="name" name="name" required value={customerInfo.name} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                                            <input type="email" id="email" name="email" required value={customerInfo.email} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" required value={customerInfo.phone} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="address" className="block text-gray-700 mb-1">Delivery Address</label>
                                        <input type="text" id="address" name="address" required value={customerInfo.address} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                                            <input type="text" id="city" name="city" required value={customerInfo.city} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="postalCode" className="block text-gray-700 mb-1">Postal Code</label>
                                            <input type="text" id="postalCode" name="postalCode" required value={customerInfo.postalCode} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="specialInstructions" className="block text-gray-700 mb-1">Special Instructions (Optional)</label>
                                        <textarea id="specialInstructions" name="specialInstructions" rows={3} value={customerInfo.specialInstructions} onChange={handleCustomerInfoChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Any delivery instructions or food preferences"></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">
                                            Continue to Payment
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <PaymentForm onSubmit={handlePaymentSubmit} isProcessing={isProcessing} amount={getCartTotal()} />
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;