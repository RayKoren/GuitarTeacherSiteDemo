import React from 'react';
import { scrollToSection } from '@/lib/scrollUtils';
import { contactInfo } from '@/lib/constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl font-display font-bold mb-4">John D Cox Music</h1>
            <p className="text-gray-400 max-w-xs">
              Providing quality music education to students in Sheridan, Wyoming and beyond through virtual lessons.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('performances')} className="text-gray-400 hover:text-white transition-colors">Performances</button></li>
                <li><button onClick={() => scrollToSection('gigs')} className="text-gray-400 hover:text-white transition-colors">Upcoming Gigs</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Guitar Lessons</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Vocal Lessons</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Music Theory</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Kids' Programs</button></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-[#E6A067]"></i>
                  <span className="text-gray-400">{contactInfo.location}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-2 text-[#E6A067]"></i>
                  <a href="tel:+13077637913" className="text-gray-400 hover:text-white transition-colors">{contactInfo.phone}</a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-[#E6A067]"></i>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">{contactInfo.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} John D Cox Music. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
