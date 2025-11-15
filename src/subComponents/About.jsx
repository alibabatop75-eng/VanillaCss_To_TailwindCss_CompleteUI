import React from "react";

const About = () => {
  return (
    <section id="aboutUs_Mini" className="w-full py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-rufina text-custom-gray">ABOUT US</h1>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus error sit dignissimos illum optio, numquam molestias quod! Sed?
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptate vel quaerat sit repellat odio accusantium amet culpa a dignissimos ab, excepturi ipsum delectus officiis, rem optio ex recusandae eum.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nihil voluptatibus accusamus minus voluptatum dolores dignissimos velit nisi neque facere.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam voluptatibus necessitatibus? Ratione, omnis quo.
              </p>
            </div>
            <button className="bg-custom-gray text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 mt-4">
              We strive to offer you best possible homes to stay!
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 lg:h-80">
              <img 
                src="/people.jpg" 
                alt="people" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-64 lg:h-80 mt-8">
              <img 
                src="/people2.jpg" 
                alt="people2" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;