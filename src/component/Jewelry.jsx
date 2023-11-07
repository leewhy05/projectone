import React from "react";
import "../Styles/Electronics.css";
import useFetch from "../customHook/useFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import CartContext from "../context/CartContext";
import { useContext } from 'react';


const Jewelry = () => {
  // const {handleAddToCart} = useContext(CartContext)
  const {handleAddToCart} = useContext(CartContext)
  const { data, loading } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const notify = () =>{ toast("An item has been added!",{position:toast.POSITION.TOP_CENTER});}
  return (
    <div>
      <div className="component-title mt-4">
        <h2>JEWELRY CATEGORY</h2>
      </div>
      <h2>{loading && <ClipLoader />}</h2>
      <main className="card-container-electronics my-4">
        {data.map((datumJewelry) => {
          const { id, image, price, title } = datumJewelry;
          return (
            <div key={id} className="text-center p-1 card-inner-electronics">
              <Card style={{ width: "" }}>
                <Link to={`/SingleProduct/${id}`}>
                  <Card.Img variant="top" src={image} className="w-75" />
                </Link>
                {/* <Card.Img variant="top" src={image}
                    className="w-75" /> */}
                <Card.Body>
                  <Card.Title>{title.slice(0, 20)}</Card.Title>
                  <Card.Text className="fw-bold text-danger">${price}</Card.Text>
                  <Button
                    variant="primary"
                    className="btn-sm"
                    onClick={() => {
                      handleAddToCart(datumJewelry);
                      notify();
                    }}
                  >
                    Add To Cart
                  </Button>
                  <ToastContainer />
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Jewelry;
