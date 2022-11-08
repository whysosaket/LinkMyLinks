import React from 'react'
import AddLink from "../AddLink/AddLink";
import Greet from '../Greet/Greet';
import Links from '../Links/Links';

const Home = () => {
  return (
    <div>
      <Greet />
      <Links />
      <AddLink />
      </div>
  )
}

export default Home