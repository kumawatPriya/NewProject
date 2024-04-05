import React from "react";


function Newsletter(){
    return(
        <>
        <div className="category-heading mt-20">
            <h2>BE THE FIRST TO KNOW</h2>
            <h3>Sign up for our newsletter and stay updated on the  <br />latest trends, sales and pop-ups</h3>
            <div className="newsLetter-input">
            <input type="email" placeholder="Enter Your E-mail" />
            <button>SIGN UP</button>
            </div>
        </div>
        </>
    )
}

export {Newsletter}