import React from 'react'
import { 
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'
import HeroImg from '../assets/images/cyber-bg.png'

function Hero() {
  return (
    <>
        <section name="hero">
            <div className='w-full h-screen flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 items-center max-w-[1240px] m-auto px-4'>
                    <div className='flex flex-col justify-center md:items-start px-2 py-8 sm:pt-28 md:pt-8'>
                        <p className='text-xl sm:text-2xl'>Unique Sequencing & Production</p>
                        <h2 className='py-2 md:py-3 text-4xl md:text-7xl font-bold'>Clound Management</h2>
                        <p className='text-xl sm:text-2xl'>This is our Tech brand</p>
                        <button className='py-3 px-6 md:w-[60%] my-4'>Get Started</button>
                    </div>
                    <div>
                        <img src={HeroImg} alt="server" />
                    </div>
                    <div className='flex justify-center'>
                        <div 
                            className='absolute flex flex-col py-4 min-w-[90%] md:min-w-[768px] bottom-[5%]
                            md:left-1/2 transform md:-translate-x-1/2 backdrop-blur-sm bg-white/70 border 
                            border-slate-300 rounded-xl text-center shadow-xl'
                        >
                            <h3 className='mb-4'>Data Services</h3>
                            <div className='flex flex-wrap'>
                                <h4 className='flex flex-col justify-center items-center p-2 text-slate-600 w-1/4'><CloudUploadIcon className='h-6 text-violet-600'/> App Security</h4>
                                <h4 className='flex flex-col justify-center items-center p-2 text-slate-600 w-1/4'><DatabaseIcon className='h-6 text-violet-600'/>Dashboard Design</h4>
                                <h4 className='flex flex-col justify-center items-center p-2 text-slate-600 w-1/4'><ServerIcon className='h-6 text-violet-600'/>Cloud Data</h4>
                                <h4 className='flex flex-col justify-center items-center p-2 text-slate-600 w-1/4'><PaperAirplaneIcon className='h-6 text-violet-600'/>API</h4>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    </>
  )
}

export default Hero