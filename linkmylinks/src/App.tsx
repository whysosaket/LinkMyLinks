import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Background from "./assets/background.svg"


function App() {

  return (
    <>
    <img src={Background} className='absolute -z-10'/>
    <Router>
      <Navbar />
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
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
