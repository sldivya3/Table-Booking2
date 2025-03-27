import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantDetailPage from './pages/RestaurantDetailPage'

const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Routes>

    {/* <Route path='/' element={<RestaurantDetailPage/>}/> */}
    
     
   </Routes>
   </BrowserRouter>
   <HomePage/>
    </div>
  )
}

export default App
