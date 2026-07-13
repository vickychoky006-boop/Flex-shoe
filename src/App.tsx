import { useState } from 'react'

import './App.css'
import Home from './assets/Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Men from './assets/Pages/Men/Men'
import Women from './assets/Pages/Women/Women'
import ProductDetails from './assets/Pages/productDeatils/productDeatils'
import ProductDetails2 from './assets/Pages/productDeatils/productDeatils2'
import ProductDetails3 from './assets/Pages/productDeatils/productDeatils3'
import ProductDetails4 from './assets/Pages/productDeatils/productDeatils4'
import ProductDetails5 from './assets/Pages/productDeatils/productDeatils5'
import ProductDetails6 from './assets/Pages/productDeatils/productDeatils6'
import ProductDetails7 from './assets/Pages/productDeatils/productDeatils7'
import ProductDetails8 from './assets/Pages/productDeatils/productDeatils8'
import ProductDetails9 from './assets/Pages/productDeatils/productDeatils9'
import ProductDetails10 from './assets/Pages/productDeatils/productDeatils10'
import ProductDetails11 from './assets/Pages/productDeatils/productDeatils11'
import ProductDetails12 from './assets/Pages/productDeatils/productDeatils12'
import WomenCardDeatils from './assets/Pages/WomenCardDeatils/WomenCardDeatils'
import WomenCardDeatils2 from './assets/Pages/WomenCardDeatils/WomenCardDeatils2'
import WomenCardDeatils3 from './assets/Pages/WomenCardDeatils/WomenCardDeatils3'
import WomenCardDeatils4 from './assets/Pages/WomenCardDeatils/WomenCardDeatils4'
import WomenCardDeatils5 from './assets/Pages/WomenCardDeatils/WomenCardDeatils5'
import WomenCardDeatils6 from './assets/Pages/WomenCardDeatils/WomenCardDeatils6'
import WomenCardDeatils7 from './assets/Pages/WomenCardDeatils/WomenCardDeatils7'
import WomenCardDeatils8 from './assets/Pages/WomenCardDeatils/WomenCardDeatils8'
import WomenCardDeatils9 from './assets/Pages/WomenCardDeatils/WomenCardDeatils9'
import WomenCardDeatils10 from './assets/Pages/WomenCardDeatils/WomenCardDeatils10'
import WomenCardDeatils11 from './assets/Pages/WomenCardDeatils/WomenCardDeatils11'
import WomenCardDeatils12 from './assets/Pages/WomenCardDeatils/WomenCardDeatils12'
import About from './assets/Pages/About/About'


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/About' element={<About/>}/>     
      <Route path="card1" element={<ProductDetails />} />
      <Route path="card2" element={<ProductDetails2 />} />
      <Route path="card3" element={<ProductDetails3 />} />
      <Route path="card4" element={<ProductDetails4 />} />
      <Route path="card5" element={<ProductDetails5 />} />
      <Route path="card6" element={<ProductDetails6 />} />
      <Route path="card7" element={<ProductDetails7 />} />
      <Route path="card8" element={<ProductDetails8 />} />
      <Route path="card9" element={<ProductDetails9 />} />
      <Route path="card10" element={<ProductDetails10 />} />
      <Route path="card11" element={<ProductDetails11 />} />
      <Route path="card12" element={<ProductDetails12 />} />
      <Route path="card13" element={<WomenCardDeatils />} />
      <Route path="card14" element={<WomenCardDeatils2 />} />
      <Route path="card15" element={<WomenCardDeatils3 />} />
      <Route path="card16" element={<WomenCardDeatils4 />} />
      <Route path="card17" element={<WomenCardDeatils5 />} />
      <Route path="card18" element={<WomenCardDeatils6 />} />
      <Route path="card19" element={<WomenCardDeatils7 />} />
      <Route path="card20" element={<WomenCardDeatils8 />} />
      <Route path="card21" element={<WomenCardDeatils9 />} />
      <Route path="card22" element={<WomenCardDeatils10 />} />
      <Route path="card23" element={<WomenCardDeatils11 />} />
      <Route path="card24" element={<WomenCardDeatils12 />} />

      
     </Routes>
     
    </>
  )
}

export default App
