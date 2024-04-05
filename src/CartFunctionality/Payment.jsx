import React, { useState } from "react";
import { QRCode } from 'react-qrcode-logo';
import { useCart } from "react-use-cart";
import "./payment.css";
import img1 from "../Media/icon-cod._CB485937110_.png"
import img2 from "../Media/icon-delivered._CB485933725_.png"
import img3 from "../Media/icon-returns._CB484059092_.png"
import img4 from "../Media/icon-top-brand._CB617044271_.png"
import img5 from "../Media/Secure-payment._CB650126890_.png"
import img6 from "../Media/trust_icon_free_shipping_.png"

function Payment() {

    const { cartTotal, totalUniqueItems } = useCart();
    const [money, setMoney] = useState(cartTotal)

    return (
        <>
            <div className="payment-by-scanner">
                <div className="left-section-payment">
                    <div className="scanner-heading"><h5>Scan QR for code secure payment</h5></div>
                    <div className="scan-bx">
                        <div className="purple-background">
                            <h5 className="phonepe-text">PhonePe</h5>
                            <div className="white-background">
                                <p className="payment-accepted">ACCEPTED HERE</p>
                                <QRCode value={`upi://pay?pa=9636843365@ibl&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`} />
                                <p className="scan-text">Scan & Pay Using PhonePe App</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-section-payment">
                    
                        <h6>PRICE DETAILS ({totalUniqueItems} Items) </h6>
                        <div className="price-details-payment">
                            <div>
                                <span>Order Total</span>
                                <span>{cartTotal}</span>
                            </div>
                            <div>
                                <span>Delivery Charges</span>
                                <span style={{ color: "#08b708" }}>Free</span>
                            </div>
                            <div style={{ borderTop: "1px solid darkgrey", marginTop: "11px", paddingTop: "4px" }}>
                                <span>Total</span>
                                <span>{cartTotal}</span>
                            </div>
                        </div>

                        <div className="facilities">
                        <div className="type">
                            <img src={img1} alt="" />
                            <p>Free Delivery</p>
                        </div>
                        <div className="type">
                            <img src={img2} alt="" />
                            <p>Pay on Delivery</p>
                        </div>
                        <div className="type">
                            <img src={img3} alt="" />
                            <p>Return Policy</p>
                        </div>
                        <div className="type">
                            <img src={img4} alt="" />
                            <p>Top Brand</p>
                        </div>
                        <div className="type">
                            <img src={img5} alt="" />
                            <p>Delivered</p>
                        </div>
                        <div className="type">
                            <img src={img6} alt="" />
                            <p>Secured Payment</p>
                        </div>
                    </div>
                    </div>
                </div>
            </>
            )
}

            export {Payment}