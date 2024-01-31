import React from "react";

function Image(props){
    return(
        <>
        <img className="slideImg" src={props.cimage} alt="" />
        </>
    )
}

export {Image}