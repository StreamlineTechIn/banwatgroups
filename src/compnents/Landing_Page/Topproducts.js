import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { BgColor } from "./css/commonStyles";

const products = [
  // {
  //   image: chair,
  //   title: "Product1 ",
  //   description: "Description1",
  // },

  {
    id: 1,
    name: 'Flat Inline Drip Tape',
    image: require('../../Assests/FLAT.png'), // Update image path as needed
    shortDescription: 'Size: 12 MM, 16 MM, 20 MM\nThickness: 0.2, 0.25, 0.3, 0.4, 0.5\nLength: 1000 MTR / 500 MTR\nLPH: 2 LPH, 4 LPH',
    price: '₹Price not specified', // Add price if available
    discountPrice: '₹Discount price not specified', // Add discount price if available
    discount: 'Discount not specified', // Add discount if available
    delivery: 'Free delivery', // Add delivery details if available
    exchangeOffer: 'No exchange offer' // Add exchange offer if available
  },
  {
    id: 2,
    name: 'Hydrogel Drip',
    image: require('../../Assests/HYDROGOLDRIP.png'), // Update image path as needed
    shortDescription: 'Size: 12 MM, 16 MM, 20 MM\nThickness: Not specified\nLength: 300 MTR / 500 MTR\nLPH: 4 LPH',
    price: '₹Price not specified',
    discountPrice: '₹Discount price not specified',
    discount: 'Discount not specified',
    delivery: 'Free delivery',
    exchangeOffer: 'No exchange offer'
  },
  {
    id: 3,
    name: 'Rain Pipe',
    image: require('../../Assests/FLAT.png'), // Update image path as needed
    shortDescription: 'Size: 32, 40, 63, 75 MM\nThickness: 350 Micron\nLength: 100 MTR',
    price: '₹Price not specified',
    discountPrice: '₹Discount price not specified',
    discount: 'Discount not specified',
    delivery: 'Free delivery',
    exchangeOffer: 'No exchange offer'
  },
  {
    id: 4,
    name: 'Flexible Pipe',
    image: require('../../Assests/FLEXIBALEPIPE.png'), // Update image path as needed
    shortDescription: 'Size: 63 MM, 75 MM\nLength: 61 MTR (200 FT)',
    price: '₹Price not specified',
    discountPrice: '₹Discount price not specified',
    discount: 'Discount not specified',
    delivery: 'Free delivery',
    exchangeOffer: 'No exchange offer'
  },

];

const TopProduct = () => {
  const navigate = useNavigate();

  const handleExplore = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  }
  return (
    <BgColor>
      <div className="top-product-container">
        <h1 className="title">Top Products</h1>
        <p className="description px-1">
          Quis mollit nisi mollit commodo cupidatat cupidatat occaecat nulla.
          Occaecat velit adipisicing laborum nisi veniam enim non.
        </p>
        <div className="product-grid row">
          {products.map((product, index) => (
            <div key={index} className="product-card col-6">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                {/* <p className="product-description">{product.shortDescription}</p> */}
                <button onClick={() => handleExplore(product)} className="explore-button">Explore</button>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <button className="explore-button btn" onClick={() => navigate('/product-list')}>View All Products</button>
        </div>
        <style>
          {`
        .top-product-container {
          text-align: center;
          padding: 0rem;
          padding-bottom:30px;
        }

        .product-grid {
          display: flex;
          // flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          margin-top: 2rem;
          padding: 10px 40px;
        }

        .product-card {
          background-color: #f3f4f6;
          color: black;
          border-radius: 8px;
          flex: 1 1 50%;
          // overflow: hidden;
          width: 100%;
          max-width: 400px;
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: scale(1.05);
        }

        .product-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .product-info {
          padding: 1rem;
        }

        .product-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .product-description {
          font-size: 0.9rem;
          margin: 0.5rem 0;
        }

        .explore-button {
          background-color: #3b82f6;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn{
          margin-top: 30px;

        }

        .explore-button:hover {
          background-color: #2563eb;
        }

         
        `}
        </style>
      </div>
    </BgColor>
  );
};

export default TopProduct;
