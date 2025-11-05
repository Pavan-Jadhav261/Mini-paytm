import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup'
import Transiction from './pages/Transiction/Transiction'
import Signin from './pages/signin/Signin'
import SendMoney from './pages/SendMoney/SendMoney'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Signup/>}/>
    <Route path='/signup' element={<Signup/>}/>
     <Route path='/signin' element={<Signin/>}/>
      <Route path='/transiction' element={<Transiction/>}/>
      <Route path='/send-money' element={<SendMoney/>}/>
  </Routes>
  </BrowserRouter>


  </>
  )
}

export default App