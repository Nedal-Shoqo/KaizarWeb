import React, { useState } from 'react';
import Footer from '../../Footer/Foooter.jsx';
import Dslider from '../Components/DSlider.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import './ViewProduct.css';
import { Link, useLocation } from 'react-router-dom';
 // Logs the current URL path (e.g., "/")

const ProductsPage = () => {



 
 const location = useLocation();
 const pathWithoutSlash = location.pathname.replace(/^\/+/, ''); // Removes leading slashes

const color = ['red' , 'white' , 'black' , 'yellow' ];
const size =["XXl","XL","L","M"];

const [category, setCategory] = useState(pathWithoutSlash);
  const [colorArray, setColor] = useState(color);
  const [sizeArray, setSize] = useState(size);
  const [categoryType, setCategoryType] = useState("T-Shirt");
  const [productName, setProductName] = useState("T-Shirt with details on the neck and wide hands short length");
  const [originalPrice, setOriginalPrice] = useState("29.99");
  const [discountedPrice, setDiscountedPrice] = useState("9.99");
  const [SR, setSR] = useState("75H23SX");
  const [stockAvailability, setStockAvailability] = useState("Available");

const [Amount,SetAmount] = useState(0);



function AmountAdder(){
SetAmount(Amount+1);
}
function AmounrReducer(){
    if(Amount>0)
    {SetAmount(Amount-1);}
    }
    


  return (
    <div className='Page'>
      <Navbar />
      <br />



      <p id="ShopCat">
  <Link to="/">Home</Link> / Shop / {category}
</p>
      <div className='Main'>
        <div className='ProductOptions'>
         
          <div className="Details">
         <p style={{color:"grey"}}> {categoryType}  </p>
         <h2 id='ProductName'> {productName}   </h2>
         <div id='Prices'>  
         <p style={{ color: "#777", textDecoration: "line-through",fontSize:"1rem" }}>
        Original Price: {originalPrice}
      </p>
      <p style={{ fontSize:"1rem", fontWeight: "bold"  , color: "#99011E"}}>
        Discounted Price: {discountedPrice}
      </p>
      </div>
      <div id='colors'></div>
      <p style={{color:"black"  , fontSize:"1.5rem"}}>Colors : </p>    
      
      
      
      <br />
      {colorArray.map((backColor) => (
        <button
          style={{
        
            
            border: "1px solid #ccc",
            borderRadius: "60%",
            width:"5px",
            gap:"5px",
            margin:"10px",
            cursor: "pointer",
            backgroundColor: backColor,
          }}
        >
          
        </button> 

      ))}
      <br />
      <p style={{ color:'black' , fontSize:"1.5rem" }}> Size: </p>  
     {sizeArray.map((SIZE) => {
  return (
    <button
      style={{
        fontSize: "1rem",
        width:"50px",
        margin:"10px",
        borderRadius: "50%",
        border:"1px solid",
        cursor: "pointer",
        backgroundColor: 'transparent',
      }}
    >
      {SIZE}
    </button>
     );
    })}


       <div className="AmountCounter">  <button onClick={AmounrReducer}> - </button> {Amount} <button onClick={AmountAdder}> + </button>  </div>
          </div>

          <div id='Save'> <button id='cart'> Add To Cart </button>  <button id='WishList'>  </button>  </div>

          <hr />

          <div id='SerialNumber ' style={{color:"black"}}> Serial-Number : { SR } </div>
          <div id=" Stock"  style={{color:"black"}}> Stock : { stockAvailability }</div>
          <div id="Type" style={{color:"black"}}> Type : {categoryType}   </div>   
          
        </div>

        {/* Products Section */}
        <div className='RightSide'> 
        <div className='Products'> Cards </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
  