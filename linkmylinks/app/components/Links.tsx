'use client';

import React from 'react'
import LinkCard from './LinkCard';

const Links = () => {
  return (
    <>
    <div className='flex'>
      <div className='flex justify-between w-full'>
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
    </>
  )
}

export default Links