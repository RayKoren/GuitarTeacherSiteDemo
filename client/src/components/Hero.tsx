import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollUtils';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
            Music Lessons in Sheridan, Wyoming
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
            Professional guitar instruction for all ages and skill levels
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-[#8B4513] hover:bg-opacity-90 text-white text-lg px-6 py-6"
            >
              <a href="tel:+13077637913">
                <i className="fas fa-phone-alt mr-2"></i>Call Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-[#8B4513] hover:bg-opacity-90 text-lg px-6 py-6"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
