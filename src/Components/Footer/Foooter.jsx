import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li > <a href='/Men'> Men's Clothing</a></li>
              <li> <a href='/Women'>  Women's Clothing</a></li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Get to know us</h4>
            <ul>
              <li>Sustainability</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Our Story</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>For customers</h4>
            <ul>
              <li>Payments</li>
              <li>Shipping & Delivery</li>
              <li>Product Returns</li>
              <li>FAQ</li>
              <li>Size Guide</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4> <img src="src/assets/Pics/NavBar/KaizarLogo.png" /></h4>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 <span className="brand-name">Kaizar</span> Clothing & Fashion. All Rights Reserved.</p>
        </div>
      </footer>
    )
  };
  
  export default Footer