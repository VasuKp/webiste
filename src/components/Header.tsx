import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react';
import csulogo from '@/assets/csulogo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
                    {/* Professional Logo */}
                    <div className="flex-shrink-0 flex items-center min-w-0">
                        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group no-underline">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                                <img src={csulogo} alt="CSU Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-sm sm:text-lg lg:text-xl font-bold text-white tracking-tight">
                                <span className="hidden sm:inline">Cybersecurity Umbrella</span>
                                <span className="sm:hidden">CSU</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <Link 
                            to="/" 
                            className="text-white hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium tracking-wide no-underline"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/services" 
                            className="text-white hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium tracking-wide no-underline"
                        >
                            Services
                        </Link>
                        <Link 
                            to="/products" 
                            className="text-white hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium tracking-wide no-underline"
                        >
                            Products
                        </Link>
                        <Link 
                            to="/industries" 
                            className="text-white hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium tracking-wide no-underline"
                        >
                            Industries
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-white hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium tracking-wide no-underline"
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-white hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium tracking-wide no-underline"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link to="/login">
                            <Button 
                                variant="ghost" 
                                className="text-white hover:text-red-300 hover:bg-gray-800/50 font-medium border-0"
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/get-demo">
                            <Button 
                                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md text-sm border-none"
                            >
                                Get Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-md">
                        <div className="py-4 space-y-1">
                            <Link 
                                to="/" 
                                className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors rounded-lg px-4 py-3 text-base font-medium no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/services" 
                                className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors rounded-lg px-4 py-3 text-base font-medium no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link 
                                to="/products" 
                                className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors rounded-lg px-4 py-3 text-base font-medium no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link 
                                to="/industries" 
                                className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors rounded-lg px-4 py-3 text-base font-medium no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Industries
                            </Link>
                            <Link 
                                to="/about" 
                                className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors rounded-lg px-4 py-3 text-base font-medium no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                to="/contact" 
                                className="block text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors rounded-lg px-4 py-3 text-base font-medium no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            
                            <div className="pt-4 mt-4 border-t border-gray-800/50 space-y-2">
                                <Link to="/login" className="block">
                                    <Button 
                                        variant="ghost" 
                                        className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium border-0"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link to="/get-demo" className="block">
                                    <Button 
                                        className="bg-red-500 hover:bg-red-600 text-white w-full font-medium rounded-lg shadow-sm border-none"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header