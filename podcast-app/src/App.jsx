import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/Navbar'
import Discover from './components/Discover'
import Browse from './components/Browse'
import TheFaves from './components/TheFaves'
import {routes} from './modal/routes'



function App () {
  
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Discover />} />
        <Route path='Browse' element={<Browse />} />
        <Route path='TheFaves' element={<TheFaves />} />
      </Routes>
       <h1>Lets do this again</h1>
    </>
  )
}

export default App
