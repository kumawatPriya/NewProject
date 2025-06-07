import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Image } from "../Props/SliderImage";
import s1 from "../Media/slider-karaj-jaipur.webp"
import s2 from "../Media/mens-km-sliders-Desginers.webp"
import s3 from "../Media/img2.jpg"
import s4 from "../Media/img3.webp"
import s5 from "../Media/slider-SALE.webp"

function Slider() {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item interval={2500} autoPlay={true} >
          <Image cimage={s1} className='slider_img'/>
          <Carousel.Caption className="slider-text">
            <h3>A Minimalist Charm</h3>
            <button>SHOP ELEGANT STYLES</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500} autoPlay={true}>
          <Image cimage={s2} className='slider_img'/>
          <Carousel.Caption className="slider-text1">
            <h3>Luxe Styles For Occasions</h3>
            <button>SHOP STATEMENT STYLES</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500} autoPlay={true}>
          <Image cimage={s3} className='slider_img'/>
          <Carousel.Caption className="slider-text">
            <h3>OUR CHANDERI COLLECTIBLES</h3>
            <button>SHOP CHANDERI EDIT</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500} autoPlay={true}>
          <Image cimage={s4} className='slider_img'/>
          <Carousel.Caption className="slider-text1">
            <h3>DRESS-UP FOR CELEBRATIONS</h3>
            <button>SHOP FESTIVE FAVOURITES</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} autoPlay={true}>
          <Image cimage={s5} className='slider_img'/>
          <Carousel.Caption className="slider-text">
            <h3>Grace in Every Stitch</h3>
            <button>DISCOVER TIMELESS PIECES</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export { Slider }