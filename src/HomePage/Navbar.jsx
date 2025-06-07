import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavIcons } from "./NavIcons";
import { Submenu } from "./Submenu";
import { EthnicMenu } from "../MegaMenu's/Ethnic'sMenu";
import { SportsMenu } from "../MegaMenu's/SportsMenu";
import { WatchesMenu } from "../MegaMenu's/WatchesMenu";
import { FootwearMenu } from "../MegaMenu's/FootwearMenu";
import { BagsMenu } from "../MegaMenu's/BagsMenu";

function Navbar() {

  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate('/')
  }

  return (
    <>


      <div className="logo" onClick={handleNavigate} style={{cursor: 'pointer'}}>
        <span className="glam">Glam</span>
        <span className="attire">WEAR</span>
      </div>
      <div className="navlist">
        <ul>
        <li className="nav-list">  <Link to="/western">WESTERN</Link>
          <div className="submenu-main"><Submenu/></div>
        </li>
        <li className="nav-list">  <Link to='/western'>ETHNICS</Link>
          <div className="submenu-main"><EthnicMenu/></div>
        </li>
        <li className="nav-list">  <Link >SPORTS</Link>
          <div className="submenu-main"><SportsMenu/></div>
        </li>
        <li className="nav-list">  <Link >WATCHES</Link>
          <div className="submenu-main"><WatchesMenu/></div>
        </li>
        <li className="nav-list">  <Link >BAGS</Link>
          <div className="submenu-main"><BagsMenu/></div>
        </li>
        <li className="nav-list">  <Link >FOOTWEAR</Link>
          <div className="submenu-main"><FootwearMenu/></div>
        </li>
        </ul>
        
        </div>

      <div className="navicon-main">
        <NavIcons />
      </div>


    </>
  )

}

export { Navbar }