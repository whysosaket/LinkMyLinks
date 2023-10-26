import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import {useState} from "react";

// importing components
import Navbar from "./components/Navbar/Navbar";
import Alert from "./components/Alert/Alert";
import Footer from "./components/Footer/Footer";

// page imports
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Lists from "./pages/Lists/Lists";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// Importing states for context
import LinkState from "./context/links/LinkState";
import AlertState from "./context/alerts/AlertState";
import AuthState from "./context/auth/AuthState";
import UserLinks from "./pages/UserLinks/UserLinks";

function App() {
  const [progress,setProgress] = useState(0);
  return (
    <>
      <LoadingBar
                color='#f11946'
                progress={progress}
                height={3}
                onLoaderFinished={() => setProgress(0)}
              />
      <AlertState>
        <LinkState setProgress={setProgress}>
          <Router>
           <AuthState setProgress={setProgress}>
            <div className="mainContainer">
              <Navbar />
              <Alert />
              <div>
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/lists" element={<Lists />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/signup" element={<Signup />}></Route>
                  <Route path="/user" element={<UserLinks />}></Route>
                </Routes>
              </div>
              <Footer />
            </div>
            </AuthState>
          </Router>
        </LinkState> 
      </AlertState>
    </>
  );
}

export default App;
