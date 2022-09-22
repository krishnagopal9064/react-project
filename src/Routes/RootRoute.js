import React, {useState} from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from '../Components/Home/HomePage'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import Store from '../Components/Store/Store'
import Mac from '../Components/Mac/Mac'
import Iphone from '../Components/iPhone/Iphone'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Cart from '../Components/Cart/Cart'
import OnlyOnApple from '../Components/Store/OnlyOnApple'
import Thankyou from '../Components/Cart/Thankyou'
import ProtectedRoute from './ProtectedRoute'
import IphoneData from '../Components/Product/Iphone.json'
import MacData from '../Components/Product/MacData.json'
import Payment from '../Components/Cart/Payment'
import Accessories from '../Components/Accessories/Accessories'
import Support from '../Components/Support/Support'

export default function RootRoute() {
  const [iphoneState] = useState(IphoneData.IphoneData)
  const [macState] = useState(MacData.MacData)

  const [cart, setCart] = useState([])
  console.log(cart);
  const addtocart=(cartdata)=>{
    setCart([...cart , {...cartdata, quantity:1}])
  }
  const [fcart,setFcart] = useState([])
  console.log(fcart);
  const proceed=(fcartdata)=>{
    setFcart([...fcart, fcartdata])
  }

  return (
    <>
    <BrowserRouter>
    <Header count={cart.length}/>
    <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/store' element={<HomePage/>} />
        <Route path='/onlyonapple' element={<OnlyOnApple/>} />
        <Route path='/mac' element={<Mac product={macState} addtocart={addtocart}/>} />
        <Route path='/iphone' element={<Iphone product={iphoneState} addtocart={addtocart}/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart cart={cart} checkout={proceed}/>} />

        <Route element={<ProtectedRoute/>}>
        <Route path='/payment' element={<Payment fcart={fcart}/>} />
        <Route path='/thankyou' element={<Thankyou/>} />
        </Route>
        <Route path='/support' element={<Support/>} />
        <Route path='/accessories' element={<Accessories/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
        
    </>
  )
}
