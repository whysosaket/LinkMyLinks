import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
