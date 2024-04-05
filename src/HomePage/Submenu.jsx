import React from "react";
import image1 from "../Media/submenu-img.jpg";
import image2 from "../Media/submenu-men-img.jpg"

function Submenu() {
    const menu = [
        {
            name: "Tops",
            name1: "T-shirt",
            name2: "Dresses",
            name3: "Co-ords",
            name4: "Bottoms",
        },
        {

            name: "Jumpsuit",
            name1: "Jacket",
            name2: "Gowns",
            name3: "Sweatshirt & Hoddies",
            name4: "Winter Wear",
        },
        {

            name: "Jeans",
            name1: "Scarves",
            name2: "Shawl's",
            name3: "Stole",
            name4: "Formal Pants",
            image: `${image1}`
        },
    ]
    const men = [
        {
           name: "Casual T-shirts",
           name1: "Jeans and Bottoms",
           name2: "Formal Shirts",
           name3: "Sports Wear",
           name4: "Jackets",
           image: `${image2}`
       },
    ]
    return (
        <>
            <div className="menu-box-main">
             
                <div className="menu">
                    
                    <div className="sub-menu-cate"><p>WOMEN'S</p></div>
                    {
                        menu.map((data) => {
                            return (
                                <>
                                    <div className="menu-box">
                                        <p>{data.name}</p>
                                        <p>{data.name1}</p>
                                        <p>{data.name2}</p>
                                        <p>{data.name3}</p>
                                        <p>{data.name4}</p>
                                    </div>
                                    
                                </>
                            )
                        })
                    }
                    <div className="menu-img-container"><img src={image1} alt="" /></div>

                    </div>
                    <div className="menu-1">
                        <div className="sub-menu-cate-1"><p>MEN'S</p></div>
                    {
                        men.map((data) => {
                            return (
                                <>
                                    <div className="menu-box-1">
                                        <p>{data.name}</p>
                                        <p>{data.name1}</p>
                                        <p>{data.name2}</p>
                                        <p>{data.name3}</p>
                                        <p>{data.name4}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="menu-img-container"><img src={image2} alt="" /></div>

                    </div>
                    </div>
        </>
    )
}

export { Submenu }