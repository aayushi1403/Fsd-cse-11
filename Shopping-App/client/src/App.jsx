import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import UserLayout from './Pages/UserLayout'
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserLayout/>}/>
    <Route path="/mycart" element={<h1>My cart</h1>}/>
    <Route path="/myorders" element={<h1>My Orders</h1>}/>
    <Route path="/settings" element={<h1>Settings Page</h1>}/>
    <Route path="/profile" element={<h1>My Profile</h1>}/>
    <Route path="/logout" element={<h1>Logout</h1>}/>
    <Route path="/*" element={<h1>Error Page</h1>}/>
      </Routes>
    </BrowserRouter>
   
    
    
  )
}

export default App
