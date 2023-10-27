import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <>
      <header className="header bg-gray-900 h-16 text-white shadow-md flex items-center justify-between px-8 py-02">
        {/* logo */}
        <Link
          to="/"
          className="md:w-3/12 w-6/12 p-2 flex justify-start my-auto"
        >
          {/* <img className="fill-orange-400" height={50} width={30} src="/vite.svg" /> */}
          {/* <Logo /> */}
          <span className={`my-auto font-bold`}>
            <span className="text-white">LinkMy</span>
            <span className="text-white">
              Links
            </span>
          </span>
        </Link>
        {/* navigation */}
        <nav className="nav font-semibold text-lg hidden md:block">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer active">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="p-4 border-b-2 border-orange-500 border-opacity-0 hover:border-opacity-100 hover:text-orange-500 duration-200 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* buttons -*/}
        <div className="w-6/12  md:w-3/12 flex justify-end">
          {true ? (
            <Link
              to="/login"
              className="bg-slate-700 hover:bg-slate-800 rounded-lg shadow-md px-4 py-2 font-semibold"
            >
              Login
            </Link>
          ) : (
            <button
              className="bg-slate-900 hover:bg-slate-300rounded-lg shadow-md px-4 py-2 font-semibold"
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