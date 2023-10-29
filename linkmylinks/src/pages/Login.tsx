import { Link } from "react-router-dom";
import SignupImage from "../assets/signup.svg";
import {motion} from "framer-motion"

const Login = () => {
  return (
    <div>
      <>
        <div className="bg-gray-900 bg-opacity-0 flex items-center justify-center p-4 md:p-0">
          <div className="bg-gray-100 bg-opacity-40 text-gray-500 shadow-xl w-full overflow-hidden rounded-3xl my-16 md:my-0 md:rounded-none">
            <div className="md:flex w-full">
              <motion.div initial={{x: 500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.6}} className="hidden md:block w-1/2 bg-indigo-500 bg-opacity-100 py-10 px-10">
                <img src={SignupImage} />
              </motion.div>
              <motion.div initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.6}} className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                  <p>Enter your information to login</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                        LOGIN
                      </button>
                    </div>
                  </div>
                  <h1 className="text-center text-sm">Don't have an account? <Link to="/signup" className="text-indigo-600">Register</Link></h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
