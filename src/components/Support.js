import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import SupportImg from '../assets/images/support.jpg'

function Support() {
  return (
      <>      
        <section name="support">
            <div className='w-full mt-24'>
                <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImg} alt="support" />
                </div>
                <div className='max-w-[1240px] mx-auto px-4 text-white relative'>
                    <div className='py-12 text-center'>
                        <h3 className='text-4xl font-bold py-6 text-center'>Finding the right team</h3>
                        <p className='px-6 pt-4 text-xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit ut unde, voluptate aspernatur, mollitia voluptates, qui adipisci sapiente fugit ipsum porro in labore? A quam reprehenderit tenetur corporis voluptate?</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-20 md:pt-12 text-black'>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <PhoneIcon className='w-16 p-4 bg-violet-600 text-white rounded-lg mt-[-4rem]' />
                                <h4 className='font-bold text-2xl my-4'>Sales</h4>
                                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quae neque quasi quibusdam repudiandae recusandae animi quam nostrum repellat exercitationem?</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-violet-600 cursor-pointer'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <SupportIcon className='w-16 p-4 bg-violet-600 text-white rounded-lg mt-[-4rem]' />
                                <h4 className='font-bold text-2xl my-4'>Technical Support</h4>
                                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quae neque quasi quibusdam repudiandae recusandae animi quam nostrum repellat exercitationem?</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-violet-600 cursor-pointer'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8'>
                                <ChipIcon className='w-16 p-4 bg-violet-600 text-white rounded-lg mt-[-4rem]' />
                                <h4 className='font-bold text-2xl my-4'>Media Inquiries</h4>
                                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quae neque quasi quibusdam repudiandae recusandae animi quam nostrum repellat exercitationem?</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-violet-600 cursor-pointer'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default Support