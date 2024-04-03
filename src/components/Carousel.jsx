import React from 'react'
import carouselShoes from "../assets/data/data.json";

const Carousel = () => {
    const { firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe } = carouselShoes.carouselShoes;

    const shoes = [firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe];

    return (
        <section className='flex items-center overflow-x-auto whitespace-nowrap scroll-smooth overflow-hidden'>
            {shoes.map((shoe, index) => (
                <article key={index} className='m-6 cursor-pointer hover:scale-105 ease-in-out duration-150'>
                    <figure>
                        <img src={shoe.img} alt={shoe.alt} />
                    </figure>
                    <p className='text-sm'>{shoe.model}</p>
                    <p className='text-sm text-gray-400'>{shoe.type}</p>
                    <p className='text-sm mt-2 font-medium'>{shoe.price} €</p>
                </article>
            ))}
        </section>
    )
}

export default Carousel