    import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X } from 'lucide-react';
    import DataModel from '../models/DataModel';
    import AppController from '../controllers/AppController';

    const Header = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = AppController.debounce(() => {
        setIsScrolled(window.scrollY > 50);
        }, 10);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        AppController.handleNavigation(sectionId);
        setIsMenuOpen(false);
        setActiveSection(sectionId);
    };

    return (
        <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled 
            ? 'bg-gray-900/80 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.button
                onClick={() => handleNavClick('home')}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {DataModel.company.name}
            </motion.button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
                {DataModel.navigation.map((item, index) => (
                <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {item.label}
                    {activeSection === item.id && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    )}
                </motion.button>
                ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <motion.button
                className="md:hidden relative z-50 p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                {isMenuOpen ? (
                    <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                    <X size={24} />
                    </motion.div>
                ) : (
                    <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                    <Menu size={24} />
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.button>
            </div>
            
            {/* Mobile Navigation Menu */}
            <AnimatePresence>
            {isMenuOpen && (
                <motion.nav
                className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-white/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                <div className="px-6 py-4 space-y-2">
                    {DataModel.navigation.map((item, index) => (
                    <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === item.id 
                            ? 'text-white bg-white/10' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                    >
                        {item.label}
                    </motion.button>
                    ))}
                </div>
                </motion.nav>
            )}
            </AnimatePresence>
        </div>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMenuOpen && (
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
            />
            )}
        </AnimatePresence>
        </motion.header>
    );
    };

    export default Header;