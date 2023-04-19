import React ,{useState}from 'react'
import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'
function Navbar() {
  const [nav ,setNav]= useState(true)
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center text-white h-24 px-4 mx-auto max-w-[1240px]'>
      <h1 className='text-3xl font-bold uppercase text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex' >
        <li className='p-4 hover:text-yellow-400 hover:font-bold  active:text-blue-500 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-yellow-400 hover:font-bold active:text-blue-500 cursor-pointer'>Comapany</li>
        <li className='p-4 hover:text-yellow-400 hover:font-bold active:text-blue-500 cursor-pointer'>Resources</li>
        <li className='p-4 hover:text-yellow-400 hover:font-bold active:text-blue-500  cursor-pointer'>About</li>
        <li className='p-4 hover:text-yellow-400 hover:font-bold active:text-blue-500  cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineMenu Size={25}/>: <AiOutlineClose size={25}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full  bg-[#001144] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <ul className='pt-20'>
          <li className='p-4 border-b border-b-gray-500 hover:text-yellow-400 hover:font-bold cursor-pointer active:text-green-400'>Home</li>
          <li className='p-4 border-b border-b-gray-500 hover:text-yellow-400 hover:font-bold cursor-pointer  active:text-green-400'>Comapany</li>
          <li className='p-4 border-b border-b-gray-500 hover:text-yellow-400 hover:font-bold cursor-pointer  active:text-green-400'>Resources</li>
          <li className='p-4 border-b border-b-gray-500 hover:text-yellow-400 hover:font-bold cursor-pointer  active:text-green-400'>About</li>
          <li className='p-4 hover:text-yellow-400 hover:font-bold cursor-pointer  active:text-green-400'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
