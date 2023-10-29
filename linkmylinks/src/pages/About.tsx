import profilePhoto from "../assets/saket.jpeg";
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook} from "react-icons/ai"
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
      <div className="z-50 min-h-screen min-w-full absolute flex items-center justify-center">
        <div role="status" className=" flex flex-col justify-center">
          <motion.img
          initial = {{y: 80, opacity: 0.6}}
          animate = {{y: 0, opacity: 1}}
          transition= {{duration: 0.2}}
          src={profilePhoto} className="-mt-48 h-44 w-44 rounded-full mx-auto" />
          <motion.h1
          initial = {{y: 80, opacity: 0.6}}
          animate = {{y: 0, opacity: 1}}
          transition= {{duration: 0.4}}
          className="text-center my-3 text-4xl">Saket Aryan</motion.h1>
          <motion.div
          initial = {{y: 80, opacity: 0.6}}
          animate = {{y: 0, opacity: 1}}
          transition= {{duration: 0.6}}
          className="text-center text-gray-600 px-6">
                <p>Hey! This is me Saket. I'm a professional and passionate code copier.</p>
                <p>And I'm lazy enough to even make a new about page!</p>
          </motion.div>
          <div className="my-16">
            <motion.h1
            initial = {{y: 80, opacity: 0.6}}
            animate = {{y: 0, opacity: 1}}
            transition= {{duration: 0.8}}
            className="text-center font-bold text-xl">Connect With Me</motion.h1>
            <motion.div
            initial = {{y: 80, opacity: 0.6}}
            animate = {{y: 0, opacity: 1}}
            transition= {{duration: 1}}
            className="flex justify-center my-3">
                <a href="https://www.linkedin.com/in/saketaryan">
                    <AiFillLinkedin size={36} className="mx-2 text-[#0072b1]" />
                </a>
                <a href="https://github.com/whysosaket/">
                    <AiFillGithub size={36} className="mx-2 " />
                </a>
                <a href="https://www.instagram.com/saketaryann/">
                    <AiOutlineInstagram size={36} className="mx-2 text-[#d62976]" />
                </a>
                <a href="https://twitter.com/whysosaket">
                    <AiOutlineTwitter size={36} className="mx-2 text-[#26a7de]" />
                </a>
                <a href="https://www.facebook.com/saket.aryan">
                    <AiFillFacebook size={36} className="mx-2 text-[#3b5998]" />
                </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
