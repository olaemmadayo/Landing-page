import React from 'react'
import { saillogo } from '../assets/icons'
import { jacob } from '../assets/Images'

const MasterPlatform = () => {
  return (
    <section className='max-container bg-green-300 py-10 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col items-center justify-center'>
      <div className=' flex flex-col items-center'>
        <img 
          src={saillogo}
          alt="logo" 
          className='h-30 w-20 mb-2'
        />
        <p class="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold m-auto ">
        Courses was fantastic! It is Master platform for those <br/>looking to start a new career, or need a refresher.
        </p>
        <img 
          src={jacob}
          alt="logo" 
          className='rounded-full w-30 h-30 gap-20 mt-10'
        />
        <h3 className='text-xl md:text-2xl font-bold my-2'>Jacob Jones</h3>
        <p className='sm:text-lg md:text-xl text-slate-gray'>Student, Sail Virtual Class</p>
      </div>
    </section>
  )
}

export default MasterPlatform