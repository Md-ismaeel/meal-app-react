import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './Components/Search'
import React, { lazy, Suspense } from 'react';
import LazyLoading from './Components/LazyLoading'

const Category = lazy(() => import('./Components/Category'))
const SubCategory = lazy(() => import("./Components/SubCategory"))
const ProductDetails = lazy(() => import('./Components/ProductDetails'))


function App() {

  return (
    <BrowserRouter>
      <Search />

      <Suspense fallback={<LazyLoading />}>
      
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/subcategory/:subcategoryName' element={<SubCategory />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>

      </Suspense>
    </BrowserRouter>
  )
}

export default App
