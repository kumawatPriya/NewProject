import React from "react";
import image1 from "../Media/sportT-shirt.webp";


function SportsMenu() {
    const menu = [
        {
            name: "Track Pants &  Joggers",
            name1: "Polo T-Shirt",
            name2: "T-shirts & Tanks",
            name3: "Tracksuit",
            name4: "Jercey",
        },
        {

            name: "Sweatshirt",
            name1: "Hoddies",
            name2: "Sports Shoes",
        },
    ]

    return (
        <>
            <div className="menu-box-main">
             
                <div className="menu">
                    
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
                {/* <div className="menu-1">
                        <div className="sub-menu-cate-2"><p>MEN'S</p></div>
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

                    </div> */}
                    </div>
        </>
    )
}

export { SportsMenu }