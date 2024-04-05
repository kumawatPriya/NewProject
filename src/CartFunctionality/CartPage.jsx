import React, { useState } from "react";
import "./cart.css";
import "./removemodal.css"
import { useCart } from "react-use-cart";
import truckicon from "../Media/truck.svg";
import { Link } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";



function CartPage({ onNextStep }) {
    const { items, isEmpty, removeItem, totalUniqueItems, cartTotal, updateItemQuantity } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [itemToRemove, setItemToRemove] = useState(null);

    const handleRemove = (id) => {
        setItemToRemove(id);
        setShowModal(true);
    };

    const handleConfirmRemove = () => {
        if (itemToRemove) {
            removeItem(itemToRemove); // Using removeItem directly here
            setShowModal(false);
        }
    };

    const handleCancelRemove = () => {
        setShowModal(false);
        setItemToRemove(null);
    };
    const handleIncrement = (productId, quantity) => {
        if (quantity < 5) {
          updateItemQuantity(productId, quantity + 1);
        } else {
          toast.error("We're sorry! Only 5 items are allowed in each order.");
        }
      };

      const handleDecrement = (productId, quantity) => {
        if (quantity > 0) {
          updateItemQuantity(productId, quantity - 1);
        }
      };

    if (isEmpty) {
        return (
            <>
            <div className="main">
                <div className="empty-cart">
                    <div className="empty-cart-bx">
                        <div className="empty-cart-img"></div>
                        <div className="empty-cart-text">
                            <h5>You have no items in your shopping cart.</h5>
                            <h5 style={{ marginLeft: "4px" }}><Link to='/western'> Click here to continue shopping </Link></h5>
                        </div>
                    </div>
                </div>
                <div className="payment-images">
                    <div className="bank-ssl"></div>
                    <div className="bank-visa"></div>
                    <div className="bank-mc"></div>
                    <div className="bank-ae"></div>
                    <div className="bank-dc"></div>
                    <div className="bank-nb"></div>
                    <div className="bank-cod"></div>
                    <div className="bank-rupay"></div>
                    <div className="bank-paypal"></div>
                    <div className="bank-bhim"></div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
        <ToastContainer theme="dark" hideProgressBar={true} transition={Slide} autoClose={1500} position="bottom-center"/>
        <p className="back-to-shopping">
            <i class="fa-solid fa-arrow-left"></i>
            <Link to="/western">Back to shopping</Link>
        </p>
            <div className="cart-details">
                <div className="left-section">
                    <div className="free-del-heading">
                        <img src={truckicon} alt="" /> &nbsp;&nbsp;
                        <span>Yay! <span style={{ fontWeight: "500" }}>Free Delivery</span> on this order..</span>
                    </div>
                    <div className="cart-total">
                        <h6>Shopping Cart ({totalUniqueItems} Items)</h6>
                        <h6>Total: Rs. {cartTotal}</h6>
                    </div>
                    {
                        items.map((cData) => {
                        
                            return (
                                <>
                                    <div className="product-bx">
                                        <div className="cart-img-container">
                                            <img src={cData.image} alt="" /></div>
                                        <div className="product-content">
                                            <h5>{cData.link3}</h5>
                                            <h6>{cData.category}</h6>
                                            <p className="product-size">Size: {cData.size}</p>
                                            <div className="price-size-section">
                                                <div>

                                                    <p className="product-price">Rs. {cData.price * cData.quantity}</p></div>
                                                <div className="quantity-buttons">
                                                <button onClick={() => handleDecrement(cData.id, cData.quantity)}><span>-</span></button>
                                                    {cData.quantity}
                                                    <button onClick={() => handleIncrement(cData.id, cData.quantity)}><span>+</span></button>
                                                </div>
                                            </div>

                                            <div className="remove-btn">
                                                <button onClick={() => handleRemove(cData.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })} {showModal && (
                            <div className="modal">
                                <div className="modal-content">
                                    <p className="close" onClick={handleCancelRemove}>&times;</p>
                                    <div style={{ textAlign: "center" }}>    <p>Remove Product</p></div>
                                    <p>Are you sure you want to remove this item from cart?</p>
                                    <div className="popUp-btns">

                                        <button className="popUp-cancel-btn" onClick={handleCancelRemove}>Cancel</button>
                                        <button className="popUp-remove-btn" onClick={handleConfirmRemove}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )}


                </div>
                <div className="right-section">
                    <h6>PRICE DETAILS</h6>
                    <div className="price-details">
                        <div>
                            <span>Cart Total</span>
                            <span>Rs. {cartTotal}</span>
                        </div>
                        <div>
                            <span>Cart Discount</span>
                            <span style={{ color: 'green' }}>- Rs. 0</span>
                        </div>
                        <div>
                            <span>Order Total</span>
                            <span>Rs. {cartTotal}</span>
                        </div>
                        <div>
                            <span>Delivery Charges</span>
                            <span style={{ color: "green" }}>Free</span>
                        </div>
                    </div>
                    <div className="total-price">
                        <span>Total</span>
                        <span>Rs. {cartTotal}</span>
                    </div>
                  <div className="checkout-btn-div">  <button className="checkout-btn" onClick={onNextStep}>Place Order</button></div>
                </div>
            </div>
        </>
    )
}

export { CartPage }