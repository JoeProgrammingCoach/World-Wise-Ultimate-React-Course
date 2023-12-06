import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import HomePage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />}/>
  <Route path="product" element={<Product />}/>
  <Route path="pricing" element={<Pricing />}/>
  <Route path ="login" element={<Login/>}/>
  <Route path="app" element={<AppLayout />}>
      <Route index element = {<p><CityList /></p>}/>{/* this will appear when no route is after app*/}
      <Route path="cities" element={<p><CityList /></p>}/>
      <Route path="countries" element={<p>Countries</p>}/>
      <Route path="form" element={<p>Form</p>}/>
    </Route>
   
  <Route path="*" element={<PageNotFound />} />

    </Routes>
    </BrowserRouter>
    
  )

}

export default App

