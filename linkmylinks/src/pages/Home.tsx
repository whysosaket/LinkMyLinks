import { useEffect } from 'react';
import AddLinkFooter from '../Components/AddLinkFooter'
import Links from '../Components/Links';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("lmltoken")) return navigate("/welcome")
  },[])

  return (
    <div className='mb-48 md:mb-36'>
        <AddLinkFooter />
        <Links />
    </div>
  )
}

export default Home