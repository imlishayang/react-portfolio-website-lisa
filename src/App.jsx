import React from 'react'
// import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      {/* <NavBar/> */}
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
