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
import ConfirmDelteModal from "./Components/Modals/ConfirmDelteModal";
import AddLinkModal from "./Components/Modals/AddLinkModal";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import AuthState from "./context/auth/AuthState.tsx";
import AlertState from "./context/alerts/AlertState.tsx";
import LinkState from "./context/links/LinkState.tsx";
import Alert from "./Components/Alert.tsx";


function App() {
  const [progress,setProgress] = useState(0);
  return (
    <>
    <LoadingBar
                color='#4646DC'
                progress={progress}
                height={3}
                onLoaderFinished={() => setProgress(0)}
              />
    {/* <Loading /> */}
    {/* <ConfirmDelteModal /> */}
    {/* <AddLinkModal /> */}
    <AlertState>
      <LinkState setProgress={setProgress}>
        <AuthState setProgress={setProgress}>
          <Alert />
    <Router>
      <Navbar />
      <div className="mt-16">{" "}</div>
      <Routes>
        <Route path="/" element={localStorage.getItem("lmltoken")?<Home />:<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<_404 />} />
      </Routes>
      </Router>
          </AuthState>
        </LinkState>
      </AlertState>
    </>
  )
}

export default App
