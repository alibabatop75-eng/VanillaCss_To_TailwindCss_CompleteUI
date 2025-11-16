import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";  

const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-400/55 to-transparent pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl lg:text-4xl font-rufina text-white text-left mb-8">
          {filteredVilla.name}
        </h3>
        
        {/* Images Section */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px] mt-8">
          {/* Main Image */}
          <div className="lg:flex-1 h-80 lg:h-full">
            <img 
              src={filteredVilla.image} 
              alt={filteredVilla.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Other Images Grid */}
          <div className="lg:flex-1 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              <img 
                src="/landing.jpg" 
                alt="villa" 
                className="flex-1 h-40 sm:h-auto object-cover rounded-lg"
              />
              <img 
                src="/people.jpg" 
                alt="villa" 
                className="flex-1 h-40 sm:h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              <img 
                src="/people2.jpg" 
                alt="villa" 
                className="flex-1 h-40 sm:h-auto object-cover rounded-lg"
              />
              <img 
                src="/villa10.jpg" 
                alt="villa" 
                className="flex-1 h-40 sm:h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Villa Details */}
        <h4 className="text-2xl lg:text-3xl font-rufina text-gray-900 text-left my-8">
          {filteredVilla.location}
        </h4>
        
        <p className="text-lg mb-8 text-gray-700">
          {filteredVilla.bedrooms} Bedrooms / {filteredVilla.guests} Guests /{" "}
          {filteredVilla.bathrooms} Bathrooms / {filteredVilla.squareMeter} m² Area
        </p>

        {/* Check-in/Check-out */}
        <div className="flex flex-col sm:flex-row gap-8 my-8">
          <div>
            <h5 className="text-xl lg:text-2xl font-rufina text-gray-800">
              Check In: <span className="font-normal text-gray-600">9:00 AM</span>
            </h5>
          </div>
          <div>
            <h5 className="text-xl lg:text-2xl font-rufina text-gray-800">
              Check Out: <span className="font-normal text-gray-600">11:00 PM</span>
            </h5>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-16">
          <h4 className="text-3xl font-rufina text-left mb-6 text-gray-800">LOCATION</h4>
          <iframe
            src=" "
            className="w-full h-80 lg:h-96 border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Villa Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SingleVilla;