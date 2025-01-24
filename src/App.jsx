import "./App.css";

function App() {
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
          {" "}
          Be the first to know about upcoming sales and special clothes.{" "}
        </p>
      </div>

      <div className="LandingPageBox3"></div>
    </div>
  );
}

export default App;
