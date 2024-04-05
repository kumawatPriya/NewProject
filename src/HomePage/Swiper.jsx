import React from "react";
import dress1 from "../Media/km-category-kurta.webp";
import dress2 from "../Media/km-designer-kheer-ganga.webp";
import dress3 from "../Media/km-category-t-shirt.webp";
import dress4 from "../Media/km-designer-quintessential.webp";
import dress5 from "../Media/km-category-suits.webp";
import dress6 from "../Media/print-shirt.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Swiper() {

    const cards = [
        {
            image: `${dress1}`,
            name: "Black kurta embroidered Jacket set",
            price: "3,500Rs.",
            buttn: "Shop Now"
        },
        {
            image: `${dress2}`,
            name: "White Plam Printed Shirt",
            price: "1,599Rs.",
            buttn: "Shop Now"
        },

        {
            image: `${dress3}`,
            name: "Pista Green T-shirt",
            price: "2,499Rs.",
            buttn: "Shop Now"
        },
        {
            image: `${dress4}`,
            name: "Crewel Cream Printed Shirt",
            price: "2,999Rs.",
            buttn: "Shop Now"
        },
        {
            image: `${dress5}`,
            name: "Royal Blue Suit set",
            price: "6,599Rs.",
            buttn: "Shop Now"
        },
        {
            image: `${dress6}`,
            name: "Maroon Surkh Shirt",
            price: "2,499Rs.",
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <div className="category-heading">
                <h2>SEASON'S FAVORITE</h2>
                <h3>Discover the key trends of the season</h3>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        cards.map((data) => {
                            return (
                                <>
                                    <div className="image-container-main">
                                        <div className="image-container">
                                            <img src={data.image} alt="" />
                                        </div>

                                    </div>
                                    <div className="cate-name">
                                        <p>{data.name}</p>
                                    </div>
                                    <div className="text-container">
                                        <div><h5>{data.price}</h5></div>
                                        <div><button>{data.buttn}</button></div>
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

export { Swiper }