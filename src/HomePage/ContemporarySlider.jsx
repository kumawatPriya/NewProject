import React from "react";
import SlideImage from "../Media/Contemporary-slider-relaxed-edit.jpg"

function ContemporarySlider(){
    return(
        <>
        <div><h1>Handblock Prints</h1></div>
        <div><h5>Elevate your look with natural block prints</h5></div>
        <img src={SlideImage} alt="" />
        </>
    )
}

export {ContemporarySlider}