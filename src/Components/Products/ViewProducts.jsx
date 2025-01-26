import React, { useState } from 'react';
import Footer from '../Footer/Foooter.jsx';
import Dslider from '../Products/Components/DSlider.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './ViewProducts.css';

const ProductsPage = () => {
  // Step 1: Initialize state to control the visibility of options
  const [showOptions, setShowOptions] = useState(false);

  // Step 2: Handle button click to toggle options visibility
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const Category = " None ";

  return (
    <div className='Page'>
      <Navbar />
      <br />


      <p id='ShopCat'> Home / Shop / {Category} </p>

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
            <button id='Shorts'> Shorts </button>
             <Dslider />
          </div>

         
        </div>

        {/* Products Section */}
        <div className='RightSide'> 
        <div id='HeaderForProducts'> { Category } </div>
        <div className='Products'> Cards </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
