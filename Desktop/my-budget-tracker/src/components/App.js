import React from 'react';
import Main from './Main'
import Home from './Home'
import About from './About';
import NavBar from './NavBar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



const App = () => {
  return (
   <Router>
    <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        </Routes>
   </Router> 
  )
}

export default App