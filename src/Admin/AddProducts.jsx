import { useState } from "react";
import './AddProducts.css'
import NavBar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Foooter'



export default function ProductForm() {
    const [inStock, setInStock] = useState(true);
    const [productStatus, setProductStatus] = useState("Active");
    const [colors, setColors] = useState([])
    let ColorsWanted = "";


    function setColorsWanted(C) { ColorsWanted = C; }

    function addColors(COLORS) {

        const array = COLORS.split(" ")

        setColors(array);


    }


    return (
        <>
            <div className="product-form">
                <NavBar />
                <div className="product-section">
                    <h2>Product Information</h2>
                    <input type="text" placeholder="Product Name" className="input-field" />
                    <select className="input-field">
                        <option>Men</option>
                        <option>Women</option>
                    </select>

                    <div className="size-options">
                        {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                            <button key={size} className="size-button">
                                {size}
                            </button>
                        ))}
                    </div>

                    <h3 style={{ color: "black" }}>Product Images</h3>
                    <div className="upload-area">Drop files here to upload.</div>

                    <h3 style={{ color: "black" }}>Product Description</h3>
                    <textarea
                        placeholder="Add The Colors"
                        className="input-field textarea"
                        onChange={(e) => setColorsWanted(e.target.value)}
                    ></textarea>
                    <button id="SaveColors" onClick={() => addColors(ColorsWanted)}>
                        {" "}
                        Save Colors{" "}
                    </button>

                    <div className="color-options">
                        {colors.map((color) => (
                            <button
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "60%",
                                    width: "5px",
                                    gap: "5px",
                                    margin: "10px",
                                    cursor: "pointer",
                                    backgroundColor: color,
                                }}
                            ></button>
                        ))}
                    </div>

                    <h3 style={{ color: "black" }}>Product Description</h3>
                    <textarea
                        placeholder="Immerse yourself in a creative endeavor"
                        className="input-field textarea"
                    ></textarea>
                </div>

                <div className="RightSide">
                    <div className="product-details">
                        <div className="product-status-section">
                            <div>
                                <span>In Stock</span>
                                <input
                                    type="checkbox"
                                    checked={inStock}
                                    onChange={() => setInStock(!inStock)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Product code"
                                className="input-field"
                            />
                            <input
                                type="text"
                                placeholder="Product SKU"
                                className="input-field"
                            />
                            <div>
                                <h4>Product Status</h4>
                                {["Active", "Deactivate", "Draft"].map((status) => (
                                    <label key={status}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value={status}
                                            checked={productStatus === status}
                                            onChange={() => setProductStatus(status)}
                                        />
                                        {status}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="product-price-section">
                            <h3>Product Price</h3>
                            <input
                                type="text"
                                placeholder="Regular price"
                                className="input-field"
                            />
                            <input
                                type="text"
                                placeholder="Sale price"
                                className="input-field"
                            />
                        </div>
                    </div>

                    <button className="add-product-button">Add Product</button>
                </div>

            </div>
            <Footer />
        </>
    );
}
