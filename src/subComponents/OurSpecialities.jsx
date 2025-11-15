import React from "react";
import { SiWeightsandbiases } from "react-icons/si";
import { MdFitnessCenter, MdElectricCar, MdOutlinePets } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const OurSpecialities = () => {
  const specialities = [
    {
      id: 1,
      title: "Seafront",
      icon: <SiWeightsandbiases className="text-3xl" />,
      subText: "Have a look"
    },
    {
      id: 2,
      title: "Pet Friendly",
      icon: <MdOutlinePets className="text-3xl" />,
      subText: "Pets allowed"
    },
    {
      id: 3,
      title: "Electric Car",
      icon: <MdElectricCar className="text-3xl" />,
      subText: "Change your car"
    },
    {
      id: 4,
      title: "Fitness/Gym",
      icon: <MdFitnessCenter className="text-3xl" />,
      subText: "Work out"
    },
    {
      id: 5,
      title: "Boat Morning",
      icon: <FaSailboat className="text-3xl" />,
      subText: "Take a trip"
    },
  ];
  
  return (
    <section id="ourSpecialities" className="w-full py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-rufina text-custom-gray mb-4">OUR PROPERTIES SPECIALITIES</h1>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specialities.map(element => {
            return(
              <div 
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2" 
                key={element.id}
              >
                <div className="text-custom-gray mb-4 flex justify-center">{element.icon}</div>
                <div className="text-lg font-rufina text-gray-800 mb-2">{element.title}</div>
                <div className="text-custom-gray text-sm flex items-center justify-center gap-1">
                  {element.subText} <FaLongArrowAltRight />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialities;