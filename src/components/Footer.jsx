import React from 'react'
import { footerInfo } from '../assets/data/data.json'
import { MdLocationPin } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className='bg-black'>
        <article className='p-6'>
            <section className='text-white'>
                <p>{footerInfo.member}</p>
                <p>{footerInfo.discount}</p>
                <p>{footerInfo.help}</p>
                <section className='flex gap-4 my-6'>
                    <FaTwitter className='text-4xl bg-gray-500 p-2 rounded-full'/>
                    <FaFacebookF className='text-4xl bg-gray-500 p-2 rounded-full' />
                    <FaYoutube className='text-4xl bg-gray-500 p-2 rounded-full' />
                    <FaInstagram className='text-4xl bg-gray-500 p-2 rounded-full' />
                </section>
                <p className='flex items-center gap-2 mb-4'><MdLocationPin />{footerInfo.location}</p>
            </section>
            <section className='text-gray-500 flex flex-col gap-6 text-sm'>
                <p>{footerInfo.info}</p>
                <p>{footerInfo.use}</p>
                <p>{footerInfo.sale}</p>
                <p>{footerInfo.details}</p>
                <p>{footerInfo.confidentiality}</p>
                <p>{footerInfo.cookie}</p>
            </section>
        </article>
    </footer>
  )
}

export default Footer