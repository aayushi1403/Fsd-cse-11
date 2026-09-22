import './App.css'
import Product from './components/ProductCard/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/UserLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<UserLayout />} >

        <Route index element={<Product/>}/>

        <Route path="/mycart" element={<h1>My Cart</h1>} />

        <Route path="/myorders" element={<h1>My Orders</h1>} />

        <Route path="/settings" element={<h1>Settings Page</h1>} />

        <Route path="/profile" element={<h1>My Profile</h1>} />

        <Route path="/logout" element={<h1>Logout</h1>} />

        <Route path="*" element={<h1>Error Page</h1>} />
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App