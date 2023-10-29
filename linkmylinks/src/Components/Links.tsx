import React from 'react'
import LinkItem from './LinkItem'

const ListName = "Default"

const links: number[] = [1,2,3,4,5,6,7,8,9,11,12,13,14,55,12,44,12]

const Links = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='font-semibold text-4xl mx-auto md:w-5/6 my-4'>Default List</h1>
        <div className='mx-auto flex flex-wrap md:w-5/6'>
            {links.map((link, index) => (
              <LinkItem key={index} delay={index} />
            ))}
        </div>
    </div>
  )
}

export default Links