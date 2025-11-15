import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section 
      id="contact_Mini" 
      className="w-full py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/contact.jpg)'}}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-rufina text-gray-800">Let's connect</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <span className="text-gray-600">+91 000 000 0000</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <span className="text-gray-600">rs@gmail.com</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Address</p>
                  <span className="text-gray-600">House No.123 Sector A-1</span>
                </div>
              </div>
              <ul className="flex space-x-4">
                <Link to={"/facebook"} target="_blank" className="text-gray-600 hover:text-gray-800 text-2xl transition-colors">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank" className="text-gray-600 hover:text-gray-800 text-2xl transition-colors">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank" className="text-gray-600 hover:text-gray-800 text-2xl transition-colors">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl lg:text-3xl font-rufina text-gray-800 mb-6">We'd love to hear from you</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <textarea 
                  rows="4" 
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;