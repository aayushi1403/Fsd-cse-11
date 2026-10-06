import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/home'
import About from './component/About'
import Navbar from './component/Navbar'
import Counter from './component/Counter'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="counter" element={<Counter/>} />
          <Route path="stopwatch" element={<h2>Stopwatch App</h2>} />
          <Route path="shopping" element={<h2>Shopping App</h2>} />
          <Route path="store" element={<h2>Store Page</h2>} />
          <Route path="login" element={<h2>Login Page</h2>} />
          <Route path="*" element={<h2>Error: Page not found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App