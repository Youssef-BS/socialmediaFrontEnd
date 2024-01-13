import React from 'react'
import "./navbar.css"

const Navbar = () => {
 
    return (
   <>
  <div className='navbar flex justify-between w-9/12 h-20 items-center bg-blue-300 m-auto mt-4 rounded-2xl'>
    <h1 className='font-semibold text-3xl cursor-pointer text-blue-700 ml-4'>YsfConnect</h1>
    <div className='flex cursor-pointer mr-4'>
    <p>Home</p>
    <p>Messanger</p>
    <p>Friends</p>
    <p>menu</p>
    </div>
  </div> 
   </>
  )
}

export default Navbar