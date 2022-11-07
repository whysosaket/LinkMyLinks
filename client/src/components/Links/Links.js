import React from 'react'
import LinkItem from '../LinkItem/LinkItem'
import './Links.css'

const Links = () => {
  return (
    <>
    <h2 className='in-links'>Default List</h2>
    <div className='links'>
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
    </div>
    </>
  )
}

export default Links