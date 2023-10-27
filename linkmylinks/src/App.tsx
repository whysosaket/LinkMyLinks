import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Background from "./assets/background.svg"
import Loading from "./Components/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {

  return (
    <>
    {/* <Loading /> */}
    <div className="">
      {/* <img src={Background} className='absolute -z-10 overflow-hidden'/> */}
    </div>
    <Router>
      <Navbar />
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/solve" element={<Solve />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<_404 />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
