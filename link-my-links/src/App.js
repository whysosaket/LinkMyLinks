import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";


function App() {
  
  return (
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/lists" element={<Lists />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
