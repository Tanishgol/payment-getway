import React from 'react';

const MenuCategories = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${activeCategory === category.id ? 'bg-orange-500 text-white' : 'bg-white text-orange-800 hover:bg-orange-100'}`}
                    onClick={() => setActiveCategory(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default MenuCategories;
