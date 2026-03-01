import React from 'react'
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Vikas from "./components/Vikas"
import Akanksha from './components/Akanksha'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
           <Route path="/about/vikas/" element={<Vikas />} 
           />
        </Route> 
        <Route path="/vikas" element={<Vikas />}>
           <Route path="/vikas/akanksha/" element={<Akanksha />} />
        </Route>    
        
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
};

export default App
