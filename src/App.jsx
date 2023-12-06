import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import HomePage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./AppLayout"
import Login from "./pages/Login"



function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
  <Route path="product" element={<Product />}/>
  <Route path="pricing" element={<Pricing />}/>
  <Route path ="login" element={<Login/>}/>
  <Route path="app" element={<AppLayout />}>
      <Route path="cities" element={<p>List of cities</p>}/>
      <Route path="countries" element={<p>Countries</p>}/>
      <Route path="form" element={<p>Form</p>}/>
    </Route>
   
  <Route path="*" element={<PageNotFound />} />

    </Routes>
    </BrowserRouter>
    
  )

}

export default App

