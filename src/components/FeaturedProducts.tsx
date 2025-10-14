import React from 'react';
import { mockProducts } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">بەرهەمە دیارەکان</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        بەرهەمە هەرە باشەکانمان کە لەلایەن کڕیارەکانمانەوە هەڵبژێردراون
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {mockProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105"
                    >
                        بینینی هەموو بەرهەمەکان
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
