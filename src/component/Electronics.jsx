import React from 'react'
import '../Styles/Electronics.css'
import useFetch from '../customHook/useFetch'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';

const Electronics = () => {
    const{data, loading} = useFetch('https://fakestoreapi.com/products/category/electronics')
  return (
    <div>
        <div className='component-title-electronics'>
            <h2>ELECTRONICS CATEGORY</h2>
        </div>
    <main className='card-container-electronics'>
      {data.map((electronic)=>{
        const{id,image,price,title} = electronic
        return(
            <div key={id} className="card-inner-electronics mt-5 text-center">
            <h2>{loading && <ClipLoader />}</h2>
            <Card style={{ width: "" }}>
              <Link to={`/SingleProduct/${id}`}>
              <Card.Img variant="top" src={image} className="w-75" />
              </Link>
             
              <Card.Body>
                <Card.Title>{title.slice(0, 10)}</Card.Title>
                <Card.Text className='fw-bold text-danger'>${price}</Card.Text>
                <Button variant="primary" className="btn-sm" onClick={()=>{handleAddToCart(datum2);notify()}}>Add to Cart</Button>
                <ToastContainer/>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </main>
    </div>
  )
}

export default Electronics