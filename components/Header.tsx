"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm shadow-sm">
            {/* Change max-w-7xl to max-w-full */}
{/* Removes the max-width restriction entirely while keeping your side paddings */}
<nav className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 rounded-md ">


                <div className="flex items-center justify-between gap-2">
                    {/* Logo/Brand */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-black hover:text-earth-600 transition flex-shrink-0"
                    >
                        <span className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-terracotta-500 to-forest-600 rounded-full flex-shrink-0">
                            <img src="logo.png" alt="Kaadu Golla" className="w-full h-full object-cover rounded-full" />
                        </span>
                        <span className="hidden xs:inline sm:inline">Kaadu Golla Tribal Community :
                             ಕಾಡು ಗೊಲ್ಲ ಬುಡಕಟ್ಟು ಜನಾಂಗ</span>
                        
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
    <Link href="/culture" className="relative text-black dark:text-black hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors group">
        culture
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
    
    <Link href="/events" className="relative text-black dark:text-black hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors group">
        Events
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
    
    <Link href="/figures" className="relative text-black dark:text-black hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors group">
        Figures
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
    
    {/* Added ml-2 to give the black button a slight extra separation from text links */}
    <Link href="/CommunityProducts" className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-black text-white hover:bg-white hover:shadow-lg hover:text-black border border-black transition-all">
        Community Products
    </Link>
</div>

                    {/* Right Side Actions Panel (STAYS VISIBLE ON VERTICAL MOBILE) */}
                    <div className="flex items-center space-x-2">
                        {/* Permanent Mobile Support Us Button */}
                        <Link
                            href="/support"
                            className="flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-terracotta-600 text-white hover:bg-terracotta-600 transition"
                        >
                            Support Us
                        </Link>

                        {/* Desktop-only Contact button */}
                        <a
                            href="mailto:contact@kaadugolla.in"
                            className="hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium bg-terracotta-600 text-white hover:bg-terracotta-600 transition"
                        >
                            Contact
                        </a>

                        {/* Mobile Hamburger Trigger */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-earth-50 flex-shrink-0"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown (Excludes support us because it is already on top) */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-1 pt-2 border-t border-gray-100">
                        <Link href="/culture" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-earth-50" onClick={() => setIsMenuOpen(false)}>Culture</Link>
                        <Link href="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-earth-50" onClick={() => setIsMenuOpen(false)}>Events</Link>
                        <Link href="/figures" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-earth-50" onClick={() => setIsMenuOpen(false)}>Figures</Link>
                        <a href="mailto:contactkaadugolla@gmail.com" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-earth-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </nav>
        </header>
    );
}
