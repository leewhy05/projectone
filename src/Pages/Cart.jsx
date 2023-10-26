import { useEffect } from "react"
import React from 'react'


const Cart = () => {
    useEffect(()=>{
        document.title = 'Cart | Page'
    })
  return (
    <div>
        <h2>Cart</h2>
    </div>
  )
}

export default Cart