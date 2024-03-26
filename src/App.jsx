import './App.css'
import { Category } from './Components/Category'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './Components/Search'
import { SubCategory } from './Components/SubCategory'
import { ProductDetails } from './Components/ProductDetails'


function App() {

  return (
    <BrowserRouter>
      <Search />
      <Routes>
      
        <Route path='/' element={<Category />} />
        <Route path='/subcategory/:subcategoryName' element={<SubCategory />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
