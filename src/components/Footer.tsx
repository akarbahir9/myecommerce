import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Linkedin, href: '#' },
    ];

    const footerSections = [
        {
            title: 'فرۆشگا',
            links: ['دەربارەی ئێمە', 'کارەکان', 'راگەیاندنەکان', 'پەیوەندی'],
        },
        {
            title: 'پۆلەکان',
            links: ['پیاوان', 'ژنان', 'منداڵان', 'ئیکسسوارات'],
        },
        {
            title: 'یارمەتی',
            links: ['خزمەتگوزاری کڕیار', 'شێوازی گەڕاندنەوە', 'پرسیارە باوەکان', 'شوێنپێی داواکاری'],
        },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">فرۆشگا</h2>
                        <p className="text-gray-400">
                            باشترین شوێن بۆ کڕینی جلوبەرگی کوالێتی بەرز و مۆدێرن.
                        </p>
                        <div className="flex space-x-4 space-x-reverse">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                                    <social.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.slice(1).map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} فرۆشگا. هەموو مافێکی پارێزراوە.
                    </p>
                     <div className="mt-4 sm:mt-0">
                        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment methods" className="h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
