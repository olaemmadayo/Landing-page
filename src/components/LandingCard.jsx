import React from 'react'

const LandingCard = ({imageURL, title, content}) => {
  return (
    <div className=' rounded-lg py-4 px-4 shadow-xl ring-1 w-full overflow-hidden max-w-sm bg-white'>
      
        <img 
          src={imageURL} 
          alt="image" 
          
          className='h-48 w-full object-cover'
          />
          
         <h3 
          className='mt-8  text-xl font-bold text-slate-700 ' >{title}</h3>
          <p className='text-base py-4  md:text-lg  mt-2 text-slate-500 w-[300px]'>{content}</p>
        
      

    </div>
  )
}

export default LandingCard