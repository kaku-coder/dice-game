  import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainDesign from './componets/MainDesign'
import HeroSection from './componets/HeroSection'

const App = () => {
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path="/" element={<MainDesign />} />
        <Route path="/play" element={<HeroSection />} />
        <Route path="*" element={<MainDesign />} />
      </Routes>
    </div>
  )
}

export default App
