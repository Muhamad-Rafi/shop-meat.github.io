
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="inline-block mb-8">
            <div className="text-9xl font-display font-bold text-butcher">404</div>
            <div className="w-full h-2 bg-butcher rounded-full mb-6"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Page Not Found</h1>
          <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-butcher text-white rounded-md hover:bg-butcher-dark transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
