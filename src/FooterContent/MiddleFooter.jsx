import React from "react";
import payMethods from "../Media/payment-method.png";
import image1 from "../Media/24x7-Support.png";
import image2 from "../Media/designer-count.png"
import image3 from "../Media/free-shipping.png";
import image4 from "../Media/app-store.jpg"
import image5 from "../Media/google-play.jpg"

function MiddleFooter() {
    return (
        <>
            <div className="middle-footer">
                <div className="mf-sec1">
                    <h5>100% SAFE AND SECURE PAYMENTS</h5>
                    <p>We accept netbanking, all major credit <br /> cards and orders that are cash on <br /> delivery</p>
                    <img src={payMethods} alt="" />
                </div>
                <div className="mf-sec2">
                    <div>
                        <div className="image"> <img src={image1} alt="" /></div>
                        <p>24x7 Support</p>
                    </div>
                    <div>
                        <div className="image"> <img src={image2} alt="" /></div>
                        <p>1k+ Designers</p>
                    
                    </div>

                    <div>
                        <div className="image"> <img src={image3} alt="" /></div>
                        <p>Free Shipping</p>
                    </div>

                </div>
                <div className="app-download">
                    <h5>DOWNLOAD OUR APP</h5>
                    <div>
                        <div className="app-img-container">  <img src={image4} alt="" /></div>
                        <div className="app-img-container">    <img src={image5} alt="" /></div>
                    </div>
                    <div className="social-icons">
                        <h5>Follow Us:</h5>
                        <span>
                            <a href="https://www.instagram.com">  <i class="fa-brands fa-instagram"></i></a>
                        </span>
                        <span>
                            <a href="https://www.facebook.com">   <i class="fa-brands fa-facebook"></i></a>
                        </span>
                        <span>
                            <a href="https://www.twitter.com">  <i class="fa-brands fa-twitter"></i></a>
                        </span>
                        <span>
                          <a href="https://www.youtube.com">  <i class="fa-brands fa-youtube"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { MiddleFooter }