import React from 'react';
import { CheckIcon } from 'lucide-react';

const MenuFilters = ({ filters, activeFilters, toggleFilter }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3">Dietary Preferences:</h3>
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeFilters.includes(filter.id) ? (filter.id === 'vegetarian' ? 'bg-green-100 text-green-800 border border-green-300' : filter.id === 'vegan' ? 'bg-teal-100 text-teal-800 border border-teal-300' : filter.id === 'gluten-free' ? 'bg-purple-100 text-purple-800 border border-purple-300' : 'bg-red-100 text-red-800 border border-red-300') : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'}`}
                        onClick={() => toggleFilter(filter.id)}
                    >
                        {activeFilters.includes(filter.id) && (
                            <CheckIcon size={14} className="flex-shrink-0" />
                        )}
                        {filter.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MenuFilters;