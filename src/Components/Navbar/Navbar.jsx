import React, { useState } from "react";

import './Navbar.css'
const Navbar = () => {



    

    return ( 
    <header className="Header">
        <div  className="leftSide"> 
         <a href="/" className="Logo"> <img src="src/assets/Pics/NavBar/KaizarLogo.png" /> </a>
        </div> 

        <nav className="Nav">
            
            <a href="/Wishlist" className="WishList"></a>
            <a href="/" className="Account"></a>
            <a href="/Cart" className="Cart"></a>
        


        </nav>
        </header>
      );
};

export default Navbar;
