import React, { useState } from 'react';
import Footer from '../../Footer/Foooter.jsx';
import Dslider from '../Components/DSlider.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Card from '../ProductCard/Card.jsx'
import './ViewProductsMen.css';
import { Link, useLocation } from 'react-router-dom';
 // Logs the current URL path (e.g., "/")

const ProductsPage = () => {

  // Step 1: Initialize state to control the visibility of options
  const [showOptions, setShowOptions] = useState(false);

  // Step 2: Handle button click to toggle options visibility
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

 

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://example.com/headphones.jpg",
      price: "99.99",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Smartwatch",
      image: "https://example.com/smartwatch.jpg",
      price: "199.99",
      description:
        "A stylish smartwatch with fitness tracking and heart rate monitor.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      image: "https://example.com/speaker.jpg",
      price: "49.99",
      description:
        "Portable Bluetooth speaker with deep bass and long battery life.",
    },
  ];
  


 const location = useLocation();
 const pathWithoutSlash = location.pathname.replace(/^\/+/, ''); // Removes leading slashes

 const Category = pathWithoutSlash;
  return (
    <div className='Page'>
      <Navbar />
      <br />



      <p id="ShopCat">
  <Link to="/">Home</Link> / Shop / {Category}
</p>
      <div className='Main'>
        <div className='Categories'>
          {/* Step 3: Button to toggle options visibility */}
          <button id='ResButton' onClick={handleToggleOptions}>
            Categories
          </button>

          {/* Step 4: Conditionally apply 'show' class to display options */}
          <div className={`Options ${showOptions ? 'show' : ''}`}>
            <button id='Hoodies'> SweatShirts & Hoodies </button>
            <button id='T-Shirts'> T-Shirts </button>
            <button id='Shirts'> Shirts </button>
            <button id='Jackets'> Jackets & Coats </button>
            <button id='Jeans'> Jeans </button>
            <button id='Bottoms'> Bottoms </button>

            <span id="SlidersPrice"><Dslider /> </span>
          </div>

         
        </div>

        {/* Products Section */}
        <div className='RightSide'> 
        <div id='HeaderForProducts'> { Category } </div>
        <div className='Products'>


        {products.map((product) => (
              <Card product={product}
              />
            ))}
           

            </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
