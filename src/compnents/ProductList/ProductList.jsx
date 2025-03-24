import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ContactForm from '../Landing_Page/Form';
import { BgColor } from '../Landing_Page/css/commonStyles';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const products = [
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
  {
    id: 5,
    name: 'Krushi Pipe',
    image: require('../../Assests/KRUSHIPIPE.png'), // Update image path as needed
    shortDescription: 'Size: 3 INCH & 4 INCH\nLength: 400 FT',
    price: '₹Price not specified',
    discountPrice: '₹Discount price not specified',
    discount: 'Discount not specified',
    delivery: 'Free delivery',
    exchangeOffer: 'No exchange offer'
  },
  {
    id: 6,
    name: 'Accessories of Rain Pipe',
    image: require('../../Assests/_MG_6881.JPG'), // Update image path as needed
    shortDescription: 'Size: 32 MM, 40 MM\nComponents: Cock, Joiner, Endcap, Gromet',
    price: '₹Price not specified',
    discountPrice: '₹Discount price not specified',
    discount: 'Discount not specified',
    delivery: 'Free delivery',
    exchangeOffer: 'No exchange offer'
  }
];

const ProductListPage = () => {
  useEffect(() => {
          AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        }, []);

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <BgColor>
      <div className="container-fluid p-5 mainContainer">
      <h1 className="text-center display-4 fw-bold mb-1 heading">🌟 Product Showcase 🌟</h1>
      <p className='text-center m-5 px-5 desc'>This are the top products saled by our industries. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quidem dolorum? Dolore itaque maiores in illum quos. Ipsum, architecto aperiam facere voluptatibus sed magni ab impedit laboriosam deleniti et animi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, in! Exercitationem obcaecati voluptate quod dolore quia at libero molestiae nesciunt explicabo, dolorem accusantium. Voluptatibus quidem nostrum, minima eveniet autem veniam?</p>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-8 mb-4">
            <div
              className="card bg-light shadow-sm p-4 h-100 d-flex flex-row align-items-center"
              onClick={() => handleProductClick(product)}
              style={{ cursor: "pointer" }} // Makes the card clickable
              data-aos="zoom-in"
            >
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded me-4"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="flex-grow-1 card-details">
                <h2 className="h3 fw-bold mb-3">{product.name}</h2>
                <p className="text-muted mb-3" style={{ whiteSpace: "pre-line" }}>{product.shortDescription}</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="h4 text-success fw-bold me-3">{product.price}</span>
                  <span className="text-muted text-decoration-line-through me-3">{product.discountPrice}</span>
                  <span className="badge bg-danger">{product.discount}</span>
                </div>
                <p className="text-muted mb-1">{product.delivery}</p>
                <p className="text-primary fw-medium">{product.exchangeOffer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <ContactForm />

    <style>
      {`
        @media (max-width: 576px) {
          .mainContainer{
            width:100%;
          }
          .p-5 {
            padding: 1rem !important;
          }
            .m-5{
              margin: 10px 0px !important;
              padding: 0rem !important;
            }
          .heading{
            width:100%;
            font-size: 25px;
          }
            .desc{
              margin-bottom:25px !important;
            }
              .card{
                flex-direction:column !important;
              }
                .card-details{
                  margin-:10px !important;
                  text-align:center;
                }
              img{
                width:100% !important;
                margin-bottom:15px;
              }
        }
      `}
    </style>
    </BgColor>
  );
};
export default ProductListPage;