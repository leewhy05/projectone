import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../customHook/useFetch';
import Card from "react-bootstrap/Card";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';




const SingleProduct = ({cart,handleAddToCart}) => {
    const {id} = useParams()
    const {data,loading}=useFetch(`https://fakestoreapi.com/products/${id}`)
    const {title,price,image, description}=data
    const notify = () =>{
        toast("An Item has been added",{
          position:toast.POSITION.TOP_CENTER
        });
    }
    // console.log(data)
  return (
    <div>
        <div className='container'>
            <h2>{loading && <ClipLoader color={'red'} size={50}/>}</h2>

            <div className='row justify-content-between align-items-center mt-4'>
                <div className='col-sm-12 text-center col-md-4'>
                <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={image} className="img-fluid " />
                 </Card>
                </div>

                <div className='col-sm-12 col-md-7'>
                    <h1 className='text-danger fw-bold'>{title}</h1>
                    <h4 className='text-success lh-base'>{description}</h4>
                    <h3>{price}</h3>
                <button onClick={()=>{handleAddToCart(data);notify()}}className="btn btn-primary btn-lg w-50 fs-5">Add Cart</button>
                <ToastContainer/>
                </div>
                
                

            </div>
        </div>
        
    </div>
  )
}

export default SingleProduct