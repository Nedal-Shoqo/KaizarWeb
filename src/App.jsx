import "./App.css";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import SignUp from "./Components/LandingPage/SignUp/SignUp";
import SignIn from "./Components/LandingPage/SignIn/SignInForm";

function App() {


  const isMobile = useMediaQuery({ maxWidth: 580 });
  const [coverContent,setCover] = useState("Already have an account??")
  const [content,changeContent] = useState("SignIn");
  const [style, setStyle] = useState({


    
      
      position: 'absolute',
      backgroundColor: 'rgb(146, 35, 35)',
      height: '90vh',
      width: '50%',
      transition: 'transform 1s ease',
      overflow: 'hidden',
      display: 'flex', 
      alignItems: 'center', 
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      fontSize: '2rem',
      fontFamily: 'Times New Roman, serif'
  
  
      // Prevent overflow
  })

useEffect( () =>{
  setStyle({
    ...style,
    height: '45vh',
    width: '100%',
  });
},[isMobile])

useEffect(() => {
  setStyle((prevStyle) => ({
    ...prevStyle,
    height: isMobile ? "45vh" : "90vh",
    width: isMobile ? "100%" : "50%",
    transform: "translateY(0)", // Reset on screen resize
  }));
}, [isMobile]);
  
  const handleClick = () => {
    if (isMobile) {
      if (content === "SignIn") {
        changeContent("Register");
        setCover("Need an account?")
        setStyle({
          ...style,
          transform: 'translateY(100%)',
          height: '45vh',
          width: '100%',
        });
      } else {
        changeContent("SignIn");
        setCover("Already have an account?? ")
        setStyle({
          ...style,
          transform: 'translateY(0)',
          height: '45vh',
          width: '100%',
        });
      }
    } else {
      if (content === "SignIn") {
        changeContent("Register");
        setCover("Need an account? ")

        setStyle({
          ...style,
          transform: 'translateX(100%)',
          height: '90vh',
          width: '50%',
        });
      } else {
        changeContent("SignIn");
                setCover("Already have an account?? ")

        setStyle({
          ...style,
          transform: 'translateX(0)',
          height: '90vh',
          width: '50%',
        });
      }
    }
  };

  return (



    <div className="MainDiv">
      <div className="LandingPageBox1">
        <div className="LeftSideBox1">
          <div className="MenSectionText">
            <p id="_2"> ___ </p>
            <h6> Men Section </h6>
            <p id="_"> ___ </p>
          </div>

          <div className="ArrivedNowDecoration">
            <p id="Line"> | </p>
            <h1> Arrived Now </h1>
          </div>
          <h3> Latest Man Trends </h3>
          <button id="ShopNow"> Shop Now </button>
        </div>

        <div className="RightSideBox1">
          <img
            id="Man"
            src="src/assets/Pics/LandingPage/Group1.png"
            alt="Landing Page Rectangle"
          />
        </div>
      </div>

      <div className="LandingPageBox2">
        <div className="MenAndWoman">
          <div id="Men">
            <p id="MenText"> Discover The Mans World </p>
            <button id="MenButton"> View Now!</button>
          </div>

          <div id="Woman">
            <p id="WomanText"> Explore The Womens Fashion </p>
            <button id="WomanButton"> Join Now!</button>
          </div>
        </div>

        <p id="CategoryText">
          Be the first to know about upcoming sales and special clothes.
        </p>
      </div>

      <div className="LandingPageBox3">
        <div id="SignIn"><SignIn /></div>
        <div id="SignUp"> <SignUp /> </div>
        <div id="Cover" style={style}>
          <p id="CoverContent"> {coverContent} </p>
          <button id="Switch" onClick={handleClick}> {content} </button>
        </div>   
           </div>
           <div className="LandingPageBox4">
            <img id="BackGroundImgBox4" src="src/assets/Pics/LandingPage/Box4.png"/>

           </div>
    </div>
  );

}
export default App;
