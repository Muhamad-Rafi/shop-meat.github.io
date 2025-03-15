
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-butcher tracking-tight">Prime Cuts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground/90 hover:text-butcher transition-colors duration-200">Home</Link>
            <Link to="/shop" className="text-foreground/90 hover:text-butcher transition-colors duration-200">Shop</Link>
            <Link to="/about" className="text-foreground/90 hover:text-butcher transition-colors duration-200">About Us</Link>
            <Link to="/contact" className="text-foreground/90 hover:text-butcher transition-colors duration-200">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-foreground/70 hover:text-butcher transition-colors duration-200" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="relative text-foreground/70 hover:text-butcher transition-colors duration-200" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-butcher text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground/70 hover:text-butcher transition-colors duration-200" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6 pt-24">
          <Link to="/" className="py-3 text-lg font-medium border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="py-3 text-lg font-medium border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/about" className="py-3 text-lg font-medium border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="py-3 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
