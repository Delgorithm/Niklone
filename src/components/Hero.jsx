import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <section>
      <figure>
        <img className="w-full" src="img/chaussure12.jpeg" alt="A basket in black and white" />
      </figure>
      <article className='flex justify-between items-center mt-4 mx-2'>
        <h2 className='text-2xl'>Découvre les articles populaires</h2>
        <section>
          <Link to="/">
            Voir tous les articles
          </Link>
        </section>
      </article>
      <Carousel />
      <article className='m-6'>
        <p>Chaussures</p>
        <p className='mt-4'>Articles du moment</p>
      </article>
    </section>
  )
}

export default Hero