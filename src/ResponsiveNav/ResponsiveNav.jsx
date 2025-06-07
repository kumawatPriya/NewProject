import React, { useState } from "react";
import { NavIcons } from "../HomePage/NavIcons";
import { Link } from "react-router-dom";
import "./responsiveNav.css"
import { GiHamburgerMenu } from "react-icons/gi";

function ResponsiveNav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = ()=>{
        setSidebar(true)
    }
    const closeSidebar = ()=>{
        setSidebar(false)
    }
    const navList = [
        { name: "HOME", path: "/" },
        { name: "WESTERN", path: "/western" },
        { name: "ETHNICS", path: "/western" },
        { name: "SPORTS", path: "/" },
        { name: "BAGS", path: "/" },
        { name: "WATCHES", path: "/" },
        { name: "FOOTWEAR", path: "/" },
    ]
    return (
        <>
            <div className="responsive-navbar">
                <div className="logo">
                    <span className="glam">Glam</span>
                    <span className="attire">WEAR</span>
                </div>
                <div style={{display: 'flex', alignItems: 'baseline', gap: '22px', width: '35%'}}>
                <div className="navicon-main">
                    <NavIcons/>
                </div>
                <div className="sidebar-btns">
                     <button className={`${(sidebar === true)? "Hide" : 'Show'}`} onClick={showSidebar}>
                       <GiHamburgerMenu />
                    </button>

                     <button className={`${(sidebar === false)? "HideButn": "ShowButn"}`} onClick={closeSidebar}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className={`${(sidebar===true)? "openbar" : "closebar"}`}>
                    {
                        navList.map((data) => {
                            return (
                                <>
                                    <ul>
                                        <li><Link to={data.path}>{data.name}</Link></li>
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
                </div>
              
            </div>
        </>
    )
}

export { ResponsiveNav }