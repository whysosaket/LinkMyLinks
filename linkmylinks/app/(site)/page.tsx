'use client';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Links from '../components/Links';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='my-4'>
        <Links />
      </div>
      <Footer />
    </>
  )
}
