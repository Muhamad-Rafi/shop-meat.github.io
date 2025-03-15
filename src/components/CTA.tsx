
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
          alt="Farm field" 
          className="object-cover w-full h-full brightness-50"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-1 mb-6 bg-white/20 text-white backdrop-blur-sm rounded-full text-sm font-medium">Special Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Get 15% Off Your First Order</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">Sign up for our newsletter and receive a special discount code for your first purchase. Experience premium quality meat at an exceptional value.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 min-w-[300px]"
            />
            <button className="bg-white text-butcher px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-gray-100">
              <span>Subscribe</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
