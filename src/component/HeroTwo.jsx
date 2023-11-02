import useFetch from "../customHook/useFetch";
import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../Styles/HeroTwo.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";



const Jewelry = ({handleAddToCart}) => {
    const { data: data3, loading: loading3 } = useFetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
    console.log(data3)
    const notify = () =>{
      toast("An Item has been added",{
        position:toast.POSITION.TOP_CENTER
      });
  }
  return (
    <div className="container mt-3    card-women ">
        {data3.map((datum3) => {
              const { id, title, image, price } = datum3;
              return (
                <div key={id} className="card-innerJ text-center ">
                  <Card className="classJ" style={{ width: "" }} >
                  <Link to={`/SingleProduct/${id}`}>
                    <Card.Img variant="top" src={image} className=" card-container-img" />
                    </Link>
                    {/* <Card.Img variant="top" src={image} className="w-50 card-container-img" /> */}
                    <Card.Body className="text-center">
                      <Card.Title>{title.slice(0,5)}</Card.Title>
                      <Card.Text>
                        {`${price}`}
                      </Card.Text>
                      <Button className="btn-sm" onClick={()=>{handleAddToCart(datum3);notify()}} variant="primary">Add to chart</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        
    </div>
  )
}

export default Jewelry