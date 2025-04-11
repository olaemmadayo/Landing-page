import React from 'react'
import { html5, es6, response,  } from "../assets/images"
import LandingCard from "../components/landingCard"

const FrontendCard = () => {
  return (
    <section className='flex flex-wrap flex-1 gap-5 items-center justify-center'>
      <LandingCard 
        imageURL={html5}
        title="HTML & CSS"
        content="structure and style your web pages professionally"
      />
      <LandingCard 
        imageURL={es6}
        title="JavaScript & ES6+"
        content="Make your website interactive and dynamic"
      />
      <LandingCard 
        imageURL={response}
        title="HTML & CSS"
        content="structure and style your web pages professionally"
      />
    </section>
  )
}

export default FrontendCard