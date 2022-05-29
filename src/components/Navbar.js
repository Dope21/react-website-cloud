import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll'

function Navbar() {

  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)

  return (
    <>
      <header>
          <nav className='fixed w-screen h-[80px] z-10 bg-white drop-shadow-lg'>
              <div className="px-4 flex justify-between items-center w-full h-full">
                  <div className='flex items-center'>
                      <h1 className='text-3xl font-bold mr-4 sm:text-4xl cursor-pointer'><Link to='hero' smooth={true} duration={500}>Cloud.</Link></h1>
                      <ul className="hidden md:flex">
                        <li className='nav__main'><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                        <li className='nav__main'><Link to='about' smooth={true} duration={500} offset={-200}>About</Link></li>
                        <li className='nav__main'><Link to='support' smooth={true} duration={500} offset={-50}>Support</Link></li>
                        <li className='nav__main'><Link to='all-in-one' smooth={true} duration={500} offset={-100}>Plateforms</Link></li>
                        <li className='nav__main'><Link to='pricing' smooth={true} duration={500} offset={-50}>Pricing</Link></li>
                      </ul>
                  </div>
                  <div className='hidden md:flex pr-4'>
                      <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                      <button className='px-8 py-3'>Sign Up</button>
                  </div>
                  <div className='md:hidden cursor-pointer' onClick={ toggleNav }>  
                      { nav ? <XIcon className='w-5' /> : <MenuIcon className='w-5'/>}
                  </div>
              </div>

              <ul className={ nav ? 'md:hidden absolute left-0 bg-white w-full h-screen px-8 transition-all' : 'md:hidden absolute -left-full transition-all'}>
                <li className='nav__sub'><Link onClick={toggleNav} className='w-full' to='hero' smooth={true} duration={500}>Home</Link></li>
                <li className='nav__sub'><Link onClick={toggleNav} className='w-full' to='about' smooth={true} duration={500} offset={-200}>About</Link></li>
                <li className='nav__sub'><Link onClick={toggleNav} className='w-full' to='support' smooth={true} duration={500} offset={-50}>Support</Link></li>
                <li className='nav__sub'><Link onClick={toggleNav} className='w-full' to='all-in-one' smooth={true} duration={500} offset={-100}>Plateforms</Link></li>
                <li className='nav__sub'><Link onClick={toggleNav} className='w-full' to='pricing' smooth={true} duration={500} offset={-50}>Pricing</Link></li>
                <div className='flex flex-col my-4'>
                  <button className='bg-transparent text-violet-600 px-8 py-3 mb-4'>Sing In</button>
                  <button className='px-8 py-3'>Sing Up</button>
                </div>
              </ul>    
          </nav>
      </header>
    </>
  )
}

export default Navbar