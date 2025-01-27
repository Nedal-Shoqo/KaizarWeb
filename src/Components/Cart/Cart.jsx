import React, { useState } from 'react';
import Footer from '../Footer/Foooter.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Cart.css';
import { Link, useLocation } from 'react-router-dom';
 // Logs the current URL path (e.g., "/")

const ProductsPage = () => {

  const Price =0;
  const Discounts =0;
  const TotalPrice =0;

  // Step 1: Initialize state to control the visibility of options
  const [showOptions, setShowOptions] = useState(false);

  // Step 2: Handle button click to toggle options visibility
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

 
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
        <div className='Order'>
          {/* Step 3: Button to toggle options visibility */}
          <div id='Summary' >
            <h2>Summary</h2>
          </div>

          {/* Step 4: Conditionally apply 'show' class to display options */}
          <div className="Calculates">
          <div id='Price'> Items Subtotal:  {Price} </div>
          <div id='Discount'> Discounts:  {Discounts} </div>
          <div id='Total'>  Total Price:  {TotalPrice} </div>
          <button id='OrderButton'> Go To Checkout </button>
          <p id='Policies'> By placing your order ,you agree to be bound by the Kaizar <a id='ImportantText'>Terms of Service</a> and  <a id='ImportantText'> Privacy Policy </a>. </p>
          </div>

         
        </div>

        {/* Products Section */}
        <div className='RightSide'> 
        <div id='HeaderForCart'> Shoping { Category } </div>
        <div className='Products'> Cards </div>
        
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
