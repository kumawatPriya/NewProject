import React from "react";
import { Newsletter } from "../FooterContent/Newsletter";
import { MiddleFooter } from "../FooterContent/MiddleFooter";
import {BottomFooter} from "../FooterContent/BottomFooter"
import { Copyright } from "../FooterContent/Copyright";


function Footer(){
    return(
        <>
       <div className="newsletter-main"> <Newsletter/></div>
        <MiddleFooter/>
      <div className="bottom-footer-main">  <BottomFooter/></div>
      <div><Copyright/></div>
        </>
    )
}

export {Footer}