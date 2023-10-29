import React from 'react'
import AddLinkFooter from '../Components/AddLinkFooter'
import Links from '../Components/Links'
import Head from '../Components/Head/Head'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    <div className='mb-48 md:mb-36'>
        {/* <Head /> */}
        {/* <Hero /> */}
        <AddLinkFooter />
        <Links />
    </div>
  )
}

export default Home