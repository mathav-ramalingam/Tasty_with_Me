import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './pages/Home'
import { RecipeDetails } from './pages/RecipeDetails'
import { Navbar } from './components/Navbar'



function App() {
  
  return (
    <>
    <div className='bg-black'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='recipes/:id' element={<RecipeDetails />}/>
    </Routes>
  
    </div>
      
    </>
  )
}

export default App
