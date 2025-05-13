import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollUtils';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 cta-section bg-cover bg-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Start Your Musical Journey?</h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
          Whether you're picking up an instrument for the first time or looking to refine your skills, I'm here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            className="bg-white text-[#8B4513] hover:bg-opacity-90 text-lg px-6 py-6"
            onClick={() => scrollToSection('contact')}
          >
            Schedule a Lesson
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:bg-opacity-10 text-lg px-6 py-6"
            asChild
          >
            <a href="tel:+13077637913">
              <i className="fas fa-phone-alt mr-2"></i>Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
