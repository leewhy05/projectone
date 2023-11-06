import React from "react";
import "../Styles/Hero.css";
import ClipLoader from "react-spinners/ClipLoader";
import useFetch from "../customHook/useFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Hero = ({cart,handleAddToCart,setCart}) => {
  const { data: data, loading: loading } = useFetch(
    "https://fakestoreapi.com/products/14"
  );  
  //console.log(data);
  const { data: data2, loading: loading2 } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const notify = () =>{ toast("An item has been added!",{position:toast.POSITION.TOP_CENTER});}
  //console.log(data);
  return (
    <div className="container my-5 hero-container">
      <h2>{loading && <ClipLoader />}</h2>
      <div className="row justify-content-between gap-5">
        <div className="col-sm-12 col-md- col-lg-6 shadow-sm">
          {/* <img src={data.image} alt={data.title} className="w-100 hero-img" /> */}
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={data.image} className=" hero-img" />
          </Card>
        </div>
        {/* card section */}
        <div className="col-sm-12 col-lg-5 shadow-sm">
          <div className="card-container">
            {data2.map((datum2)=> {
              const { id, title, image, price } = datum2;
              return (
                <div key={id} className="card-inner h-25 text-center">
                  <h2>{loading && <ClipLoader />}</h2>
                  <Card style={{ width: "" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    <Card.Img variant="top" src={image} className="w-75" />
                    </Link>
                   
                    <Card.Body>
                      <Card.Title>{title.slice(0, 5)}</Card.Title>
                      <Card.Text className='fw-bold text-danger'>${price}</Card.Text>
                      <Button variant="primary" className="btn-sm" onClick={()=>{handleAddToCart(datum2);notify()}}>Add to Cart</Button>
                      <ToastContainer/>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
