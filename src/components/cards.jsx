import React from 'react'
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='bg-white w-full px-[30px] py-[30px]  md:py-[6rem] md:px-0'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

        <div className='w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-400'>
          <img src={single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-center font-bold py-8 text-2xl'>Single User</h2>
          <p className='text-center font-bold  text-4xl'>$149</p>
          <div className='text-center font-medium'>
            <p className=' border-b py-2 mt-8'>500 GB Storage</p>
            <p className=' border-b py-2'>1 User Allowed</p>
            <p className=' border-b py-2'>send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] py-3 px-6 rounded-md font-medium w-[200px] mx-auto my-6  hover:scale-105 duration-400 hover:bg-yellow-400 hover:text-gray-700'>
            start trial
          </button>
        </div>

        <div className='w-full border flex flex-col p-4 md:my-0 my-8 bg-gray-100 rounded-lg shadow-xl hover:scale-105 duration-400'>
          <img src={double} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
          <h2 className='text-center font-bold py-8 text-2xl'>Partnership</h2>
          <p className='text-center font-bold  text-4xl'>$199</p>
          <div className='text-center font-medium'>
            <p className=' border-b py-2 mt-8'>1 TB Storage</p>
            <p className=' border-b py-2'>3 Users Allowed</p>
            <p className=' border-b py-2'>send up to 10 GB</p>
          </div>
          <button className='text-[#00df9a] bg-black py-3 px-6 rounded-md font-medium w-[200px] mx-auto my-6  hover:scale-105 duration-400 hover:bg-yellow-400 hover:text-gray-700'>
            start trial
          </button>
        </div>

        <div className='w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-400 '>
          <img src={triple} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-center font-bold py-8 text-2xl'>Group Acount</h2>
          <p className='text-center font-bold text-4xl'>$299</p>
          <div className='text-center font-medium'>
            <p className=' border-b py-2 mt-8'>5 TB Storage</p>
            <p className=' border-b py-2'>10 Users Allowed</p>
            <p className=' border-b py-2'>send up to 20 GB</p>
          </div>
          <button className='bg-[#00df9a] py-3 px-6 rounded-md font-medium w-[200px] mx-auto my-6  hover:scale-105 duration-400 hover:bg-yellow-400 hover:text-gray-700'>
            start trial
          </button>
        </div>

      </div>
    </div>
  )
}

export default Cards