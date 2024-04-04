import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = ({ allShoes, allSizes }) => {
    const { id } = useParams();
    const currentElement = allShoes.find((element) => element.model === id );
    console.log(allSizes);
    return (
        <>
            <Navbar />
            <section className='m-6'>
                <h1 className='text-xl'>{currentElement.model}</h1>
                <p className='text-sm'>{currentElement.type}</p>
                <p>{currentElement.price} €</p>
                <figure className='my-4'>
                    <img src={currentElement.img} alt={currentElement.description}/>
                </figure>
                <section>
                    <article className='flex items-center justify-between'>
                        <p className='font-medium'>Sélectionner la taille</p>
                        <p className='text-gray-500'>Guide des tailles</p>
                    </article>
                    <article className='grid grid-cols-3 grid-row-auto my-4'>
                        {allSizes.map((size, index) => (
                            <button key={index} className='m-1.5 px-3 py-2 border-[0.1px] border-gray-300 rounded-lg hover:border-[1px] '>
                                {size}
                            </button>
                        ))}
                    </article>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Product