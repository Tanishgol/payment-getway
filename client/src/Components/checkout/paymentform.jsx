import React, { useState } from 'react';
import { CreditCardIcon, SmartphoneIcon } from 'lucide-react';

const PaymentForm = ({ onSubmit, isProcessing, amount }) => {
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="font-semibold text-lg mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-300'}`}
                    onClick={() => setPaymentMethod('card')}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                            className="mr-2"
                        />
                        <label htmlFor="card" className="flex items-center cursor-pointer">
                            <CreditCardIcon size={18} className="mr-2" />
                            <span>Credit/Debit Card</span>
                        </label>
                    </div>
                </div>
                <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-300'}`}
                    onClick={() => setPaymentMethod('upi')}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="upi"
                            name="paymentMethod"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={() => setPaymentMethod('upi')}
                            className="mr-2"
                        />
                        <label htmlFor="upi" className="flex items-center cursor-pointer">
                            <SmartphoneIcon size={18} className="mr-2" />
                            <span>UPI</span>
                        </label>
                    </div>
                </div>
                <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${paymentMethod === 'netbanking' ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-300'}`}
                    onClick={() => setPaymentMethod('netbanking')}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="netbanking"
                            name="paymentMethod"
                            value="netbanking"
                            checked={paymentMethod === 'netbanking'}
                            onChange={() => setPaymentMethod('netbanking')}
                            className="mr-2"
                        />
                        <label htmlFor="netbanking" className="flex items-center cursor-pointer">
                            <div size={18} className="mr-2" />
                            <span>Net Banking</span>
                        </label>
                    </div>
                </div>
            </div>
            {paymentMethod === 'card' && (
                <div className="mb-6">
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-gray-700 mb-1">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="expiryDate" className="block text-gray-700 mb-1">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiryDate"
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-gray-700 mb-1">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                placeholder="123"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="nameOnCard" className="block text-gray-700 mb-1">
                            Name on Card
                        </label>
                        <input
                            type="text"
                            id="nameOnCard"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>
            )}
            {paymentMethod === 'upi' && (
                <div className="mb-6">
                    <div className="mb-4">
                        <label htmlFor="upiId" className="block text-gray-700 mb-1">
                            UPI ID
                        </label>
                        <input
                            type="text"
                            id="upiId"
                            placeholder="yourname@upi"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50">
                            <img
                                src="https://img.icons8.com/color/48/000000/google-pay-india.png"
                                alt="Google Pay"
                                className="w-6 h-6 mr-2"
                            />
                            <span>Google Pay</span>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50">
                            <img
                                src="https://img.icons8.com/color/48/000000/phonepe.png"
                                alt="PhonePe"
                                className="w-6 h-6 mr-2"
                            />
                            <span>PhonePe</span>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50">
                            <img
                                src="https://img.icons8.com/color/48/000000/paytm.png"
                                alt="Paytm"
                                className="w-6 h-6 mr-2"
                            />
                            <span>Paytm</span>
                        </div>
                    </div>
                </div>
            )}
            {paymentMethod === 'netbanking' && (
                <div className="mb-6">
                    <label htmlFor="bank" className="block text-gray-700 mb-1">
                        Select Bank
                    </label>
                    <select
                        id="bank"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    >
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                    </select>
                </div>
            )}
            <div className="bg-orange-50 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="font-bold text-orange-800">
                        ${amount.toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                    Back to Delivery Information
                </button>
                <button
                    type="submit"
                    disabled={isProcessing}
                    className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>
            </div>
        </form>
    );
};

export default PaymentForm;
