'use client';

import React from 'react'

const LinkCard = () => {
  return (
    <>
    <div className='mx-2 w-1/4 border rounded-md p-4 bg-dark1 text-white'>
        <div className="my-2">
          <div className="flex justify-between ">
            <h1 className="font-semibold">Google</h1>
            <span className='text-gray-400 font-semibold text-sm'>15/02/23</span>
          </div>
          <h1 className='font-extralight text-gray-100 text-sm'>www.google.com</h1>
        </div>
        <div className='flex justify-end'>
          <button className='bg-dark3 hover:bg-dark5 text-white px-3 py-1 rounded-md shadow-lg mx-1'>Open</button>
          <button className='bg-dark3 hover:bg-dark5 text-white px-3 py-1 rounded-md shadow-lg mx-1'>Delete</button>
          {/* <button className='bg-dark3 hover:bg-dark5 text-white px-3 py-1 rounded-md shadow-lg mx-1'>X</button> */}
        </div>
    </div>
    </>
  )
}

export default LinkCard