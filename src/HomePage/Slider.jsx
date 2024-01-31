import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Image } from "../Props/SliderImage";
import s1 from "../Media/img1.jpg"
import s2 from "../Media/slide-3.avif"
import s3 from "../Media/img2.webp"
import s4 from "../Media/img3.webp"
import s5 from "../Media/slide3.jpg"

function Slider() {
  return (
    <>
      <Carousel >
        <Carousel.Item interval={1500} autoPlay={true}>
          <Image cimage={s1} />
          <Carousel.Caption className="slider-text">
          <h3>A Minimalist Charm</h3>
            <button>SHOP ELEGANT STYLES</button>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} autoPlay={true}>
          <Image cimage={s2} />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1500} autoPlay={true}>
          <Image cimage={s3} />
          <Carousel.Caption className="slider-text">
          <h3>OUR CHANDERI COLLECTIBLES</h3>
            <button>SHOP CHANDERI EDIT</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} autoPlay={true}>
          <Image cimage={s4} />
          <Carousel.Caption className="slider-text1">
            <h3>DRESS-UP FOR CELEBRATIONS</h3>
            <button>SHOP FESTIVE FAVOURITES</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} autoPlay={true}>
          <Image cimage={s5} />
          {/* <Carousel.Caption>
            <h3>Our Chanderi Collectibles</h3>
            <button>SHOP CHANDERI EDIT</button>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export { Slider }