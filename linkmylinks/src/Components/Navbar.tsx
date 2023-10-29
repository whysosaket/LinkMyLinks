import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GlitchLogo from "./GlitchLogo";


const Navbar = () => {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <>
      {/* <header className="header bg-gray-900 h-16 text-white shadow-md flex items-center justify-between px-8 py-02"> */}
      <header className={`header px-8 py-02 fixed top-0 flex items-center h-16 justify-between w-full z-30 bg-opacity-80 transition duration-300 ease-in-out ${!top ? 'bg-gray-900 backdrop-blur-sm shadow-lg text-white' : 'text-black'}`}>
        {/* logo */}
        <Link
          to="/"
          className="md:w-3/12 w-6/12 p-2 flex justify-start my-auto"
        >
          {/* <img className="fill-indigo-400" height={50} width={30} src="/vite.svg" /> */}
          {/* <Logo /> */}
          <span className={`${!top?"text-white":"leading-tighter tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"} my-auto font-bold text-xl`}>
            LinkMyLinks
          </span>
        </Link>
        {/* navigation */}
        <nav className="nav font-semibold text-lg hidden md:block">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer active">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
              <Link to="/profile">List</Link>
            </li>
            <li className="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* buttons -*/}
        <div className="w-6/12  md:w-3/12 flex justify-end">
          {true ? (
            <Link
              to="/login"
              className={`rounded-md shadow-md px-4 py-2 font-semibold ${top?"bg-gray-100 text-black hover:bg-gray-300":"bg-slate-800 hover:bg-slate-800"}`}
            >
              Login
            </Link>
          ) : (
            <button
            className={`rounded-md shadow-md px-4 py-2 font-semibold ${top?"bg-gray-100 text-black hover:bg-gray-300":"bg-slate-800 hover:bg-slate-800"}`}
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;