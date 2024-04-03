import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import data from "../assets/data/data.json"

const Catalogue = () => {
  const { firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe, sixthShoe, seventhShoe, eigthShoe, ninthShoe, tenthShoe, eleventhShoe, twelthShoe, thirteenthShoe, fourteenthShoe, fiveteenthShoe, sixteenthShoe, seventeenthShoe, eighteenthShoe, nineteenthShoe, twenthShoe, twentyFirstShoe, twentySecondShoe, twentyThirdShoe } = data.catalogueShoes;
  const allShoes = [firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe, sixthShoe, seventhShoe, eigthShoe, ninthShoe, tenthShoe, eleventhShoe, twelthShoe, thirteenthShoe, fourteenthShoe, fiveteenthShoe, sixteenthShoe, seventeenthShoe, eighteenthShoe, nineteenthShoe, twenthShoe, twentyFirstShoe, twentySecondShoe, twentyThirdShoe];
  console.log(allShoes);
  return (
    <>
        <Navbar />
        <article className='mx-6'>
            <h1>Catalogue</h1>
            <section className='grid grid-cols-2 gap-4 pb-10'>
              {allShoes.map(shoe => (
                <article key={shoe.model}>
                  <figure>
                    <img src={shoe.img} alt={shoe.description} />
                  </figure>
                  <p>{shoe.model}</p>
                  <p>{shoe.type}</p>
                  <p>{shoe.price}</p>
                </article>
              ))}
            </section>
        </article>
        <Footer />
    </>
  )
}

export default Catalogue