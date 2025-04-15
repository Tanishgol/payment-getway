import React, { useState } from 'react';
import MenuCategories from './menucategories';
import MenuFilters from './menufilters';
import MenuItem from './menuitem';
import { menuItems } from '../../utils/data';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeFilters, setActiveFilters] = useState([]);

    const categories = [
        {
            id: 'all',
            name: 'All Items',
        },
        {
            id: 'appetizers',
            name: 'Appetizers',
        },
        {
            id: 'main-courses',
            name: 'Main Courses',
        },
        {
            id: 'desserts',
            name: 'Desserts',
        },
        {
            id: 'beverages',
            name: 'Beverages',
        },
    ];

    const filters = [
        {
            id: 'vegetarian',
            name: 'Vegetarian',
        },
        {
            id: 'vegan',
            name: 'Vegan',
        },
        {
            id: 'gluten-free',
            name: 'Gluten Free',
        },
        {
            id: 'non-vegetarian',
            name: 'Non-Vegetarian',
        },
    ];

    const toggleFilter = (filterId) => {
        setActiveFilters((prev) =>
            prev.includes(filterId)
                ? prev.filter((id) => id !== filterId)
                : [...prev, filterId]
        );
    };

    const filteredItems = menuItems.filter((item) => {
        // Filter by category
        if (activeCategory !== 'all' && item.category !== activeCategory) {
            return false;
        }
        // Filter by dietary restrictions
        if (
            activeFilters.length > 0 &&
            !activeFilters.some((filter) => item.dietary.includes(filter))
        ) {
            return false;
        }
        return true;
    });

    return (
        <div className="bg-amber-50 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800 mb-2">Our Menu</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our wide selection of authentic Indian dishes, prepared with
                        traditional recipes and the freshest ingredients.
                    </p>
                </div>
                <div className="mb-8">
                    <MenuCategories
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
                <div className="mb-8">
                    <MenuFilters
                        filters={filters}
                        activeFilters={activeFilters}
                        toggleFilter={toggleFilter}
                    />
                </div>
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-600">
                            No items match your current filters. Please try different options.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuPage;
