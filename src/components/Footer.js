import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch
} from 'react-icons/fa'

function Footer() {
  return (
      <>      
        <footer>
            <div className='w-full mt-20 bg-gray-800 text-gray-300 py-8 px-4'>
                <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 pb-6'>
                    <div>
                        <h4 className='font-bold uppercase pt-2'>Solutions</h4>
                        <ul>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Analytics</li>
                            <li className='py-1'>Commerce</li>
                            <li className='py-1'>Data</li>
                            <li className='py-1'>Cloud</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold uppercase pt-2'>Support</h4>
                        <ul>
                            <li className='py-1'>Pricing</li>
                            <li className='py-1'>Documentation</li>
                            <li className='py-1'>Guides</li>
                            <li className='py-1'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold uppercase pt-2'>Company</h4>
                        <ul>
                            <li className='py-1'>About</li>
                            <li className='py-1'>Blog</li>
                            <li className='py-1'>Jobs</li>
                            <li className='py-1'>Press</li>
                            <li className='py-1'>Partners</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold uppercase pt-2'>Legal</h4>
                        <ul>
                            <li className='py-1'>Claims</li>
                            <li className='py-1'>Privancy</li>
                            <li className='py-1'>Policies</li>
                            <li className='py-1'>Conditions</li>
                        </ul>
                    </div>
                    <div className='col-span-2 pt-8 md:pt-2'>
                        <h3 className='font-bold uppercase'>Subscribe to our newsletter</h3>
                        <p className='py-4'>The lates news articles, and resources, sent to your inbox weekly.</p>
                        <form className='flex flex-col sm:flex-row'>
                            <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" placeholder='your@email.com' />
                            <button className='p-2 mb-4'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='flex items-center max-w-[1204px] mx-auto px-4 pt-6 justify-between flex-col sm:flex-row text-center text-gray-500'>
                    <small>2022 Workflow, LLC. All rights reserved.</small>
                    <div className='flex justify-between text-2xl pt-4 sm:pt-0 sm:w-[300px]'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaTwitch/>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </footer>
      </>
  )
}

export default Footer