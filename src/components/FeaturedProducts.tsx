
import React from 'react';
import { ShoppingCart } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Ribeye Steak',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1603048297172-c82feb3f2ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Beef'
  },
  {
    id: 2,
    name: 'Pork Tenderloin',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Pork'
  },
  {
    id: 3,
    name: 'Whole Roasting Chicken',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Poultry'
  },
  {
    id: 4,
    name: 'Lamb Chops',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Lamb'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-butcher-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 bg-butcher/10 text-butcher rounded-full text-sm font-medium">Our Selection</span>
          <h2 className="section-title mb-4">Featured Products</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Discover our handpicked selection of premium cuts, each sourced from trusted farms and prepared with expert precision.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-butcher bg-butcher/10 px-2 py-1 rounded">{product.category}</span>
                <h3 className="text-lg font-medium mt-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                  <button className="w-10 h-10 rounded-full bg-butcher/10 hover:bg-butcher/20 flex items-center justify-center transition-colors duration-200">
                    <ShoppingCart className="h-5 w-5 text-butcher" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
