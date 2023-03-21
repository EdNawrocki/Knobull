import { Routes, Route } from "react-router-dom";
import React from 'react';
import NavBar from './Components/NavBar'
import Home from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <React.Fragment>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={ <About/> }/>
          </Routes>
    </React.Fragment>
  );
}

export default App;
