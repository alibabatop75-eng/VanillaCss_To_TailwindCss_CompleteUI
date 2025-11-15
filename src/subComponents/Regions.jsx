import React from 'react'

const Regions = () => {
  return (
    <section id='regions' className="w-full py-16 px-4 bg-orange-100">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-rufina text-dark mb-4">OUR REGIONS</h1>
          <p className="text-black-200 max-w-2xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, accusantium quo! Expedita sint iusto quaerat excepturi velit similique.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative h-96">
            <img 
              src="/region1.jpg" 
              alt="mountains" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-rufina mb-2">Mountains</h2>
              <p className="text-gray-200"><span className="font-bold text-white">90</span> Properties</p> 
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative h-96">
            <img 
              src="/region2.jpg" 
              alt="coastline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-rufina mb-2">Coastline</h2>
              <p className="text-gray-200"><span className="font-bold text-white">52</span> Properties</p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Regions