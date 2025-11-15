// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const gotoHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50 py-5 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-white cursor-pointer hover:text-white transition-colors tracking-widest font-rufina"
            onClick={gotoHome}
          >
            PROPERTY RENTALS
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-14">
            <li>
              <Link 
                to={"/aboutus"} 
                className="text-gray-300 hover:text-white font-medium transition-colors relative py-2 inline-block group"
              >
                ABOUT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to={"/villas"} 
                className="text-gray-300 hover:text-white font-medium transition-colors relative py-2 inline-block group"
              >
                VILLAS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to={"/contact"} 
                className="text-gray-300 hover:text-white font-medium transition-colors relative py-2 inline-block group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <RxHamburgerMenu
            className="md:hidden text-3xl text-gray-300 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600 mt-4">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link 
                  to={"/aboutus"} 
                  className="block text-gray-300 hover:text-white font-medium transition-colors py-2 text-center border-b border-transparent hover:border-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link 
                  to={"/villas"} 
                  className="block text-gray-300 hover:text-white font-medium transition-colors py-2 text-center border-b border-transparent hover:border-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VILLAS
                </Link>
              </li>
              <li>
                <Link 
                  to={"/contact"} 
                  className="block text-gray-300 hover:text-white font-medium transition-colors py-2 text-center border-b border-transparent hover:border-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;