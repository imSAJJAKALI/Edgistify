import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../pages/Home'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PrivateRoute from './PrivateRoute'
import Shop from '../pages/shop'
import ProductDetails from '../pages/ProductDetails'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/product/:id' element={<ProductDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default AllRoutes