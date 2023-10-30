import { useContext, useEffect, useState } from 'react';
import AddLinkFooter from '../Components/AddLinkFooter'
import Links from '../Components/Links';
import { useNavigate } from 'react-router-dom';
import LinkContext from '../context/links/linkContext';
import Loading from '../Components/Loading';

const Home = () => {
  const navigate = useNavigate();
  const {getLinks, links, clearLinks} = useContext(LinkContext);
  const [loading, setLoading] = useState(false);

  const handleDataLoading = async ()=>{
    clearLinks();
    setLoading(true);
    await getLinks();
    setLoading(false);
  }

  useEffect(()=>{
    if(!localStorage.getItem("lmltoken")) return navigate("/welcome");
    handleDataLoading();
  },[])

  return (
    <>
    {loading&&<Loading />}
    <div className='mb-48 md:mb-36'>
        <AddLinkFooter />
        <Links links={links} />
    </div>
    </>
  )
}

export default Home