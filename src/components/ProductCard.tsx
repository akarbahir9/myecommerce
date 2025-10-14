import React from 'react';
import { Product } from '../data/products';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const renderStars = () => {
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                {halfStar && <Star key="half" className="w-4 h-4 text-yellow-400 fill-current" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                ))}
            </div>
        );
    };

    return (
        <motion.div 
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
            whileHover={{ y: -5 }}
        >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">نوێ</span>
                )}
                {product.originalPrice && (
                     <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">داشکاندن</span>
                )}
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-base font-medium text-gray-900">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h3>
                <div className="flex flex-1 flex-col justify-end">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 space-x-reverse">
                            {renderStars()}
                            <span className="text-xs text-gray-500">({product.reviewCount})</span>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-2 space-x-reverse mt-2">
                        <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                        {product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 left-0 p-4 bg-white bg-opacity-90 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                 <button className="w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors">
                    <ShoppingCart className="w-5 h-5 ml-2"/>
                    <span>زیادکردن بۆ سەبەتە</span>
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
