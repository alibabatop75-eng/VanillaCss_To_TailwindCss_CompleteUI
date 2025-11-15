import React from 'react'

const Host = () => {
  return (
    <section 
      id='host' 
      className="w-full py-16 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/host2.jpg)'}}
    >
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-2 font-semibold">BECOME A HOST</p>
          <h3 className="text-3xl lg:text-4xl font-rufina mb-6 text-gray-800">Become a host</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nam facilis odit officiis quod fuga, aut expedita nostrum perferendis molestiae.
          </p>
          <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300">
            JOIN TODAY
          </button>
        </div>
      </div>
    </section>
  )
}

export default Host