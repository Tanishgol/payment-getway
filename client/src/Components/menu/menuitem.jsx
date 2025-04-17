import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { useCart } from '../cart/cartcontext';

const MenuItem = ({ item }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    const handleAddToCart = () => {
        addToCart(item, quantity, specialInstructions);
        setQuantity(1);
        setSpecialInstructions('');
        setShowOptions(false);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.name} loading='lazy' className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-orange-800">{item.name}</h3>
                    <span className="bg-yellow-100 text-orange-800 px-2 py-1 text-sm font-semibold rounded-full">
                        ${item.price.toFixed(2)}
                    </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.dietary.map((diet) => (
                        <span key={diet} className={`text-xs px-2 py-1 rounded-full ${diet === 'vegetarian' ? 'bg-green-100 text-green-800' : diet === 'vegan' ? 'bg-teal-100 text-teal-800' : diet === 'gluten-free' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'}`}>
                            {diet.charAt(0).toUpperCase() + diet.slice(1)}
                        </span>
                    ))}
                </div>
                {showOptions ? (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Quantity:</span>
                            <div className="flex items-center">
                                <button onClick={decrementQuantity} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                    <MinusIcon size={16} />
                                </button>
                                <span className="mx-3 w-6 text-center">{quantity}</span>
                                <button onClick={incrementQuantity} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                    <PlusIcon size={16} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor={`instructions-${item.id}`} className="block text-gray-700 mb-1 text-sm">Special Instructions:</label>
                            <textarea id={`instructions-${item.id}`} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" rows={2} placeholder="Any special requests?" value={specialInstructions} onChange={(e) => setSpecialInstructions(e.target.value)}></textarea>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={handleAddToCart} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">Add to Cart</button>
                            <button onClick={() => setShowOptions(false)} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">Cancel</button>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => setShowOptions(true)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default MenuItem;