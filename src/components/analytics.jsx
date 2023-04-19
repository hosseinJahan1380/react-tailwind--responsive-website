import React from 'react'
import laptop from '../assets/laptop.jpg'


const Analytics = () => {
  return (
    <div className='w-full bg-white px-4 py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="" />
        <div className='flex flex-col justify-center'>
          <p className='uppercase text-[#00df9a] font-bold'>data Analytics dashboard</p>
          <h1 className='py-2 font-bold md:text-4xl sm:text-3xl text-2xl capitalize'>manage data Analytics centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa, asperiores! Ipsam quae temporibus minus ad? Alias animi, 
            sint consectetur ipsum culpa repellat minima eligendi suscipit.
          </p>
          <button className='uppercase py-2 px-4 w-[200px] mx-auto md:mx-0 text-[#00df9a] bg-black rounded-lg font-medium text-based my-4 md:my-4 duration-500 hover:scale-105  hover:bg-yellow-400 hover:text-gray-700'>get started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics