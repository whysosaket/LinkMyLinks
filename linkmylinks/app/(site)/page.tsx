'use client';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Links from '../components/Links';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="font-semibold text-red-400 text-center">Hello World</h1>
      <Links />
      <Footer />
    </>
  )
}
