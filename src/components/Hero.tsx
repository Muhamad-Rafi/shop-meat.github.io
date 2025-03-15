
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
          alt="Premium beef cuts" 
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-1 mb-6 bg-butcher/10 text-butcher rounded-full text-sm font-medium">Premium Butcher Shop</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">Finest Quality Meats for Your Table</h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">Expertly selected and professionally prepared cuts of the finest meat. From farm to table, we guarantee quality in every ounce.</p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary">Learn About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
