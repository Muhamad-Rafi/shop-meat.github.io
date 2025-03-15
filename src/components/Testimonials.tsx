
import React, { useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Home Chef',
    content: 'The quality of meat from Prime Cuts is exceptional. I've been a customer for years, and their ribeye steaks are always perfectly marbled and full of flavor.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content: 'As a restaurant owner, consistency is key. Prime Cuts delivers the same high-quality products every time, which is why they're our exclusive meat supplier.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    content: 'I've tried meats from many butchers across the country, and Prime Cuts truly stands out. Their attention to detail and commitment to quality is unmatched.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-butcher-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 bg-butcher/10 text-butcher rounded-full text-sm font-medium">Testimonials</span>
          <h2 className="section-title mb-4">What Our Customers Say</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about our products and service.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 h-10 w-10 bg-white rotate-45 shadow-sm"></div>
            
            <div className="text-center">
              <p className="text-lg md:text-xl italic text-foreground/80 mb-8">"{testimonials[activeIndex].content}"</p>
              
              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full border-2 border-butcher/20">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="font-medium text-lg">{testimonials[activeIndex].name}</h4>
              <p className="text-foreground/60 text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-10 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-butcher' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
