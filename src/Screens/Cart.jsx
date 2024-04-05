import React, { useState } from "react";
import '../CartFunctionality/cart.css'
import { CartPage } from "../CartFunctionality/CartPage";
import { Checkout } from "../CartFunctionality/Checkout";
import { Payment } from "../CartFunctionality/Payment";
import { Link } from "react-router-dom";
import { Spiner } from "../Spiner/Spiner";
// import { Link } from "react-router-dom";

function Cart() {

   const [activePage,setActivePage] = useState('/checkout');


   const [pageHistory, setPageHistory] = useState([]);

   const handlePageChange = (page) => {
     setPageHistory([...pageHistory, activePage]);
     setActivePage(page);
   };

   const handlePayment = ()=>{
    if(activePage === "/payment"){
        setActivePage("/address")
    }
   }
 


    return (
        <>
            <div className="top-section">
                <div className="logo">
                    <span className="glam">Glam</span>
                    <span className="attire">WEAR</span>
                </div>

                <div className="checkout-steps">
                    <div className={activePage === '/checkout' ? 'active' : 'default'}>
                    <p className={activePage === '/address' || '/payment' ? 'cart-text' : 'cart-text-pointer'} onClick={() => handlePageChange('/checkout')}>Cart</p>
                    </div>
<div className="responsive-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
                    <div className={activePage === '/address' ? 'active' : 'default'}>
                    <p className={activePage === '/address' ? 'address-text' : activePage === '/payment' ? 'address-text-pointer' : 'address-text'} style={{marginRight: "10px"}} onClick={handlePayment} >Address</p>
                    </div>
<div className="responsive-arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
                    <div className={activePage === '/payment' ? 'active' : 'default'}>
                    <p style={{marginLeft: "8px"}} >Payment</p>
                    </div>
                </div>

                <div className="secure-text">
                    <div className="secure-icon"></div>
                    <div><p>100% Secure </p></div>
                </div>

            </div>

            <div className="cartpage-head">
            <p>Prices are inclusive of all taxes</p>
        </div>

             {/* Render different content based on activePage */}
            <div>
            {activePage === '/checkout' && 
            <div className="cartPage-main">
            <CartPage onNextStep={() => setActivePage('/address')} />
            </div>
            }
            {activePage === '/address' && <div> <Checkout onNextStep={() => setActivePage('/payment')} /></div>}
            {activePage === '/payment' && <Payment/>}
            </div>
     
        </>
    )
}

export { Cart }