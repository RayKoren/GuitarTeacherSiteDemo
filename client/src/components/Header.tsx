import React, { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/scrollUtils';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-opacity-95' : 'bg-opacity-90'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-[#8B4513]">
            John D Cox
            <span className="text-sm block text-[#3D7B80] font-body">Music Educator</span>
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="block md:hidden text-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavClick('about')} className="font-medium hover:text-[#8B4513] transition-colors">About</button>
          <button onClick={() => handleNavClick('services')} className="font-medium hover:text-[#8B4513] transition-colors">Services</button>
          <button onClick={() => handleNavClick('testimonials')} className="font-medium hover:text-[#8B4513] transition-colors">Testimonials</button>
          <button onClick={() => handleNavClick('performances')} className="font-medium hover:text-[#8B4513] transition-colors">Performances</button>
          <button onClick={() => handleNavClick('gigs')} className="font-medium hover:text-[#8B4513] transition-colors">Gigs</button>
          <button onClick={() => handleNavClick('contact')} className="font-medium hover:text-[#8B4513] transition-colors">Contact</button>
          <a href="tel:+13077637913" className="bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
            <i className="fas fa-phone-alt mr-2"></i>Call Now
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`md:hidden bg-white px-4 py-3 shadow-inner ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3">
          <button onClick={() => handleNavClick('about')} className="font-medium py-2 border-b border-gray-100 hover:text-[#8B4513] transition-colors text-left">About</button>
          <button onClick={() => handleNavClick('services')} className="font-medium py-2 border-b border-gray-100 hover:text-[#8B4513] transition-colors text-left">Services</button>
          <button onClick={() => handleNavClick('testimonials')} className="font-medium py-2 border-b border-gray-100 hover:text-[#8B4513] transition-colors text-left">Testimonials</button>
          <button onClick={() => handleNavClick('performances')} className="font-medium py-2 border-b border-gray-100 hover:text-[#8B4513] transition-colors text-left">Performances</button>
          <button onClick={() => handleNavClick('gigs')} className="font-medium py-2 border-b border-gray-100 hover:text-[#8B4513] transition-colors text-left">Gigs</button>
          <button onClick={() => handleNavClick('contact')} className="font-medium py-2 hover:text-[#8B4513] transition-colors text-left">Contact</button>
          <a href="tel:+13077637913" className="bg-[#8B4513] text-white text-center px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
            <i className="fas fa-phone-alt mr-2"></i>Call Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
