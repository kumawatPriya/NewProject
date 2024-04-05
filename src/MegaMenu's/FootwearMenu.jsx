import React from "react";
import image1 from "../Media/heels.webp";
import image2 from "../Media/shoesforMenu.webp"

function FootwearMenu() {
    const menu = [
        {
            name: "Snadles",
            name1: "Heels",
            name2: "Wedges",
            name3: "Ballerians",
            name4: "Slippers",
        },
        {

            name: "Sports Shoes",
            name1: "Casual Shoes",
            name2: "Flip-Flops",
       
        },
    ]
    const men = [
        {
           name: "Sports Shoes",
           name1: "Casual Shoes",
           name2: "Formal Shoes",
           name3: "Floaters",
           name4: "Running Shoes",
           name5: "Sneakers",
           name6: "Boots",
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
                                        <p>{data.name5}</p>
                                        <p>{data.name6}</p>
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

export { FootwearMenu }