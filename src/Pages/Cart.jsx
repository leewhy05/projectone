import React, { useEffect } from 'react';
// import Card from "react-bootstrap/Card";

const Cart = ({cart,setCart}) => {
  useEffect(()=>{
    document.title = 'Cart | Page'
  })
  return (
    <div className='container'>
      <div>
        {cart.length === 0 &&(
          <div>
            <h3>No item in the cart</h3>
          </div>
        )}
      </div>
      <div>
      {cart.map((singleCart)=>{
          const {image,id,title,price,quantity,description} =singleCart
          return(
            <div key={id} className='row justify-content-between align-items-center my-4 shadow p-5'>
              <div className='col-md-5 text-center'>
                <img src={image} alt={title} className='w-75 ' />
              </div>
              <div className='col-md-6 d-flex flex-column justify-content-between'>
                <h2 className='text-danger'> {title} </h2>
                <div>
                  <h4> {quantity} * {price} </h4>
                  <div className='d-flex justify-content-between'>
                    <div>
                    <button onClick={()=>handleIncrease(singleCart)} className="btn btn-success btn-lg ">
                      increase
                    </button>
                    </div>
                   <div>
                   <button onClick={()=>handleDecrease(singleCart)} className="btn btn-danger btn-lg ">
                      decrease
                    </button>
                   </div>
                  </div>
                </div>
              </div>
              

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Cart