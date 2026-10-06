import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Counter from './Counter'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="*" element={<h1>Error page not found</h1>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
