import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NavBar from './Layout/NavBar'  
import SingleProduct from './Pages/SingleProduct'
import { useState } from 'react'
import { useEffect } from 'react'
import Form from './Pages/Form'
import Help from './Pages/Help'
import Footer from './Layout/Footer'


const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
function App() {
const [cart, setCart] = useState(cartItemsFromLocalStorage)
useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
},[cart])
let handleAddToCart = (product) => {
  const productSelected = cart.find(
    (singleCart) => singleCart.id === product.id
  );
  if (productSelected) {
    setCart(
      cart.map((oneItem) =>
        oneItem.id === product.id
          ? {
              ...productSelected,
              quantity: productSelected.quantity + 1,
            }
          : oneItem
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};
  return (
    <>
      <BrowserRouter>
      <NavBar cart={cart}/>
      <Routes>
       <Route index element={<Home cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />}/>
        <Route path='/Cart' element={<Cart cart={cart}  setCart={setCart} />}/>
        <Route path='/Form' element={<Form />}/>
        <Route path='/Help' element={<Help />}/>
        <Route path='/SingleProduct/:id' element={<SingleProduct cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart} />}/>  
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
  }




export default App
