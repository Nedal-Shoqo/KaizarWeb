import "./App.css";

function App() {
  return (
    <div className="MainDiv">
      <div className="LandingPageBox1">
        <div className="LeftSideBox1">
          <h6> Men Section </h6>
          <h1> Arrived Now </h1>
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
        <img id="Men"  src="src\assets\Pics\LandingPage\Man.png" alt="Category" />
        <img id="Woman"  src="src\assets\Pics\LandingPage\Women.png" alt="Category" />
        </div>
        
        <p id="CategoryText"> Be the first to know about 
        upcoming sales and special clothes. </p>
         </div>



      <div className="LandingPageBox1"> 3 </div>
    </div>
  );
}

export default App;
