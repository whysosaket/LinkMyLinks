import LinkItem from './UserLinkItem';
import LinkContext from '../../context/links/linkContext';
import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Monkey from "../../assets/404monkey.webp";
import {motion} from "framer-motion";

const UserLinks = () => {
  const contextLink = useContext(LinkContext);
  const { links, clearLinks, getUserLinks } = contextLink;

  const [searchParams] = useSearchParams();


  useEffect(() => {
    let username = searchParams.get("u");
    clearLinks();
    if(username!==null||username!==undefined){
      getUserLinks(username);
    }
    return clearLinks();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='flex flex-col justify-center'>
      {links.length<=0?
      <div className='my-4 md:my-12'>
      <motion.img
      animate={["initial"]}
      variants={{
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay: 0.8,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.2,
            repeatType: "reverse",
          },
        },
      }}
      src={Monkey} className='w-56 md:w-80 mx-auto'/>
      <motion.h1
       animate={["initial"]}
       variants={{
         initial: {
           x: [-2, 2],
           y: [5,-5],
           rotate: 0,
           transition: {
             delay: 0.3,
             duration: 2,
             repeat: Infinity,
             repeatDelay: 0.2,
             repeatType: "reverse",
           },
         },
       }}
      className='text-center font-bold my-3 text-3xl'>Found Nothing...</motion.h1>
      </div>
      :
      <>
      <h1 className='font-semibold text-4xl mx-auto md:w-5/6 my-4'>Default List</h1>
        <div className='mx-auto flex flex-wrap md:w-5/6'>
            {links.map((link:any, index:number) => (
              <LinkItem key={index} delay={index} link={link} />
            ))}
        </div>
        </>
    }
    </div>
  )
}

export default UserLinks