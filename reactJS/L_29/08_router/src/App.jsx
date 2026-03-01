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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/vikas/" element={<Vikas />} />
          </Route>
          <Route path="/vikas" element={<Vikas />}>
            <Route path="/vikas/akanksha/" element={<Akanksha />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App
