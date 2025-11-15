// src/components/AboutUs/AboutUs.jsx
import React from "react";
import AboutComponentMini from "../../subComponents/About";

const AboutUs = () => {
  return (
    <section id="aboutPage" className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/about.jpg" 
              alt="about" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-rufina text-green-900">
                Your peace of mind, our priority!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem magnam totam alias harum sit facilis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste perferendis ab quod deserunt ipsam pariatur minus sit assumenda, voluptatem commodi reiciendis, est dicta fuga?
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sunt consequatur dolorem saepe pariatur nulla molestiae a labore!
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;