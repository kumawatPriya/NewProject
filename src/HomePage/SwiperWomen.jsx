import React from "react";
import dress7 from "../Media/printed-anarkali.webp";
import dress8 from "../Media/sale-dresses.webp";
import dress9 from "../Media/red-anarkali.webp";
import dress10 from "../Media/sale-co-cords.webp";
import dress11 from "../Media/sale-abarkali.webp";
import dress12 from "../Media/saree.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SwiperWomen() {
    const cards = [
        {
            image: `${dress7}`,
            name: "HandBlock Prints",
            disc: "UPTO 25% OFF",
            buttn: "Shop Now"
        },
        {
            image: `${dress8}`,
            name: "Breezy Dresses",
            disc: "UPTO 40% OFF",
            buttn: "Shop Now"
        },
        {
            image: `${dress9}`,
            name: "Classic Anarkali's",
            disc: "UPTO 15% OFF",
            buttn: "Shop Now"
        },
        {
            image: `${dress10}`,
            name: "Stylish Co-Ords",
            disc: "UPTO 60% OFF",
            buttn: "Shop Now"
        },
        {
            image: `${dress11}`,
            name: "Twirly Anarkali's",
            disc: "UPTO 45% OFF",
            buttn: "Shop Now"
        },
        {
            image: `${dress12}`,
            name: "Traditional Saree's",
            disc: "UPTO 50% OFF",
            buttn: "Shop Now"
        },
    ]

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "rgb(236 232 227)", opacity: "0.8", width: "36px" }}
                onClick={onClick}
            />
        );
    };


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        className: "center",
        centerMode: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="women-slider-title">
               <h2>The Best Of Sale</h2>
            </div>
<div className="women-slider-content">
    <p className="shop-now">SHOP <br />NOW</p>
    <p className="text">Get a head start with these blouses & shirts, designed for that much needed time off.</p>
</div>
        
            <div className="women-swiper">
                <Slider {...settings}>
                    {
                        cards.map((data) => {
                            return (
                                <>
                                    <div className="image-container-main">
                                        <div className="image-container-women">
                                            <img src={data.image} alt="" />
                                        </div>

                                    </div>
                                    <div className="cate-main">
                                        <div className="cate-name-women">
                                            <p className="prod-name">{data.name}</p>
                                            <div><p className="prod-discount">{data.disc}</p></div>
                                        </div>
                                        <div>
                                            <button>{data.buttn}</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export { SwiperWomen }