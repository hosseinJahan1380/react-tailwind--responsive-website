import React from 'react'

const NewSletter = () => {
  return (
    <div className='w-full text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 py-6'>
          <div className='lg:col-span-2 items-center mt-4'>
            <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-1 capitalize'>want tips & tricks to optimize your flow?</h1>
            <p className='text-gray-400 capitalize'>sign up to our newSletter and stay up to date</p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
              <input className='py-3 w-full rounded-md flex text-black font-medium px-2' type="email" name="" id="" placeholder='Enter your email' />
              <button className='ml-8 my-4 md:ml-4 py-2 px-4 w-[200px] bg-[#00df9a] text-black rounded-lg font-medium text-based  hover:scale-105 duration-500 hover:bg-yellow-400 hover:text-gray-700' >Notify me</button>
            </div>
            <p className='text-gray-400 capitalize'>we care about the protection of your data .Read our <span className='text-[#00df98]'>Privacy policy</span> </p>
          </div>
        </div>
    </div>
  )
}

export default NewSletter