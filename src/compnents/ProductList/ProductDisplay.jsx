import React from "react";
import { useLocation } from "react-router-dom";

const ProductDisplay = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h2 className="text-center">Product Not Found</h2>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{product.name}</h1>
      <div className="card p-4">
        <img src={product.image} alt={product.name} className="img-fluid mx-auto d-block" style={{ maxWidth: "300px" }} />
        <p className="mt-3">{product.shortDescription}</p>
        <h4 className="text-success">{product.price}</h4>
        <p className="text-muted text-decoration-line-through">{product.discountPrice}</p>
        <p className="badge bg-danger">{product.discount}</p>
        <p>{product.delivery}</p>
        <p className="text-primary">{product.exchangeOffer}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
