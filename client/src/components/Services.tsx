import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollUtils';
import { serviceItems } from '@/lib/constants';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  features: string[];
}> = ({ title, description, icon, features }) => (
  <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
    <div className="h-3 gradient-overlay"></div>
    <div className="p-6">
      <div className="w-16 h-16 bg-[#8B4513] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
        <i className={`fas fa-${icon} text-2xl text-[#8B4513]`}></i>
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-[#3D7B80] mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#8B4513] mb-4">Services Offered</h2>
          <p className="text-lg text-gray-600">
            Customized instruction to help you achieve your musical goals, whether you're just starting out or looking to refine advanced techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-[#8B4513] hover:bg-opacity-90 text-white text-lg px-6 py-6"
            onClick={() => scrollToSection('contact')}
          >
            Schedule Your First Lesson
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
