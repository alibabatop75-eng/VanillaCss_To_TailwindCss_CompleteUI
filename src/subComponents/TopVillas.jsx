import React from "react";
import { villas } from "../villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopVillas = () => {
  return (
    <section id="topVillas" className="w-full py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-rufina text-custom-dark mb-6">TOP PICK VILLAS</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse consequuntur eius, sed quos, itaque earum eos dolor minima delectus sequi exercitationem dolorem illo dicta provident voluptatum nihil nam. Assumenda!
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.slice(0,3).map((element) => {
            return (
              <Link 
                to={`/villa/${element.id}`} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-200"
                key={element.id}
              >
                <div className="relative">
                  <img 
                    src={element.image} 
                    alt={element.name} 
                    className="w-full h-64 object-cover rounded-br-[45px]"
                  />
                  <div className="absolute top-4 left-4 bg-custom-gold text-gray-900 text-lg border-0 rounded-br-[20px] px-4 py-2">
                    From <span className="font-bold">Rs.{element.dailyRent} / Day</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                    <span className="font-bold">{element.location}</span>
                    <RxDot />
                    <span>{element.category}</span>
                  </div>
                  <div className="text-2xl font-rufina text-gray-800 mb-6">{element.name}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center text-center">
                      <IoIosPeople className="text-custom-blue text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.guests}</span>
                      <span className="text-xs text-gray-500">Guests</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaBed className="text-custom-blue text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.bedrooms}</span>
                      <span className="text-xs text-gray-500">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <BiArea className="text-custom-blue text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.squareMeter}</span>
                      <span className="text-xs text-gray-500">Area</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaBath className="text-custom-blue text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.bathrooms}</span>
                      <span className="text-xs text-gray-500">Bathrooms</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopVillas;