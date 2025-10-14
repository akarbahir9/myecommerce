import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'سەرەکی', href: '#' },
        { name: 'فرۆشگا', href: '#' },
        { name: 'دەربارە', href: '#' },
        { name: 'پەیوەندی', href: '#' },
    ];

    const menuVariants = {
        hidden: {
            x: '100%',
            transition: {
                type: 'tween',
                ease: 'easeIn'
            }
        },
        visible: {
            x: 0,
            transition: {
                type: 'tween',
                ease: 'easeOut'
            }
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-gray-900">فرۆشگا</a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:items-center lg:space-x-8 lg:space-x-reverse">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                {link.name}
                            </a>
                        ))}
                         <a href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                            <span>لاپەڕەکان</span>
                            <ChevronDown className="w-4 h-4 mr-1" />
                        </a>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <button className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Search className="h-6 w-6" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-900 transition-colors">
                            <User className="h-6 w-6" />
                        </button>
                        <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">3</span>
                        </button>
                        <button className="lg:hidden text-gray-500" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-lg p-6"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold">مێنو</h2>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a key={link.name} href={link.href} className="text-lg font-medium text-gray-700 hover:text-black">
                                        {link.name}
                                    </a>
                                ))}
                                <a href="#" className="text-lg font-medium text-gray-700 hover:text-black flex items-center">
                                    <span>لاپەڕەکان</span>
                                    <ChevronDown className="w-5 h-5 mr-1" />
                                </a>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
