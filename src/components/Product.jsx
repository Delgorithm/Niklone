import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = ({ allShoes }) => {
    const { id } = useParams();
    const currentElement = allShoes.find((element) => element.model === id );

    return (
        <>
            <Navbar />
            <section className='m-6'>
                <h1>{currentElement.model}</h1>
                <p>{currentElement.type}</p>
                <p>{currentElement.price}</p>
                <figure>
                    <img src={currentElement.img} alt={currentElement.description} />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Product