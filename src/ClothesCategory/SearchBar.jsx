import React, { useState } from "react";
import { NavIcons } from "../HomePage/NavIcons";
import "./searchbar.css";
import { Link } from "react-router-dom";
import { EthnicMenu } from "../MegaMenu's/Ethnic'sMenu";
import { SportsMenu } from "../MegaMenu's/SportsMenu";
import { WatchesMenu } from "../MegaMenu's/WatchesMenu";
import { FootwearMenu } from "../MegaMenu's/FootwearMenu";
import { BagsMenu } from "../MegaMenu's/BagsMenu";
import { Submenu } from "../HomePage/Submenu";



function SearchBar(props) {

  const [value,setValue] = useState(null);

  const changeItems = (e)=>{
    setValue(e.target.value)
    props.send(e.target.value)
  }
   
    return (
        <>
            <div className="search-bar">

                <div className="web-logo">
                  <Link to="/">
                    <span className="glam">Glam</span>
                    <span className="attire">WEAR</span></Link>
                </div>

                <div className="search-input">
                    <input onChange={changeItems} type="text" placeholder="Search Products here...." />
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div className="search-bar-icons">
                    <NavIcons/>
                </div>
            </div>
        </>
    )
}

export { SearchBar }

function ProductBar(){
    return(
        <>
         <div className="product-bar">
        <ul>
        <li className="nav-list">  <Link to="/">HOME</Link>
        </li>
        <li className="nav-list">  <Link to="/western">WESTERN</Link>
          <div className="product-bar-menu"><Submenu/></div>
        </li>
        <li className="nav-list">  <Link to="/ethnics">ETHNICS</Link>
          <div className="product-bar-menu"><EthnicMenu/></div>
        </li>
        <li className="nav-list">  <Link to="/sports">SPORTS</Link>
          <div className="product-bar-menu"><SportsMenu/></div>
        </li>
        <li className="nav-list">  <Link to="/watches">WATCHES</Link>
          <div className="product-bar-menu"><WatchesMenu/></div>
        </li>
        <li className="nav-list">  <Link to="/bags">BAGS</Link>
          <div className="product-bar-menu"><BagsMenu/></div>
        </li>
        <li className="nav-list">  <Link to="/footwear">FOOTWEAR</Link>
          <div className="product-bar-menu"><FootwearMenu/></div>
        </li>
        </ul>
        
        </div>
        </>
    )
}

export {ProductBar}