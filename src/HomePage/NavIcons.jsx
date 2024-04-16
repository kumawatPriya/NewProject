import React from "react";
import cartIcon from "../Media/cart-icon.svg"
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function NavIcons(){
    const {totalUniqueItems} = useCart()
    return(
        <>
        <div className="nav-icons">
            <div>
                <div className="cart-icon">
            <Link to="/checkout">
                <p>{totalUniqueItems}</p>
            <img src={cartIcon} alt="" />
            </Link></div>
            </div>
            <div className="heart-icon">
            <i class="fa-regular fa-heart"></i>
            </div>
            <div className="nav-login-btn">
                <button className="login-btn"><Link to="/login">Login</Link></button>
            </div>
                <button className="login-icon"><Link to="/login"><i class="fa-regular fa-user"></i></Link></button>
        </div>
        
        </>
    )
}

export {NavIcons}