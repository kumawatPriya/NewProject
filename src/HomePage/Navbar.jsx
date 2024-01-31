import React from "react";
import { Link } from "react-router-dom";
import { NavIcons } from "./NavIcons";

function Navbar() {

  const navlist = [
    {
      name: "WESTERN",
      url: "/western"
    },
    {
      name: "ETHNICS",
      url: "/ethnics"
    },
    {
      name: "SPORTS",
      url: "/sports"
    },
    {
      name: "WATHCHES",
      url: "/watches"
    },
    {
      name: "BAGS",
      url: "/bags"
    },
    {
      name: "FOOTWEAR",
      url: "/footwear"
    },
  ]

  
  return (
    <>
    <div className="logo">
      <span className="glam">Glam</span>
      <span className="attire">WEAR</span>
    </div>
    <div className="navlist">
      {
        navlist.map((nav) => {
          return (
            <>
              <ul>
                <li>
                  <Link to={nav.url}>
                    {nav.name}
                  </Link>
                </li>
              </ul>
            </>
          )

        })
      }
      </div>
      <div className="navicon-main">
        <NavIcons/>
      </div>
    </>
  )

}

export { Navbar }