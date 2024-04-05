import React from "react";
import cardImg1 from "../Media/catogery-kurtas.webp"
import cardImg2 from "../Media/catogery-menswear.webp"
import cardImg3 from "../Media/western.webp"
import cardImg4 from "../Media/shoes.webp"
import cardImg5 from "../Media/bag.webp";
import cardImg6 from "../Media/watch.webp"
import { Link } from "react-router-dom";


function Category() {
    const cardData = [
        {
            image: `${cardImg3}`,
            text: "Western Wear",
            url: "/western"
        },
        {
            image: `${cardImg2}`,
            text: "Mens Wear"
        },
        {
            image: `${cardImg1}`,
            text: "Ethnic Wear",
           
        },
        {
            image: `${cardImg4}`,
            text: "Footwear"
        },
        {
            image: `${cardImg5}`,
            text: "HandBags"
        },
        {
            image: `${cardImg6}`,
            text: "Watches"
        },
    ]
    return (
        <>
            <div className="category-heading">
                <h2>SHOP BY CATEGORY</h2>
                <h3>Adding Versatality To Your Closet</h3>
            </div>
            <div className="card-content">

                {
                    cardData.map((data) => {
                        return (
                            <>
                                <div className="card-img-text">
                                    <img src={data.image} alt="" /> <br />
                                    <button><Link to={data.url}>{data.text}</Link></button>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export { Category }