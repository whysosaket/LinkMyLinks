import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import AddLink from "./components/AddLink/AddLink";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/lists" element={<Lists />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <AddLink />
      </Router>
    </div>
  );
}

export default App;
