import React from "react";
import { Navbar } from "../HomePage/Navbar";
import { TopHeading } from "../HomePage/TopHeading";
import { Slider } from "../HomePage/Slider";
import { Category } from "../HomePage/Category";
import { Swiper } from "../HomePage/Swiper";
import { SwiperWomen } from "../HomePage/SwiperWomen";
import { Submenu } from "../HomePage/Submenu";
import { Footer } from "../HomePage/Footer";
import { Spiner } from "../Spiner/Spiner";
import { ContemporarySlider } from "../HomePage/ContemporarySlider";
import { ResponsiveNav } from "../ResponsiveNav/ResponsiveNav";


function Home() {

    return (
        <>
            <div className="Topheading"><TopHeading /></div>

            <div className="nav-main">
                <div className="navbar"><Navbar /></div>
            </div>
         
            <div className="responsive-nav-main">
                <div><ResponsiveNav/></div>
            </div>
            <div className="slider-main"><Slider /></div>

            <div className="category-main"><Category /></div>

            <div className="swiper-main"><Swiper /></div>

            <div className="contamporary-slider"><ContemporarySlider/></div>

            <div className="women-slider">
                <div className="swiper-main-women"><SwiperWomen /></div>
            </div>
            <div className="submenu-main"><Submenu /></div>

            <div className="footer-main"><Footer /></div>
        </>
    )
}

export { Home }