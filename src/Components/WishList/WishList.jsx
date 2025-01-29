import React, { useState } from 'react';
import Footer from '../Footer/Foooter.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './WishList.css';
import { Link, useLocation } from 'react-router-dom';
 // Logs the current URL path (e.g., "/")

const ProductsPage = () => {

  const Price =0;
  const Discounts =0;
  const TotalPrice =0;

  // Step 1: Initialize state to control the visibility of options

  // Step 2: Handle button click to toggle options visibility


 
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
