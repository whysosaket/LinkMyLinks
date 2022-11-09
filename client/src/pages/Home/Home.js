import React from 'react'
import AddLink from "../../components/AddLink/AddLink";
import Greet from '../../components/Greet/Greet';
import Links from '../../components/Links/Links';

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