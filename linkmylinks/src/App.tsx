import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Background from "./assets/background.svg"
import Loading from "./Components/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import About from "./pages/About";


function App() {

  return (
    <>
    {/* <Loading /> */}
    <Router>
      <Navbar />
      <div className="mt-16">{" "}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About/>} />
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
