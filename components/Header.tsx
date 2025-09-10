import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/ericqian7',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: 'hover:text-gray-300'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/e-qian/',
        icon: 'https://api.iconify.design/logos/linkedin-icon.svg',
        color: 'hover:text-blue-400'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/ericqian7',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg',
        color: 'hover:text-pink-400'
    }
];

const sectionLinks = [
    { name: 'Home', id: 'intro' },
    { name: 'Experience', id: 'experience' },
    { name: 'Cooking', id: 'cooking' },
    { name: 'Outdoors', id: 'outdoors' }
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            console.log('mousedown event fired, target:', e.target);
            // Don't close if clicking on the hamburger button itself
            const target = e.target as Node;
            const hamburgerButton = document.querySelector('[aria-label*="menu"]');
            
            if (hamburgerButton && hamburgerButton.contains(target)) {
                console.log('Clicked on hamburger button, not closing');
                return;
            }
            
            if (menuRef.current && !menuRef.current.contains(target)) {
                console.log('Clicked outside, closing menu');
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            console.log('Adding mousedown listener');
            document.addEventListener('mousedown', handleClick);
        } else {
            console.log('Removing mousedown listener');
            document.removeEventListener('mousedown', handleClick);
        }
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    // Scroll to section without changing URL
    const handleSectionClick = (id: string) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-400/30"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Social Links (always visible, left) */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 border border-cyan-400/30 transition-all duration-200 ${link.color} hover:border-cyan-400/60 hover:bg-gray-800/80`}
                            >
                                <img
                                    src={link.icon}
                                    alt={link.name}
                                    className="w-5 h-5 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-200"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Hamburger Icon (right) */}
                    <button
                        className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Button mousedown, current state:', menuOpen);
                            setMenuOpen(prev => {
                                console.log('Setting menu to:', !prev);
                                return !prev;
                            });
                        }}
                    >
                        <span className="sr-only">Menu</span>
                        <motion.div
                            initial={false}
                            animate={{ rotate: menuOpen ? 90 : 0 }}
                            className="w-6 h-6 flex flex-col justify-between"
                        >
                            <span className={`block h-0.5 w-full bg-cyan-400 rounded transition-all duration-200 ${menuOpen ? 'mb-0' : 'mb-1'}`}></span>
                            <span className={`block h-0.5 w-full bg-cyan-400 rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block h-0.5 w-full bg-cyan-400 rounded transition-all duration-200 ${menuOpen ? 'mt-0' : 'mt-1'}`}></span>
                        </motion.div>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                ref={menuRef}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-16 right-4 w-64 bg-gray-900 border-2 border-cyan-400/50 rounded-xl shadow-xl p-6 flex flex-col space-y-4 z-50"
                            >
                                <div className="flex flex-col space-y-2">
                                    {sectionLinks.map((link) => (
                                        <button
                                            key={link.id}
                                            className="text-left text-cyan-300 font-mono text-lg hover:text-pink-400 transition-colors py-2 px-2 rounded-lg focus:outline-none focus:bg-cyan-400/10"
                                            onClick={() => handleSectionClick(link.id)}
                                        >
                                            {link.name}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.header>
    );
};

export default Header; 