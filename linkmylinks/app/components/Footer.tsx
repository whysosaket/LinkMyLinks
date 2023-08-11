'use client';
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='bg-dark1 px-2 py-10 flex justify-center fixed bottom-0 w-full'>
        <div className="flex justify-center font-semibold text-white w-2/5">
        <input className="bg-dark3 border-2 border-teal-500 py-2 px-6 placeholder-white text-white mx-1 rounded-md w-3/5" type="text" placeholder='Add a Link' />
        <button className='bg-dark3 hover:bg-dark5 px-4 py-2 rounded-lg'>Add</button>
        </div>
    </footer>
    </>
  )
}

export default Footer