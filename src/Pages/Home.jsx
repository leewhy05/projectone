import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import HeroTwo from '../component/HeroTwo'
import Electronics from '../component/Electronics'

const Home = ({cart,handleAddToCart, setCart}) => {
    useEffect(()=>{
        document.title = 'Home | Page'
    })
  return (
    <div className='container'>
        <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
        <HeroTwo cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />
        <Electronics/>


    </div>
  )
}

export default Home