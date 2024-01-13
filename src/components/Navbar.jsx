import React from 'react'
import "./navbar.css"

const Navbar = () => {
 
    return (
   <>
  <div className='flex justify-between w-full p-6'>
    <h1 className='font-semibold text-3xl cursor-pointer'>YsfConnect</h1>
    <div className='flex'>
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