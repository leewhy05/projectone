import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import { ClipLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = ({cart}) => {
  const notify = () =>{ toast("An item has been added!",{position:toast.POSITION.TOP_CENTER});}
  const { id } = useParams();
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  console.log(id);
  const { title, price, image, description } = data;

  return (
    <>
      <div className="container">
        <h2>{loading && <ClipLoader color={'red'} size={50}/>}</h2>
        <div className="row justify-content-between align-items-center mt-5">
          <div className="w-25 col-sm-12 col-md-4 text-center">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image} className="" />
            </Card>
          </div>
          <div className="col-sm-12 col-md-7">  
          <h1 className="text-danger fe-bold">{title}</h1>
          <h4 className="text-success lh-base">{description}</h4>
          <h3>${price}</h3>
          <button className="btn btn-primary btn-lg w-50 fs-2" onClick={()=>{handleAddToCart(data);notify()}}>Add to Cart</button>
          <ToastContainer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
