import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-500 text-white'>
        <div className="logo">
            <span className='font-bold text-xl mx-9'>To-Do</span>
        </div>
        <ul className='flex justify-between gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar