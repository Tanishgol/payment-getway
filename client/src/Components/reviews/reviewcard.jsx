import React from 'react';
import { StarIcon } from 'lucide-react';

const ReviewCard = ({ review }) => {
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
                <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                    <h4 className="font-semibold text-orange-800">{review.name}</h4>
                    <p className="text-xs text-gray-500">{formatDate(review.date)}</p>
                </div>
            </div>
            <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                    <StarIcon
                        key={i}
                        size={16}
                        className={
                            i < review.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                        }
                    />
                ))}
            </div>
            <p className="text-gray-700 italic">{review.comment}</p>
        </div>
    );
};

export default ReviewCard;
