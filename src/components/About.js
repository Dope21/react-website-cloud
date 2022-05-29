import React from 'react'

function About() {
  return (
    <>
        <section name="about">
            <div className='w-full my-20'>
                <div className='max-w-[1240px] mx-auto px-4'>
                    <div className='text-center'>
                        <h3 className='text-4xl font-bold'>Trusted by developers across the world</h3>
                        <p className='text-xl p-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit non quod quia praesentium eaque fuga voluptatum a ratione maxime quasi, maiores, voluptates optio doloribus. Hic ipsam sequi cupiditate illo.</p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-4 md:gap-1 px-2 text-center'>
                        <div className='border py-8 rounded-xl shadow-md md:shadow-xl'>
                            <h4 className='text-6xl font-bold text-violet-600'>100%</h4>
                            <p className='text-gray-400 mt-2'>Copletion</p>
                        </div>
                        <div className='border py-8 rounded-xl shadow-md md:shadow-xl'>
                            <h4 className='text-6xl font-bold text-violet-600'>24/7</h4>
                            <p className='text-gray-400 mt-2'>Delivery</p>
                        </div>
                        <div className='border py-8 rounded-xl shadow-md md:shadow-xl'>
                            <h4 className='text-6xl font-bold text-violet-600'>100K</h4>
                            <p className='text-gray-400 mt-2'>Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About