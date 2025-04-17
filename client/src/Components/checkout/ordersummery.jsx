import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useCart } from '../cart/cartcontext';

const OrderSummary = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const deliveryFee = 2.99;
    const subtotal = getCartTotal();
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax + deliveryFee;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-xl font-semibold text-orange-800 mb-4">Order Summary</h2>
            <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                    <div key={item.id} className="py-4">
                        <div className="flex justify-between mb-2">
                            <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">
                                    ${item.price.toFixed(2)} x {item.quantity}
                                </p>
                                {item.specialInstructions && (
                                    <p className="text-xs text-gray-500 italic mt-1">
                                        Note: {item.specialInstructions}
                                    </p>
                                )}
                            </div>
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                    <MinusIcon size={14} />
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                    <PlusIcon size={14} />
                                </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors">
                                <TrashIcon size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
