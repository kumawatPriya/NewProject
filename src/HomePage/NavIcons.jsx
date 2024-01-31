import React from "react";
import cartimg from "../Media/cart.jpeg"

function NavIcons(){
    return(
        <>
        <div className="nav-icons">
            <div>
            {/* <i class="fa-solid fa-bag-shopping"></i> */}
            <img style={{width: "20px"}} src={cartimg} alt="" />
            </div>
            <div className="heart-icon">
            <i class="fa-regular fa-heart"></i>
            </div>
            <div className="nav-login-btn">
                <button>Login</button>
            </div>
        </div>
        
        </>
    )
}

export {NavIcons}