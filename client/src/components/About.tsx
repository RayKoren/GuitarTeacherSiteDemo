import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollUtils';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/30 to-[#E6A067]/30 rounded-lg z-10"></div>
              <img 
                src="/assets/jc.jpg" 
                alt="John D Cox - Music Teacher" 
                className="w-full h-auto object-cover relative"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#8B4513] mb-6">About John</h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              Welcome! I'm John Cox, a passionate musician and dedicated guitar instructor based in Sheridan, Wyoming. With over 15 years of performance experience and 10 years teaching students of all ages, I provide personalized instruction tailored to your musical goals.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              My teaching philosophy blends technical fundamentals with creative expression, ensuring that my students not only master their instrument but also develop their unique musical voice.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-music text-[#3D7B80] text-xl mr-2"></i>
                <span>Professional Musician</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-graduation-cap text-[#3D7B80] text-xl mr-2"></i>
                <span>Certified Teacher</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-users text-[#3D7B80] text-xl mr-2"></i>
                <span>All Ages Welcome</span>
              </div>
            </div>
            
            <Button 
              className="bg-[#3D7B80] hover:bg-opacity-90 text-white text-lg px-6 py-6" 
              onClick={() => scrollToSection('services')}
            >
              Explore My Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
