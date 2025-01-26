import Footer from '../Footer/Foooter.jsx'
import Dslider from '../Products/Components/DSlider.jsx'
import './ViewProducts.css';

const ProductsPage =()=>{


const Category =" None "

return(

    <>

    <p> Home / Shop / { Category }  </p>


<div className='Main'>
<div className='Categories'>

    <button id='Hoodies'> SweatShirts & Hoodies </button>
    <button id='T-Shirts'> T-Shirts </button>
    <button id='Shirts'> Shirts</button>
    <button id=' Jackets'> Jackets & Coats </button>
    <button id='Jeans'> Jeans </button>
    <button id=' Shorts'> Shorts </button>
    <Dslider/> 


</div>
<div className='Products'></div>
</div>


    <Footer/>
    </>


)


}

export default ProductsPage;