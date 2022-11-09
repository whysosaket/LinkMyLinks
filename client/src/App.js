import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import LinkState from "./context/links/LinkState";
import AlertState from "./context/alerts/AlertState";
import Alert from "./components/Alert/Alert";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <>
    <AlertState>
      <LinkState>
          <Router>
            <div className="mainContainer">
              <Navbar />
              <Alert />
              <div>
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/lists" element={<Lists />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/signup" element={<Signup />}></Route>
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
      </LinkState>
      </AlertState>
    </>
  );
}

export default App;
