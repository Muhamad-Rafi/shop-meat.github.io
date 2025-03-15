
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    'Locally sourced from trusted farms',
    'Hand-selected premium cuts',
    'Expert butchers with decades of experience',
    'Sustainable and ethical practices',
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
              alt="Premium meat sources" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-display font-bold text-butcher">25+</p>
              <p className="text-foreground/70">Years of Excellence</p>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1 mb-4 bg-butcher/10 text-butcher rounded-full text-sm font-medium">Our Story</span>
            <h2 className="section-title mb-6">A Tradition of Quality Since 1998</h2>
            <p className="text-foreground/70 mb-6">
              For over two decades, Prime Cuts has been delivering the finest quality meats to discerning customers. Our journey began with a simple philosophy: provide exceptional cuts from responsibly raised animals, prepared with traditional craftsmanship.
            </p>
            <p className="text-foreground/70 mb-8">
              Today, that commitment to quality remains at the heart of everything we do. Our master butchers select only the best cuts, ensuring each piece meets our exacting standards before it reaches your table.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 bg-butcher/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-butcher" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
