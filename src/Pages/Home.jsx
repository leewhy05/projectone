import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import HeroTwo from '../component/HeroTwo'
import Electronics from '../component/Electronics'
import Jewelry from '../component/Jewelry'
import LastPage from '../component/LastPage'

const Home = () => {
    useEffect(()=>{
        document.title = 'Home | Page'
    })
  return (
    <div className='container'>


        <Hero />
        <Electronics/>
        <HeroTwo />
        <Jewelry /> 
        <LastPage/>

{/*       
        <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
        <Electronics cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />
        <HeroTwo cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />
        <Jewelry cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />
        <LastPage/> */}


    </div>
  )
}

export default Home