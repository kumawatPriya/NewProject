import React from "react";
import image1 from "../Media/bagimg.webp";
import image2 from "../Media/bagImgmen.webp"

function BagsMenu() {
    const menu = [
        {
            name: "Handbag's",
            name1: "Sling Bag's",
            name2: "Shoulder Bag's",
            name3: "Clutches",
            name4: "College Bags",
        },
     
    ]
    const men = [
        {
           name: "Wallets",
           name1: "Gym Bag",
           name2: "Luggage",
           name3: "Backpacks",
           name4: "Travel bags",
   
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
                        <div className="sub-menu-cate-4"><p>MEN'S</p></div>
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

export { BagsMenu }