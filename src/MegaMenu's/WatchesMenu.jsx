import React from "react";
import image1 from "../Media/women watch.webp";
import image2 from "../Media/menWatch.webp"

function WatchesMenu() {
    const menu = [
        {
            name: "Watches",
            name1: "Smart Watch",
           
        },
    ]
    const men = [
        {
           name: "Watches",
           name1: "Smart Watch",
           
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
                                 
                                    </div>
                                    
                                </>
                            )
                        })
                    }
                    <div className="menu-img-container" style={{width: "180px"}}><img src={image1} alt="" /></div>

                    </div>
                    <div className="menu-1">
                        <div className="sub-menu-cate-3"><p>MEN'S</p></div>
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
                    <div className="menu-img-container" style={{width: "180px"}}><img src={image2} alt="" /></div>

                    </div>
                    </div>
        </>
    )
}

export { WatchesMenu }