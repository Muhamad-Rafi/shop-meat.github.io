
import React from 'react';
import { ArrowRight } from 'lucide-react';

type Category = {
  id: number;
  name: string;
  image: string;
  count: number;
};

const categories: Category[] = [
  {
    id: 1,
    name: 'Premium Beef',
    image: 'https://images.unsplash.com/photo-1603048297172-c82feb3f2ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    count: 12
  },
  {
    id: 2,
    name: 'Pork',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    count: 8
  },
  {
    id: 3,
    name: 'Poultry',
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    count: 10
  },
  {
    id: 4,
    name: 'Lamb & Game',
    image: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    count: 6
  }
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 bg-butcher/10 text-butcher rounded-full text-sm font-medium">Browse By</span>
          <h2 className="section-title mb-4">Meat Categories</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Explore our extensive range of premium meats, carefully categorized for your convenience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-sm border border-border h-80">
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-medium mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4">{category.count} products</p>
                <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
                  <button className="text-white flex items-center text-sm font-medium hover:text-butcher-light transition-colors duration-200">
                    <span>Browse Category</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
