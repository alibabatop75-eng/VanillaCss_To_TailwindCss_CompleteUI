import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center px-4 relative" 
      style={{backgroundImage: 'url(/landing.jpg)'}}>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-rufina text-black mb-8">BE OUR GUEST</h1>
        <p className="text-sm md:text-3xl lg:text-3xl text-gray-400 bg-white px-5 py-3 inline-block">
          LIVE LIKE A KING IN OUR BEST HOUSES
        </p>
    </section>
  )
}

export default HeroSection