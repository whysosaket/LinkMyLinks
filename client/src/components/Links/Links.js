import React, { useContext, useEffect } from 'react'
import LinkItem from '../LinkItem/LinkItem'
import './Links.css'
import LinkContext from '../../context/links/linkContext'

const Links = () => {


  const contextLink = useContext(LinkContext);
  const {links, getLinks} = contextLink;
  console.log(links)

  useEffect(()=>{
    getLinks();
     // eslint-disable-next-line
  },[]);

  return (
    <>
    <h2 className='in-links'>Default List</h2>
    <div className='links'>
        {
          links.map((link, index)=>{
            return <LinkItem link={link} key={index} />
          })
        }
    </div>
    </>
  )
}

export default Links