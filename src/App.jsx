import "./App.css";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SignUp from "./Components/LandingPage/SignUp/SignUp";
import SignIn from "./Components/LandingPage/SignIn/SignInForm";
import Footer from'./Components/Footer/Foooter.jsx'
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";


function App() {

  const handleSignUp = (userData) => {
    console.log(userData)
    fetch('http://localhost:3000/Register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      // Handle success here (e.g., show success message, navigate, etc.)
    })
    .catch(error => {
      console.error("Error:", error);
      // Handle error here (e.g., show error message)
    });
  };
  
  
  const handleSignIn = (userD) => {
    console.log(userD)
    fetch('http://localhost:3000/Login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userD),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      // Handle success here (e.g., show success message, navigate, etc.)
    })
    .catch(error => {
      console.error("Error:", error);
      // Handle error here (e.g., show error message)
    });
  };


  const isMobile = useMediaQuery({ maxWidth: 750 });
  const [coverContent, setCover] = useState("Already have an account??");
  const [content, changeContent] = useState("SignIn");
  const [style, setStyle] = useState({

   
  



    position: "absolute",
    backgroundColor: "rgb(146, 35, 35)",
    height: "90vh",
    marginTop: "1.4rem",
    width: "50%",
    transition: "transform 1s ease",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "2rem",
    fontFamily: "Times New Roman, serif",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Add the box shadow here
  });


  useEffect(() => {
    setStyle({
      ...style,
      height: "45vh",
      width: "100%",
    });
  }, [isMobile]);

  useEffect(() => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      height: isMobile ? "45vh" : "90vh",
      marginTop: isMobile ? "0rem" : "1.4rem",
      width: isMobile ? "100%" : "50%",
      transform: "translateY(-10)", // Reset on screen resize
    }));
  }, [isMobile]);


  const handleClick = () => {
    if (isMobile) {
      if (content === "SignIn") {
        changeContent("Register");
        setCover("Need an account?");
        setStyle({
          ...style,
          transform: "translateY(107%)",
          height: "45vh",
          width: "100%",
        });
      } else {
        changeContent("SignIn");
        setCover("Already have an account?? ");
        setStyle({
          ...style,
          transform: "translateY(0)",
          height: "45vh",
          width: "100%",
        });
      }
    } else {
      if (content === "SignIn") {
        changeContent("Register");
        setCover("Need an account? ");
        setStyle({
          ...style,
          transform: "translateX(100%)",
          height: "90vh",
          marginTop: "1.4rem",
          width: "50%",
        });
      } else {
        changeContent("SignIn");
        setCover("Already have an account?? ");

        setStyle({
          ...style,
          transform: "translateX(0)",
          height: "90vh",
          marginTop: "1.4rem",
          width: "50%",
        });
      }
    }
  };

  
  const navigate = useNavigate();

  return (
    <div className="MainDiv">
      <Navbar />
      <div className="LandingPageBox1">
        <div className="LeftSideBox1">
          <div className="MenSectionText">
            <br />
            <br />
            <br />
          </div>
          <div className="ArrivedNowDecoration">
            <p id="Line"> | </p>
            <h1> Arrived Now </h1>
          </div>
          <h3> Latest Man Trends </h3>
          <button
            id="ShopNow"
            onClick={() => {
              navigate("/Men");
            }}
          >
            {" "}
            Shop Now{" "}
          </button>
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
            <button
              id="MenButton"
              onClick={() => {
                navigate("/Men");
              }}
            >
              {" "}
              View Now!
            </button>
          </div>
 
          <div id="Woman">
            <p id="WomanText"> Explore The Womens Fashion </p>
            <button
              id="WomanButton"
              onClick={() => {
                navigate("/Women");
              }}
            >
              {" "}
              Join Now!
            </button>
          </div>
        </div>

        <p id="CategoryText">
          Be the first to know about upcoming sales and special clothes.
        </p>
      </div>

      <div className="LandingPageBox3">
        <div id="SignIn">
          <SignIn  onSignIn={handleSignIn} />
        </div>
        <div id="SignUp">

          <SignUp onSignUp={handleSignUp} />

        </div>
        <div id="Cover" style={style}>
          <img id="Slider" src={"src/assets/Pics/LandingPage/Slider3.png"} />
          <p id="CoverContent"> {coverContent} </p>
          <button id="Switch" onClick={handleClick}>
            {content}
          </button>
        </div>
      </div>
      <div className="LandingPageBox4">
        <img
          id="BackGroundImgBox4"
          src="src/assets/Pics/LandingPage/Box4.png"
        />
      </div>
      <div className="LandingPageBox5">
        <img
          id="BackGroundImgBox5"
          src="src/assets/Pics/LandingPage/Box5.png"
        />
      </div>
      <Footer />
    </div>
  );



}
export default App;
