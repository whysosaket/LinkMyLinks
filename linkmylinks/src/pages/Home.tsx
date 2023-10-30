import { useContext, useEffect } from 'react';
import AddLinkFooter from '../Components/AddLinkFooter'
import Links from '../Components/Links';
import { useNavigate } from 'react-router-dom';
import LinkContext from '../context/links/linkContext';
import AlertContext from '../context/alerts/alertContext';
import Loading from '../Components/Loading';

const Home = () => {
  const navigate = useNavigate();
  const {getLinks, links} = useContext(LinkContext);
  const {loading} = useContext(AlertContext);

  useEffect(()=>{
    if(!localStorage.getItem("lmltoken")) return navigate("/welcome");
    getLinks();
  },[])

  return (
    <>
    {loading?<Loading />:
    <div className='mb-48 md:mb-36'>
        <AddLinkFooter />
        <Links links={links} />
    </div>}
    </>
  )
}

export default Home