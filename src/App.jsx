import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Products from './components/products/Products.jsx'
import Restaurent from './components/restaurent/Restaurent.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Test from './components/Test/Test.jsx'


export default function App() {
  return (
    <>
     <Navbar />
     
      <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/restaurent' element={<Restaurent />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path="test" element= {<Test />} />
      </Routes>
     
     <Footer />
    </>
  )
}
