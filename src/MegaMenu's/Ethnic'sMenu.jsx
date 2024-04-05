import React from "react";
import image1 from "../Media/PinkKurta.jpg";
import image2 from "../Media/menKurta.jpg"

function EthnicMenu() {
    const menu = [
        {
            name: "Suit Set",
            name1: "Kurta Set",
            name2: "Sharara Set",
            name3: "Co-ord Set",
            name4: "Saree's",
        },
        {

            name: "Anarkali Kurta",
            name1: "Long Kurta",
            name2: "Chickenkari Kurta",
            name3: "Lehnga Set",
        },
    ]
    const men = [
        {
           name: "Embroidery Kurta",
           name1: "Nehru Jacket's",
           name2: "Sherwani's",
           name3: "Dhoti Set's",
           name4: "Bhandgala's Jacket",
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

export { EthnicMenu }