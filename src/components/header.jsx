import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[880px] w-full h-[480px] text-center flex flex-col mt-[96px] mx-auto'>
        <p className='uppercase text-[#00df9a] text-lg py-2'>Growing with data analyzing</p>
        <h1 className='capitalize text-4xl sm:text-6xl md:text-7xl py-2 md:py-6 font-bold '>Grow with date</h1>
        <p className='text-xl font-bold sm:text-4xl md:text-5xl'>Fast , flexible , financing for</p>
        <p className='text-xl md:text-2xl text-gray-500 font-bold py-2 md:py-4'>Monitor your data analytics to increase revenue for BTB ,BTC & sass platforms</p>
        <button className='uppercase py-2 px-4 w-[200px] mx-auto bg-[#00df9a] text-black rounded-lg font-medium text-based my-4 md:my-2 hover:scale-105 duration-500 hover:bg-yellow-400 hover:text-gray-700'>get started</button>
      </div>
    </div>
  )
}

export default Hero
