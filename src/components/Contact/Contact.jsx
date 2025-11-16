import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl pt-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-rufina text-gray-700 mb-4">CONTACT US</h1>
          <p className="text-gray-700 text-lg mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.
          </p>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid similique voluptas!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/about.jpg" 
              alt="about" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-rufina text-gray-700">Let's connect</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <span className="text-gray-700">+91 000 000 0000</span>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <span className="text-gray-700">rs@gmail.com</span>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <span className="text-gray-700">House No.123 Sector A-1</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <p className="text- text-gray-600 font-medium mb-4">Follow us on social media</p>
                <ul className="flex  space-x-3">
                  <li>
                    <Link 
                      to={"https://facebook.com"} 
                      target="_blank" 
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <RiFacebookBoxLine className="text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={"https://google.com"} 
                      target="_blank" 
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaGoogle className="text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={"https://instagram.com"} 
                      target="_blank" 
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-pink-500 bg-white text-pink-500 hover:bg-pink-500 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaInstagram className="text-xl" />
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;