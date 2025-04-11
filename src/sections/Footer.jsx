import React from 'react'
import  {saillogo}  from '../assets/icons'
import { footerLinks, socialMedia } from '.'

const Footer = () => {
  return (
    <footer className='  bg-blue-600  pb-4 '>
      <div className=' flex items-center justify-around py-10 px-8 gap-50 flex-wrap max-lg:flex-col '>
        <div className='flex flex-col  max-lg:flex '>
          <img 
            src={saillogo} 
            alt="logo" 
            className='h-20 w-20 mb-2'
          />
          <p className='text-white text-2xl sm:max-w-sm'>Top learning experiences that create more talent in the world</p>
        </div>
        <div className='flex justify-between gap-20 lg:gap-40 flex-wrap'>
            {footerLinks.map((footerLink) => (
              <div className='text-2xl leading-normal font-medium py-4 px-6 mb-6' key={footerLink}>
              <h4 className='text-[#98A2B3]'>{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li className='mt-3 text-[#EAECF0] leading-normal text-2xl' key={link.name}>
                    <a href="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              </div>
            ))}
            
        </div>

      </div>
      <div className='bg-yellow-300 p-10 max-w-'>
          
      </div>
      <div className='bg-blue-600 p-4 max-w- flex justify-between flex-wrap max-lg:flex-col'>
        <p className='text-[#EAECF0] text-2xl mt-8'>&copy; 2025 Sail. All rights reserved
        </p>  
        <div className='flex items-center gap-5 mt-8'>
          {socialMedia.map((icon) => (
            <div className='flex justify-center items-center w-12 h-12 mb-2 rounded-full bg-blue-600'>
              <img 
                src={icon.src} 
                alt={icon.alt} 
                width={30}
                height={30} 
                className='bg-blue-600'
              />
            </div>
          ))}

        </div>
      </div>
      
      
    </footer>
  )
}

export default Footer