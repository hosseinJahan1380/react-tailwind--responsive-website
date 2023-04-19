import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        <div>
            <h1 className=' w-full text-[#00df9a] uppercase font-bold'>React.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In sapiente quia commodi vero facere aperiam obcaecati doloribus 
            repellat, ipsum praesentium.</p>
            <div className='flex justify-between my-6  w-[60%]'>
                <FaFacebookSquare size={30} className='mr-5 hover:translate-y-[-10px] duration-500 ease-in hover:text-red-800' />
                <FaInstagramSquare size={30} className='mr-5 hover:translate-y-[-10px] duration-500 ease-in-out hover:text-red-800'/>
                <FaGithubSquare size={30} className='mr-5 hover:translate-y-[-10px] duration-500 ease-in-out hover:text-red-800'/> 
                <FaDribbbleSquare size={30} className='mr-5 hover:translate-y-[-10px] duration-500 ease-in-out hover:text-red-800'/>
                <FaTwitterSquare size={30} className='hover:translate-y-[-10px] duration-500 ease-in-out hover:text-red-800'/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h1 className='text-gray-400 font-medium'>Solutions</h1>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>commerce</li>
                    <li className='py-2 text-sm'>insights</li>
                </ul>
            </div>

            <div>
                <h1 className='text-gray-400 font-medium'>Support</h1>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API status</li>
                </ul>
            </div>

            <div>
                <h1 className='text-gray-400 font-medium'>company</h1>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>careers</li>
                </ul>
            </div>

            <div>
                <h1 className='text-gray-400 font-medium'>legal</h1>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer