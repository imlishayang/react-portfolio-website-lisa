import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Experience/>

    </>
  )
}

export default App
