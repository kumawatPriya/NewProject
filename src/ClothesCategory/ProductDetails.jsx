import React, { useState } from "react";
import { westernData } from "./WesternCData";
import { Link, useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import { Navbar } from "../HomePage/Navbar";
import { PinCode } from "../PinCode/Pincode";
import { MiddleFooter } from "../FooterContent/MiddleFooter";
import { BottomFooter } from "../FooterContent/BottomFooter";
import { Copyright } from "../FooterContent/Copyright";
import { useCart } from "react-use-cart";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lightningIcon from "../Media/9594-200.png"
import { ResponsiveNav } from "../ResponsiveNav/ResponsiveNav";
import { TopHeading } from "../HomePage/TopHeading";


function ProductDetails() {
    
    const { items } = useParams();
    console.log(items);

    const productData = westernData.find(item => item.id === items)


    // for ADD Product in Cart =======================================
    const { addItem, inCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddToCart = () => {
        if (selectedSize) {
            addItem({ ...productData, size: selectedSize });
            setErrorMessage('');
            showToast()
        } else {
            setErrorMessage('Please select a size before adding to cart.');
        }
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        setErrorMessage('');
    };

    // for Toastify -----------------------------------------------
    const showToast = () => {
        toast.success("Product added to your cart")
    }

    // for Image Magnifier Effect ---------------------------------
    const [picture, setPicture] = useState(productData.image)

    const handlePicture = (e) => {
        setPicture(e)
    }


    return (
        <>
           
            <div className="Topheading"><TopHeading /></div>
            <div className="navbar"><Navbar /></div>

            <div className="responsive-nav-main">
                <div><ResponsiveNav /></div>
            </div>

            <div className="product-path">
                <ul>
                    <Link to="/"><li>Home</li></Link> &nbsp;
                    <span style={{ marginRight: "4px" }}>/</span>
                    <Link to="/western"><li> Western</li></Link>&nbsp;
                    <li> / {productData.link3}</li>
                </ul>
            </div>
            <div className="params-page-main">
                <div className="react-magnify-main">
                    <div className="magnifier-side-images">
                        <img onClick={() => { handlePicture(productData.image) }} src={productData.image} alt="" />
                        <img onClick={() => { handlePicture(productData.img1) }} src={productData.img1} alt="" />
                        <img onClick={() => { handlePicture(productData.img2) }} src={productData.img2} alt="" />
                        <img onClick={() => { handlePicture(productData.img3) }} src={productData.img3} alt="" />
                    </div>

                    <div className="bx-img" style={{ width: "415px", height: "542px" }}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: picture,
                                width: 400,
                                height: 500
                            },
                            largeImage: {
                                src: picture,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: { height: '100%', width: '145%' },

                        }} /></div>
                </div>
                <div className="details-content">
                    <h4>{productData.productType}</h4>
                    <p>{productData.category}</p>
                    <div className="feed-content">
                        <div className="feed-star">
                            <span className="color"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></span>
                            <span className="blank"><i class="fa-regular fa-star"></i></span>
                        </div>
                        <div className="ratings">{productData.ratings}</div></div>
                    <div className="price-section">
                        <p>Special Price</p>
                        <h5>₹ {productData.price}</h5>

                        <div className="mrp">
                            <div> <span>M.R.P - ₹</span>
                                <span className="past-price">   {productData.pastPrice}</span></div>
                            <div className="deal-time">
                                <span>Deal of the Day</span>
                                {/* <span>Offer Ends in :</span>
                                    <span className="timer"><CountDown/></span> */}
                            </div>
                        </div>

                        <p className="taxes">{productData.taxes}</p>
                    </div>
                    <div className="size-section">
                        <h6>Select Size</h6>
                        <div className="size-container">
                            <button style={{
                                marginRight: '10px', backgroundColor: selectedSize === "S" ? 'black' : 'white',
                                color: selectedSize === "S" ? "white" : "black",
                                cursor: 'pointer'
                            }}
                                onClick={() => handleSizeClick("S")}><span>S</span></button>
                            <button style={{
                                marginRight: '10px', backgroundColor: selectedSize === "M" ? 'black' : 'white',
                                color: selectedSize === "M" ? "white" : "black",
                                cursor: 'pointer'
                            }}
                                onClick={() => handleSizeClick("M")}><span>M</span></button>
                            <button style={{
                                marginRight: '10px', backgroundColor: selectedSize === "L" ? 'black' : 'white',
                                color: selectedSize === "L" ? "white" : "black",
                                cursor: 'pointer'
                            }}
                                onClick={() => handleSizeClick("L")}><span>L</span></button>
                            <button style={{
                                marginRight: '10px', backgroundColor: selectedSize === "XL" ? 'black' : 'white',
                                color: selectedSize === "XL" ? "white" : "black",
                                cursor: 'pointer'
                            }}
                                onClick={() => handleSizeClick("XL")}><span>XL</span></button>
                            <button style={{
                                marginRight: '10px', backgroundColor: selectedSize === "XXL" ? 'black' : 'white',
                                color: selectedSize === "XXL" ? "white" : "black",
                                cursor: 'pointer'
                            }}
                                onClick={() => handleSizeClick("XXL")}><span>XXL</span></button>
                            {errorMessage && <p className="size-required-text" style={{ color: 'red' }}>{errorMessage}</p>}
                        </div>
                    </div>
                    <div className="cartNbuyBtn">
                        <button className="buy-bttn">BUY NOW &nbsp;<img className="lightening-icon" src={lightningIcon} alt="" /></button>
                        {/* <button className="cart-bttn" onClick={handleAddToCart}>ADD TO CART</button> */}
                        <div className="cart-bttn">
                            {
                                inCart(productData.id) ? <Link className="goToCartBtn" to="/checkout">
                                    <button >GO TO CART</button>
                                </Link> :
                                    <button onClick={handleAddToCart}>ADD TO CART</button>

                            }
                        </div>
                    </div>
                    <div className="pincode-functionality">
                        <h5> Select Delivery Location</h5>
                        <p>Enter the pincode of your area to check product <br /> availability and delivery options</p>
                        <div><PinCode /></div>
                    </div>
                    <div className="shipped">
                        <h5>Shipped In</h5>
                        <p>{productData.shipped}</p>
                    </div>
                    <div className="product-details-main">
                        <h5>Product Details</h5>
                        <div className="detail-bx">
                            <div>
                                <h6>Material Type</h6>
                                <p>{productData.fabric}</p>
                            </div>
                            <div>
                                <h6>Fit Type</h6>
                                <p>{productData.fitType}</p>
                            </div>
                            <div>
                                <h6>Style</h6>
                                <p>{productData.style}</p>
                            </div>
                            <div>
                                <h6>Sleeve</h6>
                                <p>{productData.sleeve}</p>
                            </div>
                            <div>
                                <h6>Care</h6>
                                <p>{productData.care}</p>
                            </div>
                            <div>
                                <h6>Country Of Origin</h6>
                                <p>{productData.origin}</p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h5>Description</h5>
                        <ul>
                            <li>{productData.detail1}</li>
                            <li>{productData.detail2}</li>
                            <li>{productData.detail3}</li>
                            <li>{productData.detail4}</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="mid-footer">   <MiddleFooter /></div>
            <div className="bottom-footer-main"><BottomFooter /> </div>
            <div><Copyright /></div>
        </>
    )
}

export { ProductDetails }