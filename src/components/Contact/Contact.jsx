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

            <ul className="flex space-x-4">
              <Link to={"https://facebook.com"} target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"https://google.com"} target="_blank" className="text-red-600 hover:text-red-800 text-2xl transition-colors">
                <FaGoogle />
              </Link>
              <Link to={"https://instagram.com"} target="_blank" className="text-pink-600 hover:text-pink-800 text-2xl transition-colors">
                <FaInstagram />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;