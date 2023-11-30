import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import HomePage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
  <Route path="product" element={<Product />}/>
  <Route path="pricing" element={<Pricing />}/>
  <Route path="*" element={<PageNotFound />} />
  
    </Routes>
    </BrowserRouter>
    
  )

}

export default App
