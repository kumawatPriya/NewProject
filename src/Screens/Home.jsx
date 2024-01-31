import React from "react";
import { Navbar } from "../HomePage/Navbar";
import { TopHeading } from "../HomePage/TopHeading";
import { Slider } from "../HomePage/Slider";
import { Category } from "../HomePage/Category";


function Home(){
    return(
        <>
       <div className="Topheading"><TopHeading/></div>
        <div className="navbar"><Navbar/></div>
        <div className="slider-main"><Slider/></div>
        <div className="category-main"><Category/></div>
        </>
    )
}

export {Home}