import React from 'react'
import { villas } from '../../villas';  // ✅ "../../villas" သုံးပါ
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Villas = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-b from-gray-400/55 to-transparent" id='allVillas'>
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-rufina text-white mb-6">ALL VILLAS</h1>
          <p className="text-white text-xl">{villas.length} Properties</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.map((element) => {
            return (
              <Link 
                to={`/villa/${element.id}`} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200" 
                key={element.id}
              >
                <div className="relative">
                  <img 
                    src={element.image} 
                    alt={element.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-100 text-gray-900 text-lg border-0 rounded-br-[20px] px-4 py-2">
                    From <span className="font-bold">Rs.{element.dailyRent} / Day</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                    <span className="font-bold">{element.location}</span>
                    <RxDot />
                    <span>{element.category}</span>
                  </div>
                  <div className="text-2xl font-rufina text-gray-800 mb-6">{element.name}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center text-center">
                      <IoIosPeople className="text-blue-800 text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.guests}</span>
                      <span className="text-xs text-gray-500">Guests</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaBed className="text-blue-800 text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.bedrooms}</span>
                      <span className="text-xs text-gray-500">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <BiArea className="text-blue-800 text-2xl mb-2" />
                      <span className="font-semibold text-lg">{element.squareMeter}</span>
                      <span className="text-xs text-gray-500">Area</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaBath className="text-blue-800 text-2xl mb-2" />
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
    </div>
  )
}

export default Villas