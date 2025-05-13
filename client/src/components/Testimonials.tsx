import React from 'react';
import { testimonials } from '@/lib/constants';

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  initials: string;
  status: string;
}> = ({ quote, name, initials, status }) => (
  <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
    <div className="flex items-center mb-4">
      <i className="fas fa-quote-left text-4xl text-[#E6A067] opacity-30"></i>
    </div>
    <p className="text-gray-700 mb-6 italic">
      "{quote}"
    </p>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center">
          <span className="font-semibold">{initials}</span>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{status}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#8B4513] mb-4">What My Students Say</h2>
          <p className="text-lg text-gray-600">
            Hear from students who have transformed their musical abilities through dedicated practice and instruction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              initials={testimonial.initials}
              status={testimonial.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
