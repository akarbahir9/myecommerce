import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-gray-800 text-white overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-30"
                />
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
                >
                    کۆلێکشنە نوێیەکەمان ببینە
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
                >
                    تازەترین ستایل و دیزاینەکان بۆ هەموو بۆنەکانت.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="mt-8"
                >
                    <a 
                        href="#" 
                        className="inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-all transform hover:scale-105"
                    >
                        ئێستا بیکڕە
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
